import React, { Component } from 'react';
import Banner from '../../components/Banner'

import './styles.css'

export default class Contato extends Component {

	render() {

		return (
			<main>
				<Banner 
					title="Contato"
					description='Caso apareça alguma dúvida ou sugestão, não deixe de entrar em contato comigo!'
				/>
				<section className="call">
					<p>"Pode dizer que meu sonho é inútil. Os loucos românticos sempre riem por último."</p>
					<cite>- Filipe Ret</cite>
				</section>
			</main>
		);
	}
}