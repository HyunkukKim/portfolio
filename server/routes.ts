import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요"),
  email: z.string().email("올바른 이메일 주소를 입력해주세요"),
  subject: z.string().min(1, "제목을 입력해주세요"),
  message: z.string().min(1, "메시지를 입력해주세요"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Here you would typically:
      // 1. Save to database
      // 2. Send email notification
      // 3. Integration with email service (SendGrid, etc.)
      
      console.log("Contact form submission:", validatedData);
      
      // For now, just log the form data and return success
      res.json({ 
        success: true, 
        message: "메시지가 성공적으로 전송되었습니다." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "입력 데이터가 올바르지 않습니다.",
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "서버 오류가 발생했습니다." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
