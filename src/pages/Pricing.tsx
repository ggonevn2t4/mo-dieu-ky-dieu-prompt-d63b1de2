
import React from "react";
import { CreditCard, Banknote, Wallet } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useNavigate } from "react-router-dom";

const Pricing: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold hero-text-gradient mb-4">
              Bảng Giá Dịch Vụ
            </h1>
            <p className="text-muted-foreground">
              Chọn gói dịch vụ phù hợp với nhu cầu của bạn và trải nghiệm những diorama siêu thực đặc sắc
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Basic Plan */}
            <Card className="glass-panel border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Cơ Bản</CardTitle>
                <CardDescription>Dành cho người mới bắt đầu</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">99.000đ</span>
                  <span className="text-muted-foreground"> / lần</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>1 diorama siêu thực</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Độ phân giải cao</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Hỗ trợ qua email</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={() => navigate("/")}
                >
                  Đăng Ký Ngay
                </Button>
              </CardFooter>
            </Card>
            
            {/* Standard Plan */}
            <Card className="glass-panel border-secondary/50 relative">
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Phổ biến nhất
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Tiêu Chuẩn</CardTitle>
                <CardDescription>Dành cho nghệ sĩ sáng tạo</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">249.000đ</span>
                  <span className="text-muted-foreground"> / tháng</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>5 diorama siêu thực</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Độ phân giải cao</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Chỉnh sửa không giới hạn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Hỗ trợ qua email và điện thoại</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="secondary" 
                  className="w-full" 
                  onClick={() => navigate("/")}
                >
                  Đăng Ký Ngay
                </Button>
              </CardFooter>
            </Card>
            
            {/* Premium Plan */}
            <Card className="glass-panel border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Cao Cấp</CardTitle>
                <CardDescription>Dành cho chuyên gia</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">499.000đ</span>
                  <span className="text-muted-foreground"> / tháng</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>15 diorama siêu thực</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Độ phân giải cao nhất</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Chỉnh sửa không giới hạn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Tùy chỉnh nâng cao</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Hỗ trợ ưu tiên 24/7</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={() => navigate("/")}
                >
                  Đăng Ký Ngay
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-center">So Sánh Các Gói Dịch Vụ</h2>
            
            <div className="overflow-x-auto">
              <Table className="glass-panel">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Tính năng</TableHead>
                    <TableHead>Cơ Bản</TableHead>
                    <TableHead>Tiêu Chuẩn</TableHead>
                    <TableHead>Cao Cấp</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Số lượng diorama</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>15</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Độ phân giải</TableCell>
                    <TableCell>Cao</TableCell>
                    <TableCell>Cao</TableCell>
                    <TableCell>Cao nhất</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Chỉnh sửa</TableCell>
                    <TableCell>1 lần</TableCell>
                    <TableCell>Không giới hạn</TableCell>
                    <TableCell>Không giới hạn</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Thời gian hỗ trợ</TableCell>
                    <TableCell>Giờ hành chính</TableCell>
                    <TableCell>Giờ hành chính</TableCell>
                    <TableCell>24/7</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-2xl font-semibold mb-8 text-center">Phương Thức Thanh Toán</h2>
            
            <Tabs defaultValue="bank">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="bank">Chuyển Khoản Ngân Hàng</TabsTrigger>
                <TabsTrigger value="momo">Ví MoMo</TabsTrigger>
                <TabsTrigger value="other">Phương Thức Khác</TabsTrigger>
              </TabsList>
              
              <TabsContent value="bank" className="glass-panel p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Banknote className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Chuyển Khoản Ngân Hàng</h3>
                    <p className="text-muted-foreground mb-4">
                      Chuyển khoản trực tiếp đến tài khoản ngân hàng của chúng tôi. Vui lòng ghi rõ họ tên và số điện thoại trong nội dung chuyển khoản.
                    </p>
                    
                    <div className="bg-muted/30 p-4 rounded-md mb-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium mb-1">Ngân hàng:</p>
                          <p className="text-base font-semibold">MB Bank</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Số tài khoản:</p>
                          <p className="text-base font-semibold">8873333333</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Chủ tài khoản:</p>
                          <p className="text-base font-semibold">Cao Nhật Quang</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Chi nhánh:</p>
                          <p className="text-base font-semibold">Hồ Chí Minh</p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      Sau khi chuyển khoản, vui lòng gửi biên lai chuyển khoản qua email hoặc số điện thoại của chúng tôi để xác nhận thanh toán nhanh chóng.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="momo" className="glass-panel p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Wallet className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ví Điện Tử MoMo</h3>
                    <p className="text-muted-foreground mb-4">
                      Thanh toán nhanh chóng và an toàn qua ví điện tử MoMo. Quét mã QR hoặc chuyển tiền trực tiếp đến số điện thoại.
                    </p>
                    
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-white p-4 rounded-lg">
                        <img 
                          src="https://via.placeholder.com/200x200?text=MoMo+QR" 
                          alt="Mã QR MoMo" 
                          className="w-40 h-40 mx-auto"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-muted/30 p-4 rounded-md mb-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium mb-1">Số điện thoại:</p>
                          <p className="text-base font-semibold">038 468 2787</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Chủ tài khoản:</p>
                          <p className="text-base font-semibold">Cao Nhật Quang</p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      Vui lòng chụp màn hình biên lai thanh toán và gửi cho chúng tôi qua email hoặc số điện thoại để xác nhận giao dịch.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="other" className="glass-panel p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <CreditCard className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Các Phương Thức Khác</h3>
                    <p className="text-muted-foreground mb-4">
                      Ngoài chuyển khoản ngân hàng và ví MoMo, chúng tôi còn hỗ trợ các phương thức thanh toán khác.
                    </p>
                    
                    <Collapsible className="mb-4">
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted/30 rounded-md hover:bg-muted/40 transition-colors">
                        <span className="font-medium">Thanh toán trực tiếp</span>
                        <span>+</span>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 pt-2">
                        <p>
                          Bạn có thể đến trực tiếp văn phòng của chúng tôi tại Đường 2 Tháng 9, Phường 11, TP Vũng Tàu để thanh toán bằng tiền mặt.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted/30 rounded-md hover:bg-muted/40 transition-colors">
                        <span className="font-medium">Thanh toán qua ZaloPay</span>
                        <span>+</span>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 pt-2">
                        <p>
                          Chúng tôi cũng hỗ trợ thanh toán qua ZaloPay. Vui lòng liên hệ với chúng tôi qua số điện thoại 038 468 2787 để được hướng dẫn cụ thể.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="max-w-3xl mx-auto mt-20 text-center">
            <h2 className="text-2xl font-semibold mb-4">Bạn Còn Thắc Mắc?</h2>
            <p className="text-muted-foreground mb-8">
              Liên hệ với chúng tôi qua email hoặc số điện thoại để được hỗ trợ nhanh chóng.
            </p>
            <Button 
              className="mx-auto"
              onClick={() => navigate("/")}
            >
              Liên Hệ Ngay
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
