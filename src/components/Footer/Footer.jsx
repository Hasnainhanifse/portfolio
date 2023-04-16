import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  //social accounts links
  const socialAccounts = {
    github: `https://github.com/Hasnainhanifse`,
    instagram: `https://instagram.com`,
    linkedin: `https://linkedin.com/in/hasnain-hanif-b21484254`,
  };

  const copyRightYear = new Date().getFullYear();
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="personal-contact">
          <span>
            <a href="mailto:hasnainhanifse@gmail.com">
              hasnainhanifse@gmail.com
            </a>
          </span>
          <span>
            <a href="tel:+92348-7702027">+92348-7702027</a>
          </span>
        </div>
        <div className="f-icons">
          <a
            className="icon"
            href={socialAccounts.github}
            target="_blank"
            rel="noreferrer"
          >
            <Gitub color="white" size={"3rem"} />
          </a>
          <a
            className="icon"
            href={socialAccounts.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <Insta color="white" size={"3rem"} />
          </a>
          <a
            className="icon"
            href={socialAccounts.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin color="white" size={"3rem"} />
          </a>
        </div>
        <footer>&copy; Copyright {copyRightYear}, Designed by Hasnain</footer>
      </div>
    </div>
  );
};

export default Footer;
