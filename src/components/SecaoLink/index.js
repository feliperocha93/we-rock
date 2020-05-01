import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Secao extends Component {
	render() {
		return (
			<section className={`secao ${this.props.customClass || ''}`}>
				<div className="container align-center">

					<img
						src={this.props.src}
						className="rounded-img hover-scale"
						alt={`Imagem de chamada para página ${this.props.name}`}
						title={this.props.title} />

					<h2>{this.props.title}</h2>
					<span>{this.props.description}</span>

					<Link
						to={this.props.url}
						title={`Navegue até ${this.props.name}`}
						className="btn hover-border">
						{this.props.name}
					</Link>

				</div>
			</section>
		);
	}

}