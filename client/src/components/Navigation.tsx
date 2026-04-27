import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // 네비게이션 바 높이 + 여백
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-primary cursor-pointer" onClick={() => scrollToSection('home')}>
            김현국
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-primary transition-colors duration-300"
              data-testid="nav-home"
            >
              홈
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors duration-300"
              data-testid="nav-about"
            >
              소개
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-primary transition-colors duration-300"
              data-testid="nav-experience"
            >
              이력 및 경력
            </button>
            <button 
              onClick={() => scrollToSection('achievements')}
              className="text-gray-700 hover:text-primary transition-colors duration-300"
              data-testid="nav-achievements"
            >
              주요 업무성과
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors duration-300"
              data-testid="nav-contact"
            >
              연락처
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-primary transition-colors duration-300 text-left"
                data-testid="mobile-nav-home"
              >
                홈
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary transition-colors duration-300 text-left"
                data-testid="mobile-nav-about"
              >
                소개
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-gray-700 hover:text-primary transition-colors duration-300 text-left"
                data-testid="mobile-nav-experience"
              >
                이력 및 경력
              </button>
              <button 
                onClick={() => scrollToSection('achievements')}
                className="text-gray-700 hover:text-primary transition-colors duration-300 text-left"
                data-testid="mobile-nav-achievements"
              >
                주요 업무성과
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary transition-colors duration-300 text-left"
                data-testid="mobile-nav-contact"
              >
                연락처
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
