
import { toast } from "sonner";

interface PromptGenerationParams {
  name: string;
  occupation: string;
  additionalInfo: string;
}

// Gemini API integration
const GEMINI_API_KEY = "AIzaSyCk_MvT2AFWY-_jK02Vi9jc_BX-NjNVWRk";

export async function generateDioramaPrompt(params: PromptGenerationParams): Promise<string> {
  const { name, occupation, additionalInfo } = params;
  
  try {
    const response = await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": GEMINI_API_KEY
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `Bạn là một chuyên gia về nghệ thuật diorama siêu thực. Nhiệm vụ của bạn là tạo ra một đoạn mô tả chi tiết và sáng tạo về một diorama siêu thực dựa trên thông tin người dùng cung cấp.
                
                Mô tả của bạn sẽ được sử dụng làm prompt để tạo ra hình ảnh bằng AI nên hãy đảm bảo nó giàu chi tiết, hấp dẫn về mặt thị giác, và phù hợp với phong cách surrealism.
                
                Đoạn mô tả cần bao gồm:
                1. Một khung cảnh diorama siêu thực phản ánh bản chất của người dùng
                2. Các chi tiết về màu sắc, ánh sáng, vật liệu và cấu trúc
                3. Các yếu tố siêu thực và biểu tượng liên quan đến nghề nghiệp và sở thích của người dùng
                4. Các chi tiết kỹ thuật như độ sâu trường ảnh, góc máy, và phong cách ánh sáng
                
                Hãy viết bằng tiếng Việt, sử dụng ngôn ngữ sáng tạo và hình ảnh phong phú.
                
                Tạo một mô tả chi tiết cho một diorama siêu thực dựa trên người thật này:
                
                Tên: ${name}
                Nghề nghiệp: ${occupation}
                Thông tin bổ sung: ${additionalInfo}
                
                Hãy ghi rõ chi tiết về màu sắc, ánh sáng, vật liệu, và các yếu tố siêu thực phản ánh bản chất của người này.`
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1000
        }
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Gemini API Error:", errorData);
      
      // Handle specific error types
      if (errorData.error?.status === "RESOURCE_EXHAUSTED") {
        throw new Error("Đã vượt quá giới hạn API. Vui lòng thử lại sau.");
      } else {
        throw new Error("Không thể kết nối đến API Gemini. Vui lòng thử lại sau.");
      }
    }
    
    const data = await response.json();
    if (data.candidates && data.candidates.length > 0 && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error("Không nhận được phản hồi hợp lệ từ Gemini API");
    }
  } catch (error) {
    console.error("Error generating prompt:", error);
    
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error("Đã xảy ra lỗi khi tạo prompt. Vui lòng thử lại.");
    }
    
    return "";
  }
}
