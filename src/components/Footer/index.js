import React from "react";
import IconeSocial from "../IconeSocial/index";
import { Hrefs, Titles } from "../../constants/contactEnum";
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin, FaGithub, FaHeart, FaWhatsapp } from 'react-icons/fa';

import "./styles.css";

const [iconSize, iconColor, miniIconSize] = [32, "#ffd", 12];

const Footer = () => (
  <footer className="footer">
    <div className="container">

      <h1>Redes sociais</h1>

      <div className="flex">
        <IconeSocial
          color={iconColor}
          href={Hrefs.Email}
          icon={<AiOutlineMail size={iconSize} color={iconColor} />}
          title={Titles.Email}
          >
        </IconeSocial>

        <IconeSocial 
          color={iconColor}
          href={Hrefs.Github}
          icon={<FaGithub size={iconSize} color={iconColor} />}
          title={Titles.Github}
          >
        </IconeSocial>
        
        <IconeSocial 
          color={iconColor}
          href={Hrefs.Linkedin}
          icon={<FaLinkedin size={iconSize} color={iconColor} />}
          title={Titles.Linkedin}
          >
        </IconeSocial>

        <IconeSocial
          color={iconColor} 
          href={Hrefs.Whatsapp}
          icon={<FaWhatsapp size={iconSize} color={iconColor} />}
          title={Titles.Whatsapp}
          >
        </IconeSocial>
      </div>
    </div>

    <div className="footer-bottom">
      <span>
        Feito com <FaHeart size={miniIconSize} color={iconColor} /> 2020
      </span>
    </div>

  </footer>
);

export default Footer;
