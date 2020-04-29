import React, { Component } from 'react';
import Banner from '../../components/Banner';
import SecaoLink from '../../components/SecaoLink';
import SecaoLista from '../../components/SecaoLista';
import { Cms, SobreConfig } from '../../constants/pages/sobreEnum';
import { ContatoConfig } from '../../constants/pages/contatoEnum';
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
					title={SobreConfig.Titulo}
					description={SobreConfig.Descricao}
					backgroundImage={backgroundImage}
				/>
				<SecaoLista
					src={imgRock}
					title={Cms.Introdução.titulo}
					paragraphs={Cms.Introdução.paragrafos}
					customClass={SobreConfig.Classe}
				/>
				<SecaoLista
					src={imgContent}
					title={Cms.Especificações.titulo}
					paragraphs={Cms.Especificações.paragrafos}
					customClass={SobreConfig.Classe}
				/>
				<SecaoLista
					src={imgRockPlus}
					title={Cms.Pessoal.titulo}
					paragraphs={Cms.Pessoal.paragrafos}
					customClass={SobreConfig.Classe}
				/>
				<SecaoLink
					src={imgContact}
					title={ContatoConfig.Titulo}
					description={ContatoConfig.Descricao}
					url={ContatoConfig.Path}
					name={ContatoConfig.Nome}
				/>
			</main>
		);
	}
}