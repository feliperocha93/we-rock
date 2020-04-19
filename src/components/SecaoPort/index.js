import React, { Component } from 'react';
import { FaDesktop, FaGithub } from 'react-icons/fa';


import './styles.css';

export default class SecaoPort extends Component {
	
	render() {
		return (
			<section className={`secao ${this.props.customClass}`}>
        <div className="container">

          <h3>{this.props.title}</h3>
          <a href={this.props.domain} target="_blank" rel="noopener noreferrer">
            <img
              src={this.props.src}
              alt={`Item do meu portfólio: ${this.props.alt}`}
              title={`Clique para ver o site ${this.props.title}`}
              className="hover-scale"
            />
          </a>

          <div className="paragraphs">
            {this.props.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="flex">
            <a
              href={this.props.domain}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale"
              title={`Clique para ver o site ${this.props.title}`}
            >
              <FaDesktop size={32} color='#000' />
            </a>
            <a
              href={this.props.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale"
              title={`Veja o repositório do projeto ${this.props.title}`}
            >
              <FaGithub size={32} color='#000' />
            </a>
          </div>

        </div>
      </section>
		);
	}

}