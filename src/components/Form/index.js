import React from 'react';

import './styles.css';

import github from '../../img/GitHub-Mark-32px.png'

const Form = () => (
	<form method="post" name="form" class="formphp grid-10">
    <label for="nome">Nome</label>
    <input id="nome" name="nome" type="text" class="form_contato_campo">
    <label for="email">E-mail</label>
    <input id="email" name="email" type="text" class="form_contato_campo">
    <label for="telefone">Telefone</label>
    <input id="telefone" name="telefone" type="text" class="form_contato_campo">
    <label for="mensagem">Mensagem</label>
    <textarea name="mensagem" id="mensagem" class="form_contato_campo"></textarea>
    <button id="enviar" name="enviar" type="submit" class="">Enviar</button>
  </form>
);

export default Form;

