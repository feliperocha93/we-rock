import React from 'react';

import './styles.css';

const IconeSocial = (props) => (
  <a
    style={{color: props.color}}
    className="hover-scale"
    href={props.href}
    title={props.title}
    target="_blank"
    rel="noopener noreferrer">
      {props.icon}
  </a>

);

export default IconeSocial;
