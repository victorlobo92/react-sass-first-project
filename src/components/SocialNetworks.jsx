import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/victorloobo/" },
  { name: "github", icon: <FaGithub />, href: "https://github.com/victorlobo92/" },
  { name: "instagram", icon: <FaInstagram />, href: "https://instagram.com/victorloobo" }
]

export default function SocialNetworks() {
  return <section id="social-networks">
    {socialNetworks.map(network => (
      <a href={network.href} target="_blank" className="social-btn" id={network.name} key={network.name}>
        {network.icon}
      </a>
    ))}
  </section>
}