
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { generateDioramaPrompt } from "@/services/gemini";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Tên phải có ít nhất 2 ký tự.",
  }),
  occupation: z.string().min(2, {
    message: "Nghề nghiệp phải có ít nhất 2 ký tự.",
  }),
  additionalInfo: z.string().min(10, {
    message: "Thông tin bổ sung phải có ít nhất 10 ký tự.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const UserForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      occupation: "",
      additionalInfo: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    try {
      const prompt = await generateDioramaPrompt({
        name: values.name,
        occupation: values.occupation,
        additionalInfo: values.additionalInfo
      });
      
      if (prompt) {
        navigate("/results", { 
          state: { 
            prompt,
            userInfo: values
          } 
        });
      } else {
        toast.error("Không thể tạo prompt. Vui lòng thử lại sau.");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Đã xảy ra lỗi. Vui lòng thử lại sau.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="glass-panel p-6 rounded-xl">
        <div className="mb-6 text-center">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Thông tin của bạn</h2>
          <p className="text-muted-foreground mt-2">Hãy cung cấp thông tin để tạo prompt diorama siêu thực</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên của bạn</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Nhập tên của bạn" 
                      {...field} 
                      className="bg-background/50 border-border/50 input-focus-ring"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="occupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nghề nghiệp</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Ví dụ: Nghệ sĩ, Kỹ sư, Bác sĩ..." 
                      {...field} 
                      className="bg-background/50 border-border/50 input-focus-ring"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Thông tin bổ sung</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Mô tả thêm về bản thân như sở thích, tuổi tác, giới tính, phong cách sống..."
                      {...field}
                      className="bg-background/50 border-border/50 min-h-[120px] input-focus-ring resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full relative overflow-hidden group" 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Đang tạo...
                </>
              ) : (
                <>
                  <span className="relative z-10">Tạo Prompt Diorama</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-shine opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UserForm;
