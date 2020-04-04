import React from "react";
import IconeSocial from "../Icone-Social/index";
import { Contacts, Hrefs } from "../../constants/contactEnum";

import "./styles.css";

import emailIcon from "../../assets/img/icons/github-icon.png";
import githubIcon from "../../assets/img/icons/github-icon.png";
import linkedinIcon from "../../assets/img/icons/github-icon.png";
import whatsppIcon from "../../assets/img/icons/github-icon.png";

const Footer = () => (
  <footer className="footer">
    <h1>Redes sociais</h1>
    <div className="flex">
      <IconeSocial 
        href={Hrefs.Email}
        iconImage={emailIcon}
        iconName={Contacts.Email}
      />
      <IconeSocial 
        href={Hrefs.Github}
        iconImage={githubIcon}
        iconName={Contacts.Github}
      />
      <IconeSocial 
        href={Hrefs.Linkedin}
        iconImage={linkedinIcon}
        iconName={Contacts.Linkedin}
      />
      <IconeSocial 
        href={Hrefs.Whatsapp}
        iconImage={whatsppIcon}
        iconName={Contacts.Whatsapp}
      />
    </div>
  </footer>
);

export default Footer;
