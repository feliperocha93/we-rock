import React, { Component } from 'react';
import Banner from '../../components/Banner';
import Email from '../../components/Email';
import SecaoLista from '../../components/SecaoLista';
import { Cms, SobreConfig } from '../../constants/pages/sobreEnum';
import './styles.css';

import backgroundImage from '../../assets/img/banner/bg-sobre.jpg';
import imgRock from '../../assets/img/sobre/werock-me.jpg';
import imgContent from '../../assets/img/sobre/werock-content.jpg';
import imgRockPlus from '../../assets/img/sobre/werock-plus.jpg';

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
				<Email />
			</main>
		);
	}
}