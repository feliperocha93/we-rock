import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Secao extends Component {
	
	render() {
		
		return (
			<section className="secao">
				<div>
					<img src={this.props.src} className="rounded-img" alt={this.props.alt} title={this.props.title}></img>
					<h3>{this.props.title}</h3>
					<p>{this.props.description}</p>
				</div>
				<Link 
				to={this.props.url}
				className="btn"
				>
					{this.props.title}
				</Link>			
			</section>
		);
	}

}