import React from 'react';

import './styles.css';

const IconeSocial = (props) => (
  <a
    href={props.href}
    target="_blank"
    rel="noopener noreferrer">
      {props.icon}
  </a>

);

export default IconeSocial;
