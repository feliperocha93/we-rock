import React, { Component } from 'react';
import Banner from '../../components/Banner'
import SecaoLink from '../../components/Secao-Link'

import './styles.css'

import imgSobre from '../../img/resumo-sobre.jpg'
import imgPortfolio from '../../img/resumo-portfolio.jpg'
import imgContato from '../../img/resumo-contato.jpg'
import imgBlog from '../../img/resumo-blog.jpg'

export default class Index extends Component {

	render() {

		return (
			<main>
				<Banner 
					title="Felipe Rocha"
					description='"Criando sites, desenvolvendo sonhos"'
				/>
				<SecaoLink
					src={imgSobre}
					title="Sobre mim"
					description="Criei esse site como forma de mostrar meu trabalho.  Procuro um estágio como Desenvolvedor Front-End."
					url="/sobre"
				/>
				<SecaoLink
					src={imgPortfolio}
					title="Portfolio"
					description="Clique no botão abaixo e conheça meus projetos."
					url="/portfolio"
				/>
				<SecaoLink
					src={imgContato}
					title="Contato"
					description="Caso apareça alguma dúvida ou sugestão, não deixe de entrar em contato comigo!"
					url="/contato"
				/>
				<SecaoLink
					src={imgBlog}
					title="Blog"
					description="Aqui eu vou postando um pouco sobre minha vivência com tecnologia de uma maneira bem prazerosa de ler."
					url="/blog"
				/>
			</main>
		);
	}
}