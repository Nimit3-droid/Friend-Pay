import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import 'components/Footer.scss'

function Footer() {
  const issueURL = "https://github.com/Nimit3-droid/Friend-Pay/issues/new"

  return (
    <div id="footer-container">
      <span>
        <b>Have new feature request? Found a bug?</b>
        <br/>
        Feel free to create an issue&nbsp;
        <a target="_blank"
           rel="noopener noreferrer"
           href={issueURL}>here</a>
      </span>

      <footer>
      Designed and developed by Nimit Khanna, &nbsp;
      <a target="_blank"
         rel="noopener noreferrer"
         href="https://www.linkedin.com/in/nimit-khanna-7a66331a0/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>&nbsp;&nbsp;
      <a target="_blank"
         rel="noopener noreferrer"
         href="https://github.com/Nimit3-droid/Friend-Pay">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      </footer>
    </div>
  )
}

export default Footer;
