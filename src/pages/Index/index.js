import React, { Component } from "react";
import Banner from "../../components/Banner";
import SecaoLink from "../../components/SecaoLink";
import { HomeConfig } from "../../constants/pages/homeEnum";
import { SobreConfig } from "../../constants/pages/sobreEnum";
import { PortfolioConfig } from "../../constants/pages/portfolioEnum";
import { ContatoConfig } from "../../constants/pages/contatoEnum";
import { BlogConfig } from "../../constants/pages/blogEnum";

import "./styles.css";

import backgroundImage from "../../assets/img/banner/bg-home.jpg";
import imgSobre from "../../assets/img/thumbs/resumo-sobre.jpg";
import imgPortfolio from "../../assets/img/thumbs/resumo-portfolio.jpg";
import imgContato from "../../assets/img/thumbs/resumo-contato.jpg";
import imgBlog from "../../assets/img/thumbs/resumo-blog.jpg";

export default class Index extends Component {
  render() {
    return (
      <main className="home">

        <Banner
          title={HomeConfig.Titulo}
          description={HomeConfig.Descricao}
          backgroundImage={backgroundImage}
        />

        <div className="content">
          <SecaoLink
            src={imgSobre}
            name={SobreConfig.Nome}
            title={SobreConfig.Titulo}
            description={SobreConfig.Descricao}
            url={SobreConfig.Path}
            customClass={HomeConfig.Classe}
          />
          <SecaoLink
            src={imgPortfolio}
            name={PortfolioConfig.Nome}
            title={PortfolioConfig.Titulo}
            description={PortfolioConfig.Descricao}
            url={PortfolioConfig.Path}
            customClass={HomeConfig.Classe}
          />
          <SecaoLink
            src={imgContato}
            name={ContatoConfig.Nome}
            title={ContatoConfig.Titulo}
            description={ContatoConfig.Descricao}
            url={ContatoConfig.Path}
            customClass={HomeConfig.Classe}
          />
          <SecaoLink
            src={imgBlog}
            name={BlogConfig.Nome}
            title={BlogConfig.Titulo}
            description={BlogConfig.Descricao}
            url={BlogConfig.Path}
            customClass={HomeConfig.Classe}
          />
        </div>

      </main>
    );
  }
}
