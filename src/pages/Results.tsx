
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromptDisplay from "@/components/PromptDisplay";
import { generateDioramaPrompt } from "@/services/openai";
import { toast } from "sonner";

const Results: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState<string>(
    location.state?.prompt || ""
  );
  const userInfo = location.state?.userInfo || {
    name: "",
    occupation: "",
    additionalInfo: "",
  };

  // Redirect to home if no prompt data is available
  React.useEffect(() => {
    if (!location.state?.prompt) {
      navigate("/");
      toast.error("Không tìm thấy dữ liệu prompt. Vui lòng thử lại.");
    }
  }, [location.state, navigate]);

  const handleRegenerate = async () => {
    setIsRegenerating(true);
    try {
      const newPrompt = await generateDioramaPrompt(userInfo);
      
      if (newPrompt) {
        setCurrentPrompt(newPrompt);
        toast.success("Đã tạo prompt mới thành công!");
      } else {
        toast.error("Không thể tạo prompt mới. Vui lòng thử lại sau.");
      }
    } catch (error) {
      toast.error("Đã xảy ra lỗi. Vui lòng thử lại sau.");
    } finally {
      setIsRegenerating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container">
          <Button
            variant="ghost"
            className="mb-8"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại
          </Button>
          
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold hero-text-gradient mb-4">
              Diorama Siêu Thực Của Bạn
            </h1>
            <p className="text-muted-foreground">
              Đây là prompt được tạo riêng cho bạn. Sao chép và sử dụng với ChatGPT-4 để tạo hình ảnh.
            </p>
          </div>
          
          {isRegenerating ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-8 w-8 text-primary animate-spin" />
              <span className="ml-2 text-lg">Đang tạo lại prompt...</span>
            </div>
          ) : (
            <PromptDisplay 
              prompt={currentPrompt} 
              userInfo={userInfo} 
              onRegenerate={handleRegenerate}
            />
          )}
          
          <div className="mt-16 glass-panel rounded-xl p-6 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Hướng dẫn sử dụng</h2>
            <ol className="list-decimal list-inside space-y-3 text-foreground/80">
              <li>Sao chép prompt được tạo bằng cách nhấn vào nút "Sao chép prompt".</li>
              <li>Truy cập <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">ChatGPT-4</a> hoặc công cụ tạo hình ảnh AI khác.</li>
              <li>Dán prompt vào và yêu cầu tạo hình ảnh diorama siêu thực dựa trên mô tả.</li>
              <li>Lưu và chia sẻ kết quả tuyệt đẹp của bạn!</li>
            </ol>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
