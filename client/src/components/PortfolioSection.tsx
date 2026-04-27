import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

function ProjectCard({ title, description, image, technologies, githubUrl, liveUrl }: ProjectProps) {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
        data-testid={`img-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
      />
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className={`px-3 py-1 text-sm rounded-full ${
                index % 3 === 0 ? 'bg-blue-100 text-blue-800' :
                index % 3 === 1 ? 'bg-green-100 text-green-800' :
                'bg-purple-100 text-purple-800'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <button className="text-accent-blue hover:text-blue-700 font-semibold" data-testid={`button-view-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            상세 보기
          </button>
          <div className="flex space-x-3">
            {githubUrl && (
              <a href={githubUrl} className="text-gray-400 hover:text-gray-600" data-testid={`link-github-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                <Github className="text-lg" />
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} className="text-gray-400 hover:text-gray-600" data-testid={`link-live-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                <ExternalLink className="text-lg" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const projects: ProjectProps[] = [
    {
      title: "E-commerce 플랫폼",
      description: "React와 Node.js를 활용한 풀스택 온라인 쇼핑몰 구축",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "태스크 관리 앱",
      description: "생산성 향상을 위한 모바일 태스크 관리 애플리케이션",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["React Native", "Firebase", "Redux"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "데이터 시각화 대시보드",
      description: "비즈니스 인사이트를 위한 실시간 데이터 대시보드",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["D3.js", "Vue.js", "Python"],
      githubUrl: "#"
    },
    {
      title: "소셜 미디어 플랫폼",
      description: "커뮤니티 기반 소셜 네트워킹 서비스 개발",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Next.js", "GraphQL", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "핀테크 앱",
      description: "암호화폐 거래를 위한 실시간 트레이딩 플랫폼",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "WebSocket", "Redis"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "헬스케어 시스템",
      description: "의료진을 위한 환자 관리 시스템 개발",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Angular", "Node.js", "MySQL"],
      githubUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">포트폴리오</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 프로젝트를 통해 쌓아온 경험과 기술력을 확인해보세요
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
