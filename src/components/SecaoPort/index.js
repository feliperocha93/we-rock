import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaDesktop, FaGithub } from 'react-icons/fa';


import './styles.css';

export default class SecaoPort extends Component {
	
	render() {
		return (
			<section className={`secao ${this.props.customClass}`}>
        <div className="container flex-column">

          <h3>{this.props.title}</h3>

          <img
            src={this.props.src}
            alt={`Item do meu portfólio: ${this.props.alt}`}
            title={this.props.title}
          />

          <div className="paragraphs">
            {this.props.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="flex">
            <Link to={this.props.domain}>
              <FaDesktop size={32} color='#000' />
            </Link>
            <Link to={this.props.repo}>
              <FaGithub size={32} color='#000' />
            </Link>
          </div>

        </div>
      </section>
		);
	}

}