import { motion } from "framer-motion";
import profileImage from "@assets/main image_1755755702718.jpeg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Floating shapes for visual interest */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-white/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <motion.div 
        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="mb-8">
          <img 
            src={profileImage} 
            alt="김현국 프로필 사진" 
            className="w-32 h-32 rounded-full mx-auto border-4 border-white/30 shadow-2xl object-cover"
            data-testid="img-profile"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          안녕하세요, <br />
          <span className="text-accent-emerald">김현국</span> 입니다
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto leading-relaxed">
          다양한 산업분야와 업무영역을 경험한 <br />
          경영기획 및 경영지원 전문가
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-accent-emerald hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            data-testid="button-contact"
          >
            연락하기
          </button>
        </div>
      </motion.div>
    </section>
  );
}
