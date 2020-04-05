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
						className="rounded-img"
						alt={`Imagem de chamada para página ${this.props.name}`}
						title={this.props.title}/>

					<h3>{this.props.title}</h3>
					<p>{this.props.description}</p>

					<Link to={this.props.url}className="btn">
						{this.props.name}
					</Link>	

				</div>
			</section>
		);
	}

}