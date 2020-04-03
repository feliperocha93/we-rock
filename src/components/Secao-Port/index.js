import React, { Component } from 'react';

import './styles.css';

export default class SecaoPort extends Component {
	
	render() {
		
		return (
			<section className="secao">
        <div>
          <h3>{this.props.title}</h3>
          <img src={this.props.src} alt={this.props.alt} title={this.props.title}></img>
          <a
            className="btn"
            href={this.props.url}
          >
            {this.props.title}
          </a>
        </div>
      </section>
		);
	}

}