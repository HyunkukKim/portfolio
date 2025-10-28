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
              {item.trim() !== "" && <span className="w-2 h-2 bg-accent-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>}
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
      company: "(주)엠피오스",
      position: "CFO/COO/전무이사",
      period: "2025.09 - 2025.10",
      description: [
        "사업전략, 경영기획 총괄",
        "재무/회계 총괄"
      ],
      type: "work"
    },
    {
      company: "(주)에이피테크놀로지",
      position: "경영컨설팅",
      period: "2024.07 - 2025.08",
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
        "GMO 분석 및 발효최적화 연구",
        "국내학술발표 1건 특허 (국내 1건 국제 1건)",
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
        "균주개발, 발효 최적화, 바이오환경 분야 연구 및 제품 개발",
        "국내 학술 발표 (5편) 특허 (국내 2건 국제 2건)"
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
        "학술지 (국내 4편 국제 1편) 학술발표 (국내 4편 국제 3편) 특허 (국내 2편 국제 2편)"
      ],
      type: "education"
    },
    {
      company: "부경대학교",
      position: "생물공학과 학사",
      period: "1991.03 - 1995.02",
      description: [
        "전공: 생물공학 (공학사)"
      ],
      type: "education"
    }
  ];

  const certifications = [
    "PMP (Project Management Professional)\n- PMI (USA)",
    "기업·기술가치평가사(KCVA)\n- 한국기업기술가치평가협회",
    "가치분석사 (VAS)\n- 한국기업기술가치평가협회",
    "무형자산 가치평가 실무과정 수료",
    "국제공인가치평가사(ICVS) 양성과정 수료",
    "PRINCE2 자격 교육과정 수료"
  ];

  return (
    <section id="experience" className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">이력 및 경력</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 산업분야에서의 풍부한 경험과 전문성을 바탕으로 성장해온 여정을 소개합니다
          </p>
        </motion.div>

        <div className="space-y-8 mb-16">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>

        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-secondary">자격증 및 인증</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="flex items-center p-4 bg-gradient-to-r from-accent-blue/5 to-accent-emerald/5 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Award className="text-accent-blue mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-700 text-sm" data-testid={`cert-${index}`}>{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}