import React, { Component } from 'react';
import Banner from '../../components/Banner'
import SecaoLista from "../../components/SecaoLista";
import Form from "../../components/Form";
import { ContatoConfig, Cms } from '../../constants/pages/contatoEnum'
import backgroundImage from '../../assets/img/banner/bg-contato.jpg';

import './styles.css'

export default class Contato extends Component {

	render() {

		return (
			<main>
				<Banner
					title={ContatoConfig.Titulo}
					description={ContatoConfig.Descricao}
					backgroundImage={backgroundImage}
				/>
				<SecaoLista
					title={ContatoConfig.Nome}
					paragraphs={Cms.Paragrafos}
					customClass={ContatoConfig.Classe}
				/>
				<Form
				/>
				<section className="call">
					<div className="container">
						<p>{Cms.Blockquote}</p>
						<small>{Cms.Cite}</small>
					</div>
				</section>
			</main>
		);
	}
}