import React, { Component } from 'react';

import Banner from '../../components/Banner'
import SecaoLista from "../../components/SecaoLista";
import Form from "../../components/Form";

import { Descriptions, Names, Titles } from '../../constants/pagesEnum'
import { Textos } from '../../constants/contactEnum'

import './styles.css'

import backgroundImage from '../../assets/img/banner/bg-contato.jpg';
export default class Contato extends Component {

	render() {

		return (
			<main>
				<Banner 
					title={Titles.Contato}
					description={Descriptions.Contato}
					backgroundImage={backgroundImage}
				/>
				<SecaoLista
					title={Names.Contato}
					paragraphs={Textos.Introdução}
				/>
				<Form 
				/>
				<section className="call container">
					<p>"Pode dizer que meu sonho é inútil. Os loucos românticos sempre riem por último."</p>
					<small>- Filipe Ret</small>
				</section>
			</main>
		);
	}
}