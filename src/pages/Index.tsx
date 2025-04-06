
import React from "react";
import { Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UserForm from "@/components/UserForm";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 overflow-hidden relative">
          <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Công nghệ AI tiên tiến</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 hero-text-gradient leading-tight">
                Tạo Mô Tả Diorama Siêu Thực <br /> Cho Chính Bạn
              </h1>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Biến thông tin cá nhân của bạn thành những mô tả diorama siêu thực tuyệt đẹp. 
                Tạo và sử dụng với ChatGPT để tạo hình ảnh nghệ thuật.
              </p>
              
              <UserForm />
            </div>
          </div>
          <div className="absolute -bottom-48 left-1/2 w-[800px] h-[800px] bg-primary opacity-[0.15] rounded-full blur-[120px] -translate-x-1/2"></div>
        </section>
        
        {/* Features Section */}
        <Features />
        
        {/* How It Works Section */}
        <HowItWorks />
        
        {/* Examples Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold hero-text-gradient mb-4">Kết Quả Tuyệt Vời</h2>
              <p className="text-muted-foreground text-lg">
                Hãy trải nghiệm và tạo ra những mô tả diorama siêu thực độc đáo của riêng bạn
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="glass-panel rounded-xl p-6 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-xl font-semibold mb-4 gold-text">Nghệ Sĩ Kỹ Thuật Số</h3>
                <p className="text-muted-foreground mb-4">
                  "Diorama siêu thực với các mảnh vỡ pixel 3D bay lơ lửng, ánh sáng neon, và bảng màu sống động..."
                </p>
                <div className="text-sm text-foreground/50">Dựa trên thông tin từ người thật</div>
              </div>
              
              <div className="glass-panel rounded-xl p-6 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-xl font-semibold mb-4 gold-text">Nhà Khoa Học</h3>
                <p className="text-muted-foreground mb-4">
                  "Diorama chi tiết với các mô hình phân tử miniature, ánh sáng xanh dương, và các công thức khoa học bay lơ lửng..."
                </p>
                <div className="text-sm text-foreground/50">Dựa trên thông tin từ người thật</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
