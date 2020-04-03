import React, { Component } from 'react';
import Banner from '../../components/Banner'
import SecaoPort from '../../components/Secao-Port'

import './styles.css'

import imgFoster from '../../img/portfolio/foster1.JPG'
import imgBikraft from '../../img/portfolio/bikcraft2.JPG'
import imgForm from '../../img/portfolio/form1.JPG'

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