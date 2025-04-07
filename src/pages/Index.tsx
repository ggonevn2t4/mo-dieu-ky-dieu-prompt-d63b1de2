
import React from "react";
import { Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UserForm from "@/components/UserForm";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CustomerGallery from "@/components/CustomerGallery";

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
              
              <div className="relative mb-12 max-w-2xl mx-auto overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src="/lovable-uploads/e96522f8-2c1a-49cc-8211-325a85a18734.png" 
                  alt="DUAstudio Diorama Collection" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              
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
        
        {/* Customer Gallery Section */}
        <CustomerGallery />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
