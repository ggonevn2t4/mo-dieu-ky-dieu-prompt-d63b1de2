
import { toast } from "sonner";

interface PromptGenerationParams {
  name: string;
  occupation: string;
  additionalInfo: string;
}

// This is a security risk, API keys should normally be kept on the backend
// For a production app, we'd use a backend service or Edge Function
const DEEPSEEK_API_KEY = "sk-cd308e06aeef4cb999efa5c3d59b0376";

export async function generateDioramaPrompt(params: PromptGenerationParams): Promise<string> {
  const { name, occupation, additionalInfo } = params;
  
  try {
    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: "deepseek-chat", 
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
      console.error("DeepSeek API Error:", errorData);
      
      // Xử lý các loại lỗi cụ thể
      if (errorData.error?.code === "insufficient_quota") {
        throw new Error("Tài khoản DeepSeek của bạn đã hết hạn mức. Vui lòng kiểm tra thông tin thanh toán của bạn.");
      } else if (errorData.error?.code === "rate_limit_exceeded") {
        throw new Error("Đã vượt quá giới hạn tốc độ API. Vui lòng thử lại sau một vài phút.");
      } else {
        throw new Error("Không thể kết nối đến API DeepSeek. Vui lòng thử lại sau.");
      }
    }
    
    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating prompt:", error);
    
    // Hiển thị thông báo lỗi cụ thể hơn cho người dùng
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error("Đã xảy ra lỗi khi tạo prompt. Vui lòng thử lại.");
    }
    
    return "";
  }
}
