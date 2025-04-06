
import React, { useState } from "react";
import { Check, Copy, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface PromptDisplayProps {
  prompt: string;
  userInfo: {
    name: string;
    occupation: string;
    additionalInfo: string;
  };
  onRegenerate?: () => void;
}

const PromptDisplay: React.FC<PromptDisplayProps> = ({ prompt, userInfo, onRegenerate }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      toast.success("Đã sao chép prompt vào clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Không thể sao chép. Vui lòng thử lại.");
    }
  };

  return (
    <Card className="glass-panel w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl gold-text">Prompt Diorama Siêu Thực của Bạn</CardTitle>
        <CardDescription>
          Dựa trên thông tin: {userInfo.name}, {userInfo.occupation}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative overflow-hidden rounded-lg p-6 bg-background/30 border border-border/50 shadow-inner">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary animate-shine bg-[length:200%_100%]"></div>
          <pre className="whitespace-pre-wrap text-foreground/90 text-sm leading-relaxed">{prompt}</pre>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-4 flex-wrap">
        <Button
          variant="outline"
          className="flex-1 bg-background/50"
          onClick={copyToClipboard}
        >
          {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
          {copied ? "Đã sao chép" : "Sao chép prompt"}
        </Button>
        
        {onRegenerate && (
          <Button
            variant="outline"
            className="flex-1 bg-background/50"
            onClick={onRegenerate}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Tạo lại
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default PromptDisplay;
