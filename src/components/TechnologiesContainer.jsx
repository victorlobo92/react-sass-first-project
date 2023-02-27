import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiPhp,
  DiDocker,
  DiSass,
  DiGit,
  DiWordpress
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "sass", name: "SASS", icon: <DiSass /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "php", name: "PHP", icon: <DiPhp /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "docker", name: "Docker", icon: <DiDocker /> },
  { id: "git", name: "Git", icon: <DiGit /> },
  { id: "wordpress", name: "WordPress", icon: <DiWordpress /> },
]

export default function TechnologiesContainer() {
  return <section className="technologies-container">
    <h2>Technologies</h2>
    <div className="technologies-grid">
      {technologies.map(tech => (
        <div className="technology-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="technology-info">
            <h3>{tech.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </section>
}