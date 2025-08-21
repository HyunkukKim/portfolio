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
      title: "전략기획 및 PMO 운영",
      description: "중장기 경영전략 수립과 전사적 프로젝트/포트폴리오 관리 총괄 책임자로서 프로젝트 지식체계 및 방법론을 적용하여 효율적인 프로젝트 관리 시스템을 구축했습니다.",
      impact: "프로젝트 성공률 95% 달성",
      metrics: [
        "PMO 시스템 구축 및 운영",
        "중장기 경영전략 수립",
        "전부서 통합 운영관리",
        "성과분석 및 KPI 관리 체계화"
      ],
      icon: "target",
      category: "전략/경영기획부문"
    },
    {
      title: "투자유치 및 기업가치 관리",
      description: "국내외 유수 VC 및 글로벌 SI로부터 전시리즈(A~C) 투자를 성공적으로 유치하고, 다양한 투자형태(BW/RCPS/CPS)를 경험하며 기업가치 1,300억원을 달성했습니다.",
      impact: "기업가치 1,300억원 달성",
      metrics: [
        "420억원 투자 유치",
        "전시리즈 A~C 라운드 완료",
        "글로벌 SI 및 VC 네트워크 구축",
        "기업가치평가 실무 완료"
      ],
      icon: "growth",
      category: "전략/경영기획부문"
    }
  ];

  const financeAchievements: AchievementProps[] = [
    {
      title: "재무회계 체계 구축 및 IFRS 전환",
      description: "kGAAP에서 IFRS로의 전환을 총괄하고, 내부회계관리제도를 구축하여 투명한 재무관리 체계를 확립했습니다.",
      impact: "회계투명성 및 신뢰성 확보",
      metrics: [
        "IFRS 전환 성공적 완료",
        "내부회계관리제도 구축",
        "결산 및 세무관리 체계화",
        "다수의 외부 DD 성공적 대응"
      ],
      icon: "analytics",
      category: "재무/회계 부문"
    },
    {
      title: "코스닥 IPO 기술성평가특례 추진",
      description: "코스닥 기술성평가특례 상장을 위한 전담 실무 및 총괄업무를 수행하며, 기술성 및 사업성 평가를 체계적으로 관리했습니다.",
      impact: "IPO 추진 기반 구축",
      metrics: [
        "코스닥 기술성평가특례 실무 총괄",
        "기업/기관 네트워크 구축",
        "상장 준비 체계 구축",
        "재무실사 대응 완료"
      ],
      icon: "finance",
      category: "재무/회계 부문"
    }
  ];

  const hrAchievements: AchievementProps[] = [
    {
      title: "인사제도 구축 및 조직관리",
      description: "전사 인사제도 개선과 조직 효율성 제고를 위한 체계적인 인사관리 시스템을 구축하고 운영했습니다.",
      impact: "조직 효율성 30% 향상",
      metrics: [
        "인사제도 체계화",
        "조직관리 시스템 구축",
        "성과평가 체계 개선",
        "직무분석 및 역량관리"
      ],
      icon: "team",
      category: "인사/총무 부문"
    }
  ];

  const itAchievements: AchievementProps[] = [
    {
      title: "ERP 시스템 도입 및 디지털 전환",
      description: "전사 ERP 시스템(인사, 회계, 영업, 생산 모듈 포함) 도입을 총괄하고, 문서 중앙화 시스템 구축으로 업무 효율성을 대폭 개선했습니다.",
      impact: "업무 효율성 40% 향상",
      metrics: [
        "ERP 시스템 전 모듈 구축",
        "문서 중앙화 시스템 도입",
        "BI 형태 보고 체계 구축",
        "전산자산 관리 시스템 구축"
      ],
      icon: "innovation",
      category: "시스템/IT 경영 부문"
    }
  ];

  const researchAchievements: AchievementProps[] = [
    {
      title: "연구개발 및 특허 관리",
      description: "재조합단백질 생산기술 개발 연구책임자로서 국책과제를 수행하고, 특허관리 및 신제품 개발방향을 제시했습니다.",
      impact: "12건 국책과제 완료",
      metrics: [
        "연구책임자 1건, 책임연구원 11건",
        "국내외 특허 다수 보유",
        "특허 포트폴리오 구성",
        "신제품 개발방향 제시"
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
          <h3 className="text-2xl font-bold text-center mb-8 text-secondary">전략/경영기획부문</h3>
          <div className="grid md:grid-cols-2 gap-8">
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
          <h3 className="text-2xl font-bold text-center mb-8 text-secondary">재무/회계 부문</h3>
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
          <h3 className="text-2xl font-bold text-center mb-8 text-secondary">인사/총무 부문</h3>
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
          <h3 className="text-2xl font-bold text-center mb-8 text-secondary">시스템/IT 경영 부문</h3>
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
          <h3 className="text-2xl font-bold text-center mb-8 text-secondary">연구부문</h3>
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
              <div className="text-sm opacity-90">CFO 경험</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}