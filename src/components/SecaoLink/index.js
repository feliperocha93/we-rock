import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Secao extends Component {
	render() {
		return (
			<section className="secao">
				<div className="container flex-column">

					<img
						src={this.props.src}
						className="rounded-img hover-scale"
						alt={`Imagem de chamada para página ${this.props.name}`}
						title={this.props.title}/>

					<h2>{this.props.title}</h2>
					<span>{this.props.description}</span>

					<Link to={this.props.url} className="btn hover-border">
						{this.props.name}
					</Link>	

				</div>
			</section>
		);
	}

}