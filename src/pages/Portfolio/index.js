import React, { Component } from 'react';
import Banner from '../../components/Banner'
import SecaoLista from '../../components/SecaoLista'
import SecaoLink from '../../components/SecaoLink'
import SecaoPort from '../../components/SecaoPort'
import { PortfolioItems, Introducao } from '../../constants/portEnum'
import { Classes, Descriptions, Names, Titles, Urls } from "../../constants/pagesEnum";

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
					title={Titles.Portfolio}
					description={Descriptions.Portfolio}
          backgroundImage={backgroundImage}
				/>

				{PortfolioItems.map((item, index) => {
					return (
						<SecaoPort
						key={item.title}
						title={item.title}
						src={images[index]}
						paragraphs={item.paragraphs}
						domain={item.domain}
						repo={item.repo}
						customClass={Classes.Portfolio}
						/>
					)
				})}

				<SecaoLista
					title={Introducao.title}
					paragraphs={Introducao.paragraphs}
					customClass={Classes.Portfolio}
				/>

				<SecaoLink
					src={imgContact}
					title={Titles.Contato}
					description={Descriptions.Contato}
					url={Urls.Contato}
					name={Names.Contato}
				/>

			</main>
		);
	}
}
