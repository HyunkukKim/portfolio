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
  const achievements: AchievementProps[] = [
    {
      title: "신사업 진출 전략 수립",
      description: "글로벌 시장 진출을 위한 종합적인 사업 전략을 수립하고 실행 로드맵을 제시하여 회사의 새로운 성장동력을 확보했습니다.",
      impact: "연간 매출 30% 증가 달성",
      metrics: [
        "시장조사 및 경쟁분석 완료",
        "사업계획서 작성 및 승인",
        "초기 투자금 50억원 확보",
        "신규 고객 200% 증가"
      ],
      icon: "growth",
      category: "전략기획"
    },
    {
      title: "조직 효율성 개선 프로젝트",
      description: "전사 업무 프로세스를 분석하고 디지털화를 통해 업무 효율성을 대폭 향상시키는 혁신 프로젝트를 성공적으로 완료했습니다.",
      impact: "업무 처리시간 40% 단축",
      metrics: [
        "프로세스 표준화 100% 완료",
        "디지털 시스템 도입",
        "직원 만족도 25% 향상",
        "연간 운영비 15% 절감"
      ],
      icon: "target",
      category: "경영혁신"
    },
    {
      title: "성과관리 체계 구축",
      description: "전사 성과관리 시스템을 새롭게 구축하여 객관적이고 공정한 평가 체계를 마련하고 조직의 목표 달성도를 향상시켰습니다.",
      impact: "목표 달성률 85% → 95% 향상",
      metrics: [
        "KPI 체계 전면 개선",
        "실시간 성과 모니터링",
        "피드백 시스템 구축",
        "인센티브 제도 개선"
      ],
      icon: "analytics",
      category: "성과관리"
    },
    {
      title: "비용 최적화 프로그램",
      description: "전사 비용구조를 분석하고 불필요한 지출을 제거하여 수익성을 개선하는 동시에 경쟁력을 강화했습니다.",
      impact: "연간 운영비 20% 절감",
      metrics: [
        "비용 구조 전면 분석",
        "공급업체 재협상",
        "자동화 시스템 도입",
        "ROI 150% 달성"
      ],
      icon: "finance",
      category: "재무관리"
    },
    {
      title: "인재 육성 프로그램 개발",
      description: "차세대 리더를 양성하기 위한 체계적인 교육 프로그램을 기획하고 운영하여 조직의 핵심 역량을 강화했습니다.",
      impact: "내부 승진율 60% 증가",
      metrics: [
        "교육 프로그램 20개 과정 개발",
        "멘토링 시스템 구축",
        "역량 평가 체계 마련",
        "리더십 지수 30% 향상"
      ],
      icon: "team",
      category: "인재개발"
    },
    {
      title: "디지털 전환 기획",
      description: "4차 산업혁명 시대에 맞는 디지털 전환 전략을 수립하고 스마트 팩토리 구축을 통해 생산성을 혁신했습니다.",
      impact: "생산성 35% 향상",
      metrics: [
        "IoT 시스템 구축",
        "AI 기반 품질관리",
        "데이터 분석 플랫폼 도입",
        "스마트 팩토리 인증 획득"
      ],
      icon: "innovation",
      category: "디지털혁신"
    }
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
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
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">완료 프로젝트</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">200억+</div>
              <div className="text-sm opacity-90">비용 절감 효과</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">목표 달성률</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10년+</div>
              <div className="text-sm opacity-90">경영 경험</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}