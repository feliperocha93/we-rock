import React, { Component } from 'react';
import Banner from '../../components/Banner';
import SecaoLink from '../../components/SecaoLink';
import SecaoLista from '../../components/SecaoLista';
import { Descriptions, Names, Titles, Urls } from '../../constants/pagesEnum';
import { Textos } from '../../constants/sobreEnum';

import './styles.css';

import backgroundImage from '../../assets/img/banner/bg-sobre.jpg';
import imgRock from '../../assets/img/sobre/irock-me.jpg';
import imgContent from '../../assets/img/sobre/irock-content.jpg';
import imgRockPlus from '../../assets/img/sobre/irock-plus.jpg';
import imgContact from '../../assets/img/thumbs/resumo-contato.jpg';



export default class Sobre extends Component {
	render() {
		return (
			<main>
				<Banner 
					title={Titles.Sobre}
					description={Descriptions.Sobre}
					backgroundImage={backgroundImage}
				/>
				<SecaoLista
					src={imgRock}
					title="I'm Rock"
					paragraphs={Textos.Introdução}
					customClass='sobre'
				/>
				<SecaoLista
					src={imgContent}
					title="Conteúdo"
					paragraphs={Textos.Especificações}
					customClass='sobre'
				/>
				<SecaoLista
					src={imgRockPlus}
					title="Mais de mim"
					paragraphs={Textos.Pessoal}
					customClass='sobre'
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