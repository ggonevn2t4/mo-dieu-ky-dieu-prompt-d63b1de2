
import React from "react";
import { ClipboardPenLine, Bot, PenTool, ImageIcon } from "lucide-react";

interface StepCardProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon, number, title, description }) => {
  return (
    <div className="flex items-start gap-6">
      <div className="relative">
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center z-10 relative">
          {icon}
        </div>
        <div className="absolute text-xs font-bold bg-secondary text-secondary-foreground w-6 h-6 rounded-full flex items-center justify-center -top-1 -right-1 z-20">
          {number}
        </div>
        {number < 4 && (
          <div className="absolute w-px h-full bg-gradient-to-b from-primary/50 to-transparent left-1/2 top-12 -translate-x-1/2"></div>
        )}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-transparent to-background/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold hero-text-gradient mb-4">Cách Hoạt Động</h2>
          <p className="text-muted-foreground text-lg">
            Quy trình đơn giản để tạo ra những mô tả diorama siêu thực đặc sắc
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-12">
          <StepCard
            icon={<ClipboardPenLine className="h-6 w-6 text-primary" />}
            number={1}
            title="Nhập Thông Tin Cá Nhân"
            description="Cung cấp tên, nghề nghiệp và thông tin bổ sung để hệ thống hiểu rõ về bạn."
          />
          
          <StepCard
            icon={<Bot className="h-6 w-6 text-primary" />}
            number={2}
            title="AI Phân Tích"
            description="Công nghệ AI tiên tiến sẽ phân tích thông tin và tạo ra một prompt diorama siêu thực độc đáo."
          />
          
          <StepCard
            icon={<PenTool className="h-6 w-6 text-primary" />}
            number={3}
            title="Tùy Chỉnh Kết Quả"
            description="Xem và sao chép prompt được tạo, hoặc yêu cầu tạo lại nếu bạn muốn."
          />
          
          <StepCard
            icon={<ImageIcon className="h-6 w-6 text-primary" />}
            number={4}
            title="Tạo Hình Ảnh"
            description="Dán prompt vào ChatGPT-4 hoặc công cụ tạo hình ảnh AI khác để tạo ra tác phẩm nghệ thuật."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
