
import { toast } from "sonner";

interface PromptGenerationParams {
  name: string;
  occupation: string;
  additionalInfo: string;
}

// This is a security risk, API keys should normally be kept on the backend
// For a production app, we'd use a backend service or Edge Function
const OPENAI_API_KEY = "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";

export async function generateDioramaPrompt(params: PromptGenerationParams): Promise<string> {
  const { name, occupation, additionalInfo } = params;
  
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `Bạn là một chuyên gia về nghệ thuật diorama siêu thực. Nhiệm vụ của bạn là tạo ra một đoạn mô tả chi tiết và sáng tạo về một diorama siêu thực dựa trên thông tin người dùng cung cấp.
            
            Mô tả của bạn sẽ được sử dụng làm prompt để tạo ra hình ảnh bằng AI nên hãy đảm bảo nó giàu chi tiết, hấp dẫn về mặt thị giác, và phù hợp với phong cách surrealism.
            
            Đoạn mô tả cần bao gồm:
            1. Một khung cảnh diorama siêu thực phản ánh bản chất của người dùng
            2. Các chi tiết về màu sắc, ánh sáng, vật liệu và cấu trúc
            3. Các yếu tố siêu thực và biểu tượng liên quan đến nghề nghiệp và sở thích của người dùng
            4. Các chi tiết kỹ thuật như độ sâu trường ảnh, góc máy, và phong cách ánh sáng
            
            Hãy viết bằng tiếng Việt, sử dụng ngôn ngữ sáng tạo và hình ảnh phong phú.`
          },
          {
            role: "user",
            content: `Tạo một mô tả chi tiết cho một diorama siêu thực dựa trên người thật này:
            
            Tên: ${name}
            Nghề nghiệp: ${occupation}
            Thông tin bổ sung: ${additionalInfo}
            
            Hãy ghi rõ chi tiết về màu sắc, ánh sáng, vật liệu, và các yếu tố siêu thực phản ánh bản chất của người này.`
          }
        ],
        temperature: 0.7,
        max_tokens: 1000
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error("OpenAI API Error:", errorData);
      throw new Error("Không thể kết nối đến API OpenAI. Vui lòng thử lại sau.");
    }
    
    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating prompt:", error);
    toast.error("Đã xảy ra lỗi khi tạo prompt. Vui lòng thử lại.");
    return "";
  }
}
