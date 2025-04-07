
import React from "react";
import { Heart, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 border-t border-border/40 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 gold-text italic">DUAstudio</h3>
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
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <p className="text-foreground/70">
                  Phone/Zalo: 038 468 2787
                </p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-secondary mt-1" />
                <p className="text-foreground/70">
                  Địa chỉ: Đường 2 Tháng 9, Phường 11, TP Vũng Tàu
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 text-foreground/50 text-sm gap-2">
          <p>© 2025 DUAstudio. Đã đăng ký bản quyền.</p>
          <div className="flex items-center">
            <Heart className="h-4 w-4 mx-2 text-destructive animate-pulse" />
            <p>Được xây dựng với tình yêu nghệ thuật</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
