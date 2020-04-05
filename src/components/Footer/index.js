import React from "react";
import IconeSocial from "../IconeSocial/index";
import { Hrefs } from "../../constants/contactEnum";
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
          href={Hrefs.Email}
          icon={<AiOutlineMail size={iconSize} color ={iconColor} />}
          >
        </IconeSocial>

        <IconeSocial 
          href={Hrefs.Github}
          icon={<FaGithub size={iconSize} color ={iconColor} />}
          >
        </IconeSocial>
        
        <IconeSocial 
          href={Hrefs.Linkedin}
          icon={<FaLinkedin size={iconSize} color ={iconColor} />}
          >
        </IconeSocial>

        <IconeSocial 
          href={Hrefs.Whatsapp}
          icon={<FaWhatsapp size={iconSize} color ={iconColor} />}
          >
        </IconeSocial>
      </div>
    </div>

    <div class="footer-bottom">
      <span>
        Feito com <FaHeart size={miniIconSize} color={iconColor} /> 2020
      </span>
    </div>

  </footer>
);

export default Footer;
