import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  description: string[];
  type: "work" | "education" | "certification";
}

function ExperienceItem({ company, position, period, description, type }: ExperienceItemProps) {
  const getIcon = () => {
    switch (type) {
      case "work":
        return <Briefcase className="text-2xl text-accent-blue" />;
      case "education":
        return <GraduationCap className="text-2xl text-accent-emerald" />;
      case "certification":
        return <Award className="text-2xl text-purple-500" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case "work":
        return "bg-accent-blue/10";
      case "education":
        return "bg-accent-emerald/10";
      case "certification":
        return "bg-purple-500/10";
    }
  };

  return (
    <motion.div 
      className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className={`w-12 h-12 ${getBgColor()} rounded-full flex items-center justify-center flex-shrink-0`}>
        {getIcon()}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-secondary mb-1">{position}</h3>
        <h4 className="text-lg font-semibold text-accent-blue mb-2">{company}</h4>
        <p className="text-sm text-gray-500 mb-3">{period}</p>
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-gray-600 flex items-start">
              <span className="w-2 h-2 bg-accent-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const experiences: ExperienceItemProps[] = [
    {
      company: "(주)에이피테크놀로지",
      position: "경영컨설팅",
      period: "2024.07 - 현재",
      description: [
        "경영기획/지원 컨설팅"
      ],
      type: "work"
    },
    {
      company: "(주)에이피테크놀로지",
      position: "CFO/본부장/상무이사",
      period: "2005.01 - 2024.06 (19년 5개월)",
      description: [
        "경영전략본부 총괄 (전략/경영기획, 재무/회계, 인사/총무, 시스템/IT경영)",
        "",
        "등기이사 (2008.2 ~ 2024.7)",
        "",
        "재조합단백질 공정 및 소재 연구개발 (국책과제 (연구책임자 1건 책임연구원 11건) 특허 (국내 1건 국제 1건))"
      ],
      type: "work"
    },
    {
      company: "샘표식품 (주)",
      position: "기획/연구원",
      period: "2001.10 - 2005.01 (3년 3개월)",
      description: [
        "CMO 분석 및 발효최적화 연구 (국내학술발표 1건 특허 (국내 1건 국제 1건)",
        "",
        "제품 개발"
      ],
      type: "work"
    },
    {
      company: "(주)아이비진 (구. 인바이오넷)",
      position: "연구원",
      period: "1998.02 - 2001.10 (3년 8개월)",
      description: [
        "균주개발, 발효 최적화, 바이오환경 분야 연구 및 제품 개발 (국내 학술 발표 (5편) 특허 (국내 2건 국제 2건))"
      ],
      type: "work"
    },
    {
      company: "부경대학교",
      position: "생물산업공학과 석사",
      period: "1995.03 - 1998.02",
      description: [
        "전공: 미생물유전학 (공학석사)",
        "",
        "연구성과 (학술지 (국내 4편 국제 1편) 학술발표 (국내 4편 국제 3편) 특허 (국내 2건 국제 2건)"
      ],
      type: "education"
    },
    {
      company: "부경대학교",
      position: "생물공학과 학사",
      period: "1991.03 - 1995.02",
      description: [
        "전공: 생물공학과",
        "공학사 학위 취득",
        "미생물 유전학 전문",
        "기초 연구 및 실험 기법 습득"
      ],
      type: "education"
    }
  ];

  const certifications = [
    "PMP (Project Management Professional) - PMI (USA)",
    "기업·기술가치평가사(KCVA) - 한국기업기술가치평가협회",
    "가치분석사 (VAS) - 한국기업기술가치평가협회",
    "무형자산 가치평가 실무과정 수료",
    "국제공인가치평가사(ICVS) 양성과정 수료",
    "PRINCE2 자격 교육과정 수료"
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">이력 및 경력</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 산업분야에서 쌓아온 풍부한 경험과 전문성을 소개합니다
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-8 flex items-center">
              <Briefcase className="mr-3 text-accent-blue" />
              주요 경력
            </h3>
            <div className="space-y-6">
              {experiences.filter(exp => exp.type === "work").map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ExperienceItem {...exp} />
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-8 flex items-center">
              <GraduationCap className="mr-3 text-accent-emerald" />
              학력
            </h3>
            <div className="space-y-6">
              {experiences.filter(exp => exp.type === "education").map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ExperienceItem {...exp} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Certifications */}
        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center justify-center">
            <Award className="mr-3 text-purple-500" />
            자격증 및 인증
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-purple-50 text-purple-800 px-4 py-3 rounded-lg text-center font-semibold"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`cert-${index}`}
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}