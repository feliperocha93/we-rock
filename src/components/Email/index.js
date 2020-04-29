import React, { Component } from 'react';
import { MdSend } from 'react-icons/md';

import './styles.css';

export default class Email extends Component {
  state = {
    email: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.email);
  }

  handleChange = e => {
    this.setState({ email: e.target.value });
  }

  render() {
    return (
      <article className="email">
        <div className="container">
          <h3>Fique ligado no Blog!</h3>
          <span>Deixe seu e-mail para receber um alerta quando rolar novidade aqui no Blog</span>
          <form className="input-bar" onSubmit={this.handleSubmit}>
            <input placeholder="Sem span. Pode confiar." type="text" onChange={this.handleChange} />
            <button type="submit">
              <MdSend size={30} color="#4cdef5" className="hover-scale" />
            </button>
          </form>
        </div>
      </article>
    );
  }
}
