import React, { Component } from "react";
import Banner from "../../components/Banner";
import SecaoLink from "../../components/Secao-Link";
import { Descriptions, Names, Titles, Urls } from "../../constants/pagesEnum";

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
          title={Titles.Home}
          description={Descriptions.Home}
          backgroundImage={backgroundImage}
        />
        <SecaoLink
          src={imgSobre}
          name={Names.Sobre}
          title={Titles.Sobre}
          description={Descriptions.Sobre}
          url={Urls.Sobre}
        />
        <SecaoLink
          src={imgPortfolio}
          name={Names.Portfolio}
          title={Titles.Portfolio}
          description={Descriptions.Portfolio}
          url={Urls.Portfolio}
        />
        <SecaoLink
          src={imgContato}
          name={Names.Contato}
          title={Titles.Contato}
          description={Descriptions.Contato}
          url={Urls.Contato}
        />
        <SecaoLink
          src={imgBlog}
          name={Names.Blog}
          title={Titles.Blog}
          description={Descriptions.Blog}
          url={Urls.Blog}
        />
      </main>
    );
  }
}
