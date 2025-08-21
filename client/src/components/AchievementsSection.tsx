import { motion } from "framer-motion";
import { TrendingUp, Target, Users, DollarSign, BarChart, Lightbulb } from "lucide-react";

interface AchievementProps {
  title: string;
  description: string;
  impact: string;
  metrics: string[];
  icon: "growth" | "target" | "team" | "finance" | "analytics" | "innovation";
  category: string;
}

function AchievementCard({ title, description, impact, metrics, icon, category }: AchievementProps) {
  const getIcon = () => {
    switch (icon) {
      case "growth":
        return <TrendingUp className="text-2xl text-green-600" />;
      case "target":
        return <Target className="text-2xl text-blue-600" />;
      case "team":
        return <Users className="text-2xl text-purple-600" />;
      case "finance":
        return <DollarSign className="text-2xl text-yellow-600" />;
      case "analytics":
        return <BarChart className="text-2xl text-red-600" />;
      case "innovation":
        return <Lightbulb className="text-2xl text-orange-600" />;
    }
  };

  const getIconBg = () => {
    switch (icon) {
      case "growth":
        return "bg-green-100";
      case "target":
        return "bg-blue-100";
      case "team":
        return "bg-purple-100";
      case "finance":
        return "bg-yellow-100";
      case "analytics":
        return "bg-red-100";
      case "innovation":
        return "bg-orange-100";
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      data-testid={`card-achievement-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 ${getIconBg()} rounded-lg flex items-center justify-center`}>
            {getIcon()}
          </div>
          <span className="text-xs font-semibold text-accent-blue bg-accent-blue/10 px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-secondary mb-2">주요 성과</h4>
          <p className="text-accent-emerald font-semibold">{impact}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-secondary mb-2">핵심 지표</h4>
          <div className="space-y-2">
            {metrics.map((metric, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-accent-blue rounded-full mr-2"></span>
                {metric}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function AchievementsSection() {
  // 부문별 업무 성과 데이터
  const strategicAchievements: AchievementProps[] = [
    {
      title: "전사적 통합 관리",
      description: "",
      impact: "- 주요 성과: 프로젝트의 전사적 통합 관리",
      metrics: [
        "PMO 운영 책임 및 프로젝트 통합 관리",
        "단기/중기/장기 경영 및 사업계획 수립",
        "환경/시장분석 및 수요/이익예측",
        "성과분석 및 KPI 관리, 월단위 실적 분석, 추정재무제표"
      ],
      icon: "target",
      category: "전략/경영기획부문"
    },
    {
      title: "펀딩 및 IPO 추진",
      description: "",
      impact: "- 주요 성과: 420억 투자 유치 (기업가치 1,300억)",
      metrics: [
        "국내외 VC 및 SI로부터 약 420억 투자 유치",
        "전시리즈 및 다양한 투자형태(BW/RCPS/CPS) 경험",
        "상장 업무(IPO) & 기술가치 평가",
        "투자관련 VC 및 기관 네트워크 구축"
      ],
      icon: "growth",
      category: "전략/경영기획부문"
    },
    {
      title: "관리 프로세스 구축 및 지식관리",
      description: "",
      impact: "- 주요 성과: 관리 프로세스 구축 및 지식관리",
      metrics: [
        "사규의 제정/개정 및 회의체 관리",
        "문서 체계 구축 및 온오프 관리",
        "특허 및 국책과제 기획/관리",
        "ESG 도입검토 및 각종 인증 획득"
      ],
      icon: "innovation",
      category: "전략/경영기획부문"
    }
  ];

  const financeAchievements: AchievementProps[] = [
    {
      title: "회계 파트",
      description: "",
      impact: "- 주요 성과: 투명한 재무관리 및 결산 체계 구축",
      metrics: [
        "회계규정 및 공시 프로세스 구축",
        "kGAAP에서 IFRS로의 전환 도입",
        "내부회계관리제도 구축",
        "결산 및 세무 관리 (kGAAP/kIFRS, 부가세/법인세)"
      ],
      icon: "analytics",
      category: "재무/회계 부문"
    },
    {
      title: "자금 파트",
      description: "",
      impact: "- 주요 성과: 체계적 자금 운영",
      metrics: [
        "단기/중기/장기 예산 수립 및 통제",
        "CF 분석, 영업 및 영업외 수지 예측",
        "매출채권/매입채무 관리 (사채, 당좌, 어음)",
        "투자금 관리 및 관련 행정"
      ],
      icon: "finance",
      category: "재무/회계 부문"
    },
    {
      title: "원가회계 파트",
      description: "",
      impact: "- 주요 성과: 제품별 원가 추정 시스템 구축",
      metrics: [
        "재고관리 (재고수불부) 교육 및 전산화",
        "원가 분석 및 제품별/사업부문별 분석",
        "전사 손익분기점 분석",
        "원가 효율성 개선"
      ],
      icon: "analytics",
      category: "재무/회계 부문"
    }
  ];

  const hrAchievements: AchievementProps[] = [
    {
      title: "인사/총무 부문",
      description: "",
      impact: "- 주요 성과: 체계적 인재 성과관리 시스템 확보",
      metrics: [
        "인재채용 시스템 및 인사고과 평가 시스템 구축 (MBO)",
        "노무관리 (채용, 입사, 퇴직, 보직 및 노사 대응)",
        "년간 교육 프로그램 구축 및 복리후생 계획 수립",
        "원천세 업무 검토 및 총괄 (노무법인 협업/관리)"
      ],
      icon: "team",
      category: "인사/총무 부문"
    }
  ];

  const itAchievements: AchievementProps[] = [
    {
      title: "시스템/IT 부문",
      description: ": 중요데이터의 보안/보관 시스템 기반위에 ERP를 구축하여 다양한 경영시각화를 꾀하였습니다.",
      impact: "- 주요 성과: 디지털 전환 체계 구축",
      metrics: [
        "문서 중앙화 도입/구축 (서버 및 데이터 관리 총괄)",
        "ERP 도입/구축 (인사, 회계, 영업, 생산 모듈 포함)",
        "경영보고 최적화 (화상회의, BI 보고 체계 구축)",
        "전산자산 관리 총괄 (소프트웨어, 하드웨어)"
      ],
      icon: "innovation",
      category: "시스템/IT 경영 부문"
    }
  ];

  const researchAchievements: AchievementProps[] = [
    {
      title: "연구분야 (연구원으로서)",
      description: "",
      impact: "- 주요 성과: 연구개발 성과 창출",
      metrics: [
        "학술지 (국내 4편 국외 1편)",
        "학술발표 (국내 10편 국외 3편)",
        "특허 (국내 6건 국제 6건)",
        "국책과제 (총괄책임 1건 참여연구원 12건)"
      ],
      icon: "team",
      category: "연구부문"
    }
  ];

  const allAchievements = [
    ...strategicAchievements,
    ...financeAchievements,
    ...hrAchievements,
    ...itAchievements,
    ...researchAchievements
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">주요 업무성과</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 프로젝트를 통해 창출한 실질적인 성과와 가치를 확인해보세요
          </p>
        </div>
        
        {/* 전략/경영기획부문 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-4 text-secondary">전략/경영기획부문</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AchievementCard {...achievement} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 재무/회계 부문 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-4 text-secondary">재무/회계 부문</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {financeAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AchievementCard {...achievement} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 인사/총무 부문 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-4 text-secondary">인사/총무 부문</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {hrAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AchievementCard {...achievement} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 시스템/IT 경영 부문 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-4 text-secondary">시스템/IT 경영 부문</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {itAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AchievementCard {...achievement} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 연구부문 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-4 text-secondary">연구부문</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AchievementCard {...achievement} />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Summary Stats */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-accent-blue to-accent-emerald rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">누적 성과 요약</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">420억+</div>
              <div className="text-sm opacity-90">투자유치 금액</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1,300억</div>
              <div className="text-sm opacity-90">기업가치</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">26년+</div>
              <div className="text-sm opacity-90">경력</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">19년+</div>
              <div className="text-sm opacity-90">경영기획경력</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}