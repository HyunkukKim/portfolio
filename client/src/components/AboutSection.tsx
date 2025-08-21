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
            다양한 산업분야에서 쌓은 경험과 전략적 사고로 기업의 성장을 이끌어가는 경영전문가입니다
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
              다양한 산업분야에서 축적한 경험을 바탕으로 기업의 전략수립부터 실행까지 
              체계적으로 접근하는 것이 저의 강점입니다. 복잡한 비즈니스 환경에서 
              최적의 솔루션을 찾아내고 실질적인 성과를 만들어내는 것이 저의 가장 큰 보람입니다.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent-blue rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-secondary">전략적 사고</h4>
                  <p className="text-gray-600">거시적 관점에서 사업을 바라보고 체계적인 전략을 수립하여 실행합니다</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent-emerald rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-secondary">데이터 기반 의사결정</h4>
                  <p className="text-gray-600">정확한 데이터 분석을 통해 합리적이고 효과적인 의사결정을 내립니다</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-secondary">조직 운영 및 관리</h4>
                  <p className="text-gray-600">효율적인 조직 운영과 체계적인 업무 관리를 통해 성과를 극대화합니다</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
