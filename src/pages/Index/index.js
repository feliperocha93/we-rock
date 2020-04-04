import React, { Component } from 'react';
import Banner from '../../components/Banner'
import SecaoLink from '../../components/Secao-Link'

import { Titles, Descriptions, Urls } from '../../enum/pagesEnum';

import './styles.css'

import backgroundImage from '../../img/bg-home.jpg'
import imgSobre from '../../img/resumo-sobre.jpg'
import imgPortfolio from '../../img/resumo-portfolio.jpg'
import imgContato from '../../img/resumo-contato.jpg'
import imgBlog from '../../img/resumo-blog.jpg'

export default class Index extends Component {

	render() {
		return (
			<main>
				<Banner 
					title={Titles.Home}
					description={Descriptions.Home}
					backgroundImage={backgroundImage}
				/>
				<SecaoLink
					src={imgSobre}
					title={Titles.Sobre}
					description={Descriptions.Sobre}
					url={Urls.Sobre}
				/>
				<SecaoLink
					src={imgPortfolio}
					title={Titles.Portfolio}
					description={Descriptions.Portfolio}
					url={Urls.Portfolio}
				/>
				<SecaoLink
					src={imgContato}
					title={Titles.Contato}
					description={Descriptions.Contato}
					url={Urls.Contato}
				/>
				<SecaoLink
					src={imgBlog}
					title={Titles.Blog}
					description={Descriptions.Blog}
					url={Urls.Blog}
				/>
			</main>
		);
	}
}