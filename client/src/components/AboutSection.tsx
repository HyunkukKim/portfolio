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
            기술에 대한 열정과 창의적 사고로 혁신적인 솔루션을 만들어가는 개발자입니다
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
            <h3 className="text-2xl font-bold text-secondary mb-6">개발자가 된 이유</h3>
            <p className="text-gray-700 leading-relaxed">
              어린 시절부터 컴퓨터와 기술에 매료되어 있었고, 코드 한 줄로 세상을 바꿀 수 있다는 
              가능성에 흥미를 느꼈습니다. 사용자의 니즈를 파악하고 이를 기술적으로 구현하여 
              실질적인 가치를 창출하는 것이 저의 가장 큰 동력입니다.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent-blue rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-secondary">문제 해결 지향적 사고</h4>
                  <p className="text-gray-600">복잡한 문제를 단순하고 효율적인 솔루션으로 풀어내는 것을 추구합니다</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent-emerald rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-secondary">지속적인 학습</h4>
                  <p className="text-gray-600">빠르게 변화하는 기술 트렌드에 맞춰 꾸준히 학습하고 성장합니다</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-secondary">협업과 소통</h4>
                  <p className="text-gray-600">팀워크를 중시하며 명확한 커뮤니케이션을 통해 프로젝트를 성공으로 이끕니다</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
