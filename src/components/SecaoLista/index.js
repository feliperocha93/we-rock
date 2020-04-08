import React, { Component } from 'react';

import './styles.css';

export default class SecaoLista extends Component {
	
	render() {
		return (
			<section className="secao sobre">
        <div className="container flex-column">

          <div>
            <img
              src={this.props.src}
              className="rounded-img hover-scale"
              alt={this.props.alt}
              title={this.props.title}></img>
            <h3>{this.props.title}</h3>
          </div>

          <div className="paragraphs">
            {this.props.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

        </div>
      </section>
		);
	}

}