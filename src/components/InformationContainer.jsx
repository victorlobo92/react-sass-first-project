import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import "../styles/components/informationcontainer.sass"

export default function InformationContainer() {
  return <section id="information">
    <div className="info-card">
      <AiFillPhone id="phone-icon" />
      <div className="phone-info">
        <h3>Phone</h3>
        <a href="tel:+5561985789943">+55 61 98578-9943</a>
      </div>
    </div>
    <div className="info-card">
      <AiOutlineMail id="email-icon" />
      <div className="mail-info">
        <h3>E-mail</h3>
        <a href="mailto:victorlobo92@gmail.com">victorlobo92@gmail.com</a>
      </div>
    </div>
    <div className="info-card">
      <AiFillEnvironment id="pin-icon" />
      <div>
        <h3>Location</h3>
        <p>Brasília / DF</p>
      </div>
    </div>
  </section>
}