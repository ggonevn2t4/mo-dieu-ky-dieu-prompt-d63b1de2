
import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="w-full py-6">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <Sparkles className="h-8 w-8 text-secondary animate-float" />
            <div className="absolute inset-0 blur-sm opacity-50 bg-secondary rounded-full"></div>
          </div>
          <span className="font-bold text-2xl gold-text italic">DUAstudio</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Trang chủ
          </Link>
          <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
            Tính năng
          </a>
          <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
            Giới thiệu
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
