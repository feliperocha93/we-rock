import React, { Component } from 'react';
import Banner from '../../components/Banner'
import SecaoLink from '../../components/Secao-Link'
import SecaoList from '../../components/Secao-List'

import './styles.css'

import imgDados from '../../img/dados.jpg'
import imgCursos from '../../img/cursos.jpg'
import imgContato from '../../img/resumo-contato.jpg'

const dataList = [
	"Felipe Rocha de Lucena",
	"Brasileiro, solteiro, 26 anos",
	"Fatec São Caetnao do Sul",
	"Segurança da Informação",
	"4º Semestre",
	"Objetivo: Estágio em dev Front-end",
]

const courseList = [
	"HTML5 e CSS3 I - Alura - 32 horas",
	"HTML5 e CSS3 II - Alura – 40 horas",
	"Web Design Completo	- Origamid – 44 horas",
	"JavaScript - Alura – 20 horas",
	"JavaScript e jQuery - Origamid – 18 horas",
	"Bootstrap - Alura – 12 horas",
]

export default class Sobre extends Component {

	render() {

		return (
			<main>
				<Banner 
					title="Sobre mim"
					description='"Conheça um pouco sobre minha vida acadêmica"'
				/>
				<SecaoList
					src={imgDados}
					title="Dados"
					list={dataList}
				/>
				<SecaoList
					src={imgCursos}
					title="Cursos"
					list={courseList}
				/>
				<SecaoLink
					src={imgContato}
					title="Contato"
					description="Caso apareça alguma dúvida ou sugestão, não deixe de entrar em contato comigo!"
					url="/contato"
				/>
			</main>
		);
	}
}