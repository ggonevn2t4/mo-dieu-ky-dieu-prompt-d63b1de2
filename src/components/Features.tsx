
import React from "react";
import { Sparkles, BrainCircuit, Copy, Image } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-primary/10">
      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold hero-text-gradient mb-4">Tính năng nổi bật</h2>
          <p className="text-muted-foreground text-lg">
            DioramaTech mang đến những công cụ mạnh mẽ để biến ý tưởng của bạn thành hiện thực
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BrainCircuit className="h-6 w-6 text-primary" />}
            title="AI Siêu Thông Minh"
            description="Sử dụng công nghệ GPT-4 tiên tiến để tạo ra những mô tả siêu thực chi tiết và sáng tạo."
          />
          
          <FeatureCard
            icon={<Sparkles className="h-6 w-6 text-secondary" />}
            title="Cá Nhân Hóa Tối Đa"
            description="Tạo prompt diorama dựa trên thông tin cá nhân, nghề nghiệp và sở thích của bạn."
          />
          
          <FeatureCard
            icon={<Copy className="h-6 w-6 text-primary" />}
            title="Dễ Dàng Sử Dụng"
            description="Sao chép prompt với một cú nhấp chuột và sử dụng ngay với ChatGPT-4 để tạo hình ảnh."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
