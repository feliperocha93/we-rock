import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import hamburguer from '../../img/hamburguer.png'
import home from '../../img/house_home_13944.png'

const links = [
	{ route: "/sobre", label: "Sobre"},
	{ route: "/portfolio", label: "Portfolio"},
	{ route: "/contato", label: "Contato"},
	{ route: "/blog", label: "Blog"},
];

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({isOpen: !this.state.isOpen});
	};

	render() {
		const { isOpen } = this.state;
		const menuMobile = isOpen ? 'ativo' : '';

		return (
			<header className="header">
				<button onClick={this.handleClick}><img src={hamburguer} alt="Ícone Menu Hamburguer" title="Ícone Menu Hamburguer"></img></button>
				<nav className={menuMobile}>
					<button onClick={this.handleClick}>X</button>
					<Link
					onClick={this.handleClick}
					to="/"
					>
						<img src={home} alt="Ícone Home" title="Ícone Home"></img>
					</Link>
					<ul>
						{links.map( link =>
							<li key={link.route}>
								<Link 
								onClick={this.handleClick}
								to={link.route}>
									{link.label}
								</Link>
							</li>
						)}
					</ul>
				</nav>
			</header>
		);
	}
};