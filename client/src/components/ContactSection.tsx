import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "메시지가 전송되었습니다!",
        description: "빠른 시일 내에 연락드리겠습니다.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "전송 실패",
        description: "메시지 전송 중 오류가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "입력 오류",
        description: "모든 필드를 입력해주세요.",
        variant: "destructive",
      });
      return;
    }
    submitContactForm.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">연락하기</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            새로운 프로젝트나 협업 기회에 대해 언제든 연락주세요
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-6">연락처 정보</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center">
                  <Mail className="text-accent-blue text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">이메일</h4>
                  <p className="text-gray-600" data-testid="text-email">silmangiya72@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-emerald/10 rounded-full flex items-center justify-center">
                  <Phone className="text-accent-emerald text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">전화번호</h4>
                  <p className="text-gray-600" data-testid="text-phone">+82-10-2445-7207</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <MapPin className="text-purple-500 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">위치</h4>
                  <p className="text-gray-600" data-testid="text-location">경기도 화성시 거주, 대한민국</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-semibold text-secondary mb-4">소셜 미디어</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  data-testid="link-github"
                >
                  <Github className="text-xl" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="text-xl" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                  data-testid="link-twitter"
                >
                  <Twitter className="text-xl" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                  data-testid="link-instagram"
                >
                  <Instagram className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-6">메시지 보내기</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">이름</label>
                  <Input
                    type="text"
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">이메일</label>
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    data-testid="input-email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">제목</label>
                <Input
                  type="text"
                  placeholder="프로젝트 협업 문의"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">메시지</label>
                <Textarea
                  rows={5}
                  placeholder="메시지를 입력해주세요..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="resize-none"
                  data-testid="textarea-message"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-accent-blue hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                disabled={submitContactForm.isPending}
                data-testid="button-submit-contact"
              >
                {submitContactForm.isPending ? "전송 중..." : "메시지 보내기"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
