
import { EnvelopeFill, FilePersonFill, Github, Linkedin } from 'react-bootstrap-icons'

const ContactList = () => {
  return (
    <div className="contact">
      <ul className="contact__list">
        <li className="contact__item">
          <a href="https://www.linkedin.com/in/lisa-li-23568b1b8/" target="_blank" rel="noreferrer" className="contact__link contact__link--linkedin">
            <span className="contact__label">Linkedin</span> <Linkedin />
          </a>
        </li>

        <li className="contact__item">
          <a href="https://github.com/2016lisali" target="_blank" rel="noreferrer" className="contact__link contact__link--github">
            <span className="contact__label">Github</span> <Github />
          </a>
        </li>

        <li className="contact__item">
          <a href="mailto:lisa20210219@gmail.com" target="_blank" rel="noreferrer" className="contact__link contact__link--email">
            <span className="contact__label">Email</span> <EnvelopeFill />
          </a>
        </li>

        <li className="contact__item">
          <a href="https://drive.google.com/file/d/1DsH3VyUYkBhNs-TAYXIgK0ZCdWg9bo1W/view?usp=sharing" target="_blank" rel="noreferrer" className="contact__link contact__link--resume">
            <span className="contact__label">Resume</span> <FilePersonFill />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ContactList