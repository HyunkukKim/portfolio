import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">연락하기</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            채용 제안, 협업, 업무 지원과 관련하여 언제든 연락주십시요.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-8 text-center">연락처 정보</h3>
            
            {/* Contact Info Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center">
                  <Mail className="text-accent-blue text-2xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary text-lg">이메일</h4>
                  <p className="text-gray-600" data-testid="text-email">silmangiya72@gmail.com</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-accent-emerald/10 rounded-full flex items-center justify-center">
                  <Phone className="text-accent-emerald text-2xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary text-lg">전화번호</h4>
                  <p className="text-gray-600" data-testid="text-phone">+82-10-2445-7207</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <MapPin className="text-purple-500 text-2xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary text-lg">위치</h4>
                  <p className="text-gray-600" data-testid="text-location">경기도 화성시 거주, 대한민국</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="text-center">
              <h4 className="font-semibold text-secondary text-lg mb-6">소셜 미디어</h4>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.facebook.com/hyunkuk.kim.27/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors transform hover:scale-110"
                  data-testid="link-facebook"
                >
                  <Facebook className="text-xl" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/hyunkuk-kim-10161b107/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors transform hover:scale-110"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="text-xl" />
                </a>
                <a 
                  href="https://www.instagram.com/hyunkuk.kim.27/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors transform hover:scale-110"
                  data-testid="link-instagram"
                >
                  <Instagram className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
