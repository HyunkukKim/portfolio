import { motion } from "framer-motion";
import { Code, Server, Wrench } from "lucide-react";

interface SkillItemProps {
  name: string;
  percentage: number;
  color: string;
}

function SkillItem({ name, percentage, color }: SkillItemProps) {
  return (
    <div className="skill-item">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{name}</span>
        <span className={color}>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div 
          className={`h-2 rounded-full ${color.replace('text-', 'bg-')}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const frontendSkills = [
    { name: "React", percentage: 95, color: "text-accent-blue" },
    { name: "TypeScript", percentage: 90, color: "text-accent-blue" },
    { name: "Next.js", percentage: 85, color: "text-accent-blue" },
    { name: "Tailwind CSS", percentage: 92, color: "text-accent-blue" },
  ];

  const backendSkills = [
    { name: "Node.js", percentage: 88, color: "text-accent-emerald" },
    { name: "Python", percentage: 85, color: "text-accent-emerald" },
    { name: "PostgreSQL", percentage: 80, color: "text-accent-emerald" },
    { name: "Docker", percentage: 75, color: "text-accent-emerald" },
  ];

  const toolsSkills = [
    { name: "Git", percentage: 95, color: "text-purple-500" },
    { name: "AWS", percentage: 70, color: "text-purple-500" },
    { name: "Figma", percentage: 85, color: "text-purple-500" },
    { name: "Agile", percentage: 90, color: "text-purple-500" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">기술 스택</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 기술을 활용하여 완성도 높은 웹 애플리케이션을 개발합니다
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            data-testid="card-frontend-skills"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-3xl text-accent-blue" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">Frontend</h3>
            </div>
            
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillItem {...skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Backend Skills */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            data-testid="card-backend-skills"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-accent-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="text-3xl text-accent-emerald" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">Backend</h3>
            </div>
            
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillItem {...skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Tools & Others */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            data-testid="card-tools-skills"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="text-3xl text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">도구 & 기타</h3>
            </div>
            
            <div className="space-y-4">
              {toolsSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillItem {...skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
