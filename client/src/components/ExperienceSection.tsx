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
      company: "글로벌 제조기업",
      position: "경영기획팀 팀장",
      period: "2020.03 - 현재",
      description: [
        "중장기 경영전략 수립 및 실행 관리",
        "신사업 기회 발굴 및 사업성 검토",
        "경영진 보고서 작성 및 의사결정 지원",
        "예산 편성 및 성과 관리 체계 구축"
      ],
      type: "work"
    },
    {
      company: "대기업 계열사",
      position: "경영지원팀 과장",
      period: "2017.01 - 2020.02",
      description: [
        "조직 운영 효율화 프로젝트 기획 및 실행",
        "업무 프로세스 개선 및 표준화",
        "인사제도 개선 및 성과평가 시스템 구축",
        "경영정보 시스템 도입 및 운영"
      ],
      type: "work"
    },
    {
      company: "컨설팅 회사",
      position: "시니어 컨설턴트",
      period: "2014.03 - 2016.12",
      description: [
        "중소기업 경영진단 및 개선방안 제시",
        "사업 재구조화 및 비용 절감 프로젝트",
        "조직문화 개선 및 변화관리",
        "정부 지원사업 기획 및 신청 지원"
      ],
      type: "work"
    },
    {
      company: "서울대학교",
      position: "경영학 석사",
      period: "2012.03 - 2014.02",
      description: [
        "전공: 경영전략 및 조직관리",
        "논문: '중소기업의 디지털 전환과 경영성과'",
        "학점: 4.3/4.5",
        "우수논문상 수상"
      ],
      type: "education"
    },
    {
      company: "경희대학교",
      position: "경영학 학사",
      period: "2008.03 - 2012.02",
      description: [
        "전공: 경영학과",
        "부전공: 국제통상학",
        "학점: 4.1/4.5",
        "졸업작품 우수상 수상"
      ],
      type: "education"
    }
  ];

  const certifications = [
    "경영지도사 (중소벤처기업부)",
    "투자자산운용사 (금융투자협회)",
    "프로젝트관리전문가 (PMP)",
    "디지털 혁신 전문가 (DIAT)"
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