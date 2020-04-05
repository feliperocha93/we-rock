import React, { Component } from 'react';

import './styles.css';

export default class SecaoLista extends Component {
	
	render() {
		return (
			<section className="secao">
        <div>
          <img src={this.props.src} className="rounded-img" alt={this.props.alt} title={this.props.title}></img>
          <h3>{this.props.title}</h3>
          <ul>
            {this.props.list.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>
		);
	}

}