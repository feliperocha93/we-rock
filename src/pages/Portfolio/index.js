import React, { Component } from 'react';
import Banner from '../../components/Banner'
import SecaoPort from '../../components/SecaoPort'

import './styles.css'

import imgFoster from '../../assets/img/portfolio/foster1.JPG'
import imgBikraft from '../../assets/img/portfolio/bikcraft2.JPG'
import imgForm from '../../assets/img/portfolio/form1.JPG'

export default class Portfolio extends Component {

	render() {

		return (
			<main>
				<Banner 
					title="Portfolio"
					description='Conheça alguns dos meus projetos. Todos os códigos estão disponíveis no meu GitHub'
				/>
				<SecaoPort
					title="Site com protótipo"
					src={imgFoster}
					url="https://www.github.com/feliperocha93"
				/>
				<SecaoPort
					title="Site responsivo"
					src={imgBikraft}
					url="https://www.github.com/feliperocha93"
					/>
				<SecaoPort
					title="Form inteligente"
					src={imgForm}
					url="https://www.github.com/feliperocha93"
				/>
			</main>
		);
	}
}