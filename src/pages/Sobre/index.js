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
					title={Cms.Introdution.title}
					body={Cms.Introdution.body}
					customClass={SobreConfig.Classe}
				/>
				<SecaoLista
					src={imgContent}
					title={Cms.Especification.title}
					body={Cms.Especification.body}
					customClass={SobreConfig.Classe}
				/>
				<SecaoLista
					src={imgRockPlus}
					title={Cms.Pessoal.title}
					body={Cms.Pessoal.body}
					customClass={SobreConfig.Classe}
				/>
				<Email />
			</main>
		);
	}
}