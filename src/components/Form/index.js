import React, { Component } from "react";

import './styles.css';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      whatsapp: '',
      mensagem: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "form-contato", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <section className="secao formulario">
        <div className="container align-center">

          <h3>Formulário</h3>
          <form
            className="align-center"
            name="form-contato"
            onSubmit={this.handleSubmit}>
            <input type="hidden" name="form-name" value="form-contato" />

            <label>Nome</label>
            <input type="text" name="nome" onChange={this.handleChange}/>

            <label>Email</label>
            <input type="email" name="email" onChange={this.handleChange}/>

            <label>Whatsapp</label> 
            <input type="number" name="whatsapp" onChange={this.handleChange}/>

            <label>Mensagem</label>
            <textarea name="mensagem" onChange={this.handleChange}></textarea>

            <button
              type="submit"
              title="Clique após preencher o formulário"
              className="btn hover-border">
                Enviar
            </button>
          </form>

        </div>
      </section>
    );
  }
}