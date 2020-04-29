import React from "react";
import IconeSocial from "../IconeSocial/index";
import { Cms } from "../../constants/pages/contatoEnum";
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
          href={Cms.Hrefs.Email}
          icon={<AiOutlineMail size={iconSize} color={iconColor} />}
          title={Cms.Titulos.Email}
        >
        </IconeSocial>

        <IconeSocial
          color={iconColor}
          href={Cms.Hrefs.Github}
          icon={<FaGithub size={iconSize} color={iconColor} />}
          title={Cms.Titulos.Github}
        >
        </IconeSocial>

        <IconeSocial
          color={iconColor}
          href={Cms.Hrefs.Linkedin}
          icon={<FaLinkedin size={iconSize} color={iconColor} />}
          title={Cms.Titulos.Linkedin}
        >
        </IconeSocial>

        <IconeSocial
          color={iconColor}
          href={Cms.Hrefs.Whatsapp}
          icon={<FaWhatsapp size={iconSize} color={iconColor} />}
          title={Cms.Titulos.Whatsapp}
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
