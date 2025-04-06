
import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 border-t border-border/40 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 gold-text">DioramaTech</h3>
            <p className="text-foreground/70">
              Nền tảng tạo mô tả diorama siêu thực được thiết kế để kích thích trí tưởng tượng và sáng tạo.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Liên kết</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#features" className="text-foreground/70 hover:text-foreground transition-colors">
                  Tính năng
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
                  Giới thiệu
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Liên hệ</h3>
            <p className="text-foreground/70">
              Email: support@dioramatech.vn
            </p>
            <p className="text-foreground/70 mt-2">
              Điện thoại: +84 123 456 789
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 text-foreground/50 text-sm">
          <p>© 2025 DioramaTech. Đã đăng ký bản quyền.</p>
          <Heart className="h-4 w-4 mx-2 text-destructive animate-pulse" />
          <p>Được xây dựng với tình yêu nghệ thuật</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
