import React, { Component } from 'react';
import Banner from '../../components/Banner'
import SecaoLista from '../../components/SecaoLista'
import SecaoLink from '../../components/SecaoLink'
import SecaoPort from '../../components/SecaoPort'
import { Cms, PortfolioConfig } from '../../constants/pages/portfolioEnum'
import { ContatoConfig } from '../../constants/pages/contatoEnum'

import './styles.css'

import backgroundImage from '../../assets/img/banner/bg-portfolio.jpg';
import imgContact from '../../assets/img/thumbs/resumo-contato.jpg'
import bthImage from "../../assets/img/portfolio/dev-be-the-hero.png";
import ffImage from "../../assets/img/portfolio/dev-facility-food.png";
import hhImage from "../../assets/img/portfolio/dev-hooligan-hookah.png";

const images = [bthImage, ffImage, hhImage]

export default class Portfolio extends Component {
	render() {
		return (
			<main>

				<Banner
					title={PortfolioConfig.Titulo}
					description={PortfolioConfig.Descricao}
					backgroundImage={backgroundImage}
				/>

				{Cms.Items.map((item, index) => {
					return (
						<SecaoPort
							key={item.title}
							title={item.title}
							src={images[index]}
							paragraphs={item.paragraphs}
							domain={item.domain}
							repo={item.repo}
							customClass={PortfolioConfig.Classe}
						/>
					)
				})}

				<SecaoLista
					title={Cms.Introducao.titulo}
					paragraphs={Cms.Introducao.paragrafos}
					customClass={PortfolioConfig.Classe}
				/>

				<SecaoLink
					src={imgContact}
					title={ContatoConfig.Titulo}
					description={ContatoConfig.Descricao}
					url={ContatoConfig.Path}
					name={ContatoConfig.Nome} /*This component haven't customClass to prevent square image*/
				/>

			</main>
		);
	}
}
