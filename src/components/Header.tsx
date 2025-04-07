
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="py-4 border-b border-border/40">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold gold-text italic">DUAstudio</h1>
          </Link>
          
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <Link 
                  to="/" 
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link 
                  to="/pricing" 
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Bảng Giá
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  className="bg-primary/20 text-primary hover:bg-primary/30 px-4 py-2 rounded-md transition-colors"
                >
                  Tạo Ngay
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
