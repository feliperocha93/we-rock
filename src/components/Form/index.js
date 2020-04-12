import React, { Component } from "react";

import './styles.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Enviado");
  };

  render() {
    return (
      <section className="secao formulario">
        <div className="container flex-column">

          <h3>Formulário</h3>
          <form
            className="flex-column"
            name="form-contato"
            method="post"
            onSubmit={this.handleSubmit}>
            <input type="hidden" name="form-name" value="form-contato" />

            <label>Nome</label>
            <input type="text" name="nome"/>

            <label>Email</label>
            <input type="email" name="email"/>

            <label>Whatsapp</label> 
            <input type="number" name="whatsapp"/>

            <label>Mensagem</label>
            <textarea name="mensagem"></textarea>

            <button type="submit" className="btn hover-border">Enviar</button>
          </form>

        </div>
      </section>
    );
  }
}