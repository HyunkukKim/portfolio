export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">김도현</h3>
            <p className="text-gray-300">풀스택 개발자</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-white transition-colors"
              data-testid="footer-nav-home"
            >
              홈
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors"
              data-testid="footer-nav-about"
            >
              소개
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-white transition-colors"
              data-testid="footer-nav-skills"
            >
              기술
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-300 hover:text-white transition-colors"
              data-testid="footer-nav-portfolio"
            >
              포트폴리오
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors"
              data-testid="footer-nav-contact"
            >
              연락처
            </button>
          </div>
          
          <div className="border-t border-gray-600 pt-8">
            <p className="text-gray-400" data-testid="text-copyright">
              © 2024 김도현. 모든 권리 보유.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
