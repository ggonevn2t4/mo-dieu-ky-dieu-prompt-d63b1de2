
import React from "react";
import { Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface CustomerDiorama {
  id: number;
  image: string;
  name: string;
  occupation: string;
}

// Danh sách diorama từ khách hàng
const customerDioramas: CustomerDiorama[] = [
  {
    id: 1,
    image: "/lovable-uploads/dung-thanh-collector.png",
    name: "Dũng Thành",
    occupation: "Buôn ve chai - Đồng nát",
  },
  {
    id: 2,
    image: "/lovable-uploads/tam-pham-chef.png",
    name: "Tâm Phạm",
    occupation: "Mì xào bánh ướt",
  },
  {
    id: 3,
    image: "/lovable-uploads/tung-nguyen-taxi.png",
    name: "Tùng Nguyên",
    occupation: "Tài xế nghèo",
  },
  {
    id: 4,
    image: "/lovable-uploads/thu-tham-princess.png",
    name: "Thu Thắm",
    occupation: "Công chúa",
  },
  {
    id: 5,
    image: "/lovable-uploads/nguyen-long-constructor.png",
    name: "Nguyễn Long",
    occupation: "Kỹ sư xây dựng nhà",
  },
  {
    id: 6,
    image: "/lovable-uploads/trong-nghia-gymer.png",
    name: "Trọng Nghĩa",
    occupation: "Gymer",
  },
  {
    id: 7,
    image: "/lovable-uploads/cao-tuan-minh-photographer.png",
    name: "Cao Tuấn Minh",
    occupation: "Chụp ảnh cưới đạo",
  },
  {
    id: 8,
    image: "/lovable-uploads/le-kim-loan-makeup.png",
    name: "Lê Thị Kim Loan",
    occupation: "Makeup cô dâu",
  },
  {
    id: 9,
    image: "/lovable-uploads/cao-hoang-teacher.png", 
    name: "Cao Hoàng",
    occupation: "Giáo viên lớp 5",
  },
  {
    id: 10,
    image: "/lovable-uploads/sang-gold-seller.png",
    name: "Sáng",
    occupation: "Chủ tiệm vàng",
  },
  {
    id: 11,
    image: "/lovable-uploads/hung-carpenter.png",
    name: "Hùng",
    occupation: "Thợ mộc",
  },
  {
    id: 12,
    image: "/lovable-uploads/lan-mercedes.png",
    name: "Lan",
    occupation: "Bán Mercedes",
  },
  {
    id: 13,
    image: "/lovable-uploads/linh-porsche.png", 
    name: "Linh",
    occupation: "Chuyên viên tư vấn Porsche",
  },
  {
    id: 14,
    image: "/lovable-uploads/minh-zoo.png",
    name: "Minh",
    occupation: "Chủ trang trại nuôi hổ",
  },
  {
    id: 15,
    image: "/lovable-uploads/quang-ai-dev.png",
    name: "Cao Nhật Quang",
    occupation: "DEV AI",
  },
  {
    id: 16,
    image: "/lovable-uploads/cao-tuan-minh-collector.png",
    name: "Cao Tuấn Minh",
    occupation: "Buôn ve chai - Đồng nát",
  }
];

const CustomerGallery: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Dioramas từ khách hàng</span>
          </div>
          <h2 className="text-3xl font-bold hero-text-gradient mb-4">
            Bộ Sưu Tập Tuyệt Vời
          </h2>
          <p className="text-muted-foreground text-lg">
            Những mô hình diorama siêu thực được tạo ra từ mô tả của chúng tôi
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {customerDioramas.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="overflow-hidden glass-panel border-none">
                    <CardContent className="p-0">
                      <div className="relative aspect-square overflow-hidden rounded-t-lg group">
                        <img
                          src={item.image}
                          alt={`${item.name} - ${item.occupation}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <h3 className="text-white text-xl font-bold">{item.name}</h3>
                          <p className="text-white/90">{item.occupation}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground">
          Hãy sử dụng dịch vụ của chúng tôi để có được prompt tạo ra những diorama độc đáo như thế này!
        </p>
      </div>
    </section>
  );
};

export default CustomerGallery;
