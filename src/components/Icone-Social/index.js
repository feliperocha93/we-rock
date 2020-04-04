import React from 'react';

import './styles.css';

const IconeSocial = (props) => (
  <a
    href={props.href}
    target="_blank"
    rel="noopener noreferrer">
    <img
      src={props.iconImage}
      alt={`Ícone de ${props.iconName}`}/>
  </a>
);

export default IconeSocial;
