import Avatar from '../img/me.jpg'

import "../styles/components/sidebar.sass"
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'

export default function Sidebar() {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Victor Lobo" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1dSqeyHr1RxNjIxn9qxsi7sv-1rex4vD6/view?usp=share_link" target="_blank" className="btn">
        Download currículo
      </a>
    </aside>
  )
}