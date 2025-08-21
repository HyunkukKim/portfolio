import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">나를 소개합니다</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 산업분야에서의 경험과 전략적 사고로 기업의 성장을 이끌어가는 경영기획 및 경영지원 전문가입니다
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="개발 환경" 
              className="rounded-2xl shadow-2xl"
              data-testid="img-workspace"
            />
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-6">경영전문가로서의 여정</h3>
            <p className="text-gray-700 leading-relaxed">
              다양한 산업 분야에서의 연구/개발, 사업/전략기획, 생산 등의 넓은 업무 스펙트럼과 함께 경영기획/지원을 
              전문 분야로 하고 있습니다. 바이오 분야 연구원 출신 CFO 및 경영전략본부장으로서 경영기획/전략기획, 
              재무/회계, 인사/총무 및 시스템/IT경영부서를 총괄한 경험을 보유하고 있습니다. 
              이러한 축적된 경험을 바탕으로 기업의 전략수립부터 실행, 관리, 통제까지 체계적으로 접근하는 것이 저의 강점입니다.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent-blue rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-secondary">통합적 사고</h4>
                  <p className="text-gray-600">전사적 사고로 사업을 바라보며 체계적인 전략을 수립하고 실행합니다</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent-emerald rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-secondary">데이터 기반의 의사결정</h4>
                  <p className="text-gray-600">기업환경/기술 변화에 따른 사업 시뮬레이션 분석으로 합리적 의사결정 자료를 산출합니다</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-secondary">통합적 조직 및 프로그램 관리</h4>
                  <p className="text-gray-600">PMO의 역할을 통해 개별프로젝트들을 통합 관리합니다</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
