import React from 'react';

import './styles.css';

import github from '../../img/GitHub-Mark-32px.png'

const Footer = () => (
	<footer className="footer">
		<ul>
			<li><h3>Email</h3></li>
			<li>fee.rocha@hotmail.com</li>
			<li>felipe.lucena2@fatec.sp.gov.br</li>
		</ul>
		<ul>
			<li><h3>Telefone</h3></li>
			<li>(11)95376-2906</li>
			<li>(11)39074461</li>
		</ul>
		<ul>
			<li><h3>Endereço</h3></li>
			<li>Av. do Taboão, 929 - Taboão</li>
			<li>São Bernardo do Campo - SP</li>
		</ul>
		<ul>
			<li><h3>Github</h3></li>
			<li><a href="https://github.com/feliperocha93" target="_blank" rel="noopener noreferrer"><img src={github} class="contato_github_img" alt="Logo do Github"></img></a></li>
		</ul>
	</footer>
);

export default Footer;