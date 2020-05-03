import React, { Component } from "react";
import { Cms } from '../../constants/components/formEnum';
import swal from 'sweetalert';
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
      .then(() => {
        swal(...Cms.Message.success);
        this.setState({ nome: '', email: '', whatsapp: '', mensagem: '' });
      })
      .catch(() => swal(...Cms.Message.error));
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
            <input type="text" name="nome" value={this.state.nome} onChange={this.handleChange} required />

            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />

            <label>Whatsapp</label>
            <input type="number" name="whatsapp" value={this.state.whatsapp} onChange={this.handleChange} required />

            <label>Mensagem</label>
            <textarea name="mensagem" value={this.state.mensagem} onChange={this.handleChange} required></textarea>

            <button
              type="submit"
              title={Cms.Button.altTitle}
              className="btn hover-border">
              {Cms.Button.title}
            </button>
          </form>

        </div>
      </section>
    );
  }
}
