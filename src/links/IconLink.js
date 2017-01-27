import React from 'react';
import Icon from '../Icon';

import './IconLink.css';

const IconLink = (props) => {
  return(
    <a href={props.href} target='blank' className='IconLink' >
      <Icon name={props.iconName} />
    </a>
  );
};

export default IconLink;
