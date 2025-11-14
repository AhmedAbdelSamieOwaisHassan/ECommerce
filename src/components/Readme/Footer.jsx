import { Footer } from "flowbite-react";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelope,
  // BsWhatsapp,
  // BsTelegram,
} from "react-icons/bs";

import styles from "./Footer.module.css"; // Import CSS module

function FooterComponent() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.icons}>
          <Footer.Icon
            href="https://www.linkedin.com/in/ahmed-abdel-samie-owais-hassan-73955126a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            icon={BsLinkedin}
          />
          <Footer.Icon href="https://github.com/AhmedAbdelSamieOwaisHassan" icon={BsGithub} />
          <Footer.Icon
            href="mailto:ahmedabdelaamie1@gmail.com"
            icon={BsEnvelope}
          />
          
          
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;

/* Footer.module.css */
