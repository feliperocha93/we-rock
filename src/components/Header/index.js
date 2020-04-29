import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import { Cms } from '../../constants/components/headerEnum';

import './styles.css';

import home from '../../assets/img/irock-home.png'

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ isOpen: !this.state.isOpen });

		if (window.innerWidth < 767.8) {
			const body = document.querySelector('body');
			const overflow = this.state.isOpen ? '' : 'hidden';
			body.style.overflow = overflow;
		}
	};

	render() {
		const { isOpen } = this.state;
		const menuMobile = isOpen ? 'ativo' : '';

		return (
			<header className="header">

				<button onClick={this.handleClick}>
					<MdMenu size={36} color="#ffd" />
				</button>

				<nav className={menuMobile}>
					<button onClick={this.handleClick}>
						<MdClose size={36} color="#ffd" />
					</button>

					<Link onClick={this.handleClick} to="/" >
						<img
							src={home}
							alt="Ícone Home"
							className="hover-scale"
							title="Ir para Home" />
					</Link>

					<ul>
						{Object.entries(Cms.Navegação).map(([key, value]) =>
							key !== 'Home' ?
								<li key={key}>
									<Link
										className="hover-border"
										onClick={this.handleClick}
										to={value}>
										{key}
									</Link>
								</li> : null
						)}
					</ul>
				</nav>

			</header>
		);
	}
};