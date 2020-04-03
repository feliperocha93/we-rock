import React, { Component } from 'react';

import './styles.css';

export default class SecaoLista extends Component {
  renderData = () => {
    return this.props.list.map( list =>
      <li>{list}</li>
      )
  }
	
	render() {
		
		return (
			<section className="secao">
        <div>
          <img src={this.props.src} className="rounded-img" alt={this.props.alt} title={this.props.title}></img>
          <h3>{this.props.title}</h3>
          <ul>
            { this.renderData(this.props.list) }
          </ul>
        </div>
      </section>
		);
	}

}