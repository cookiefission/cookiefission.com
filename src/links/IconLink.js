import React from 'react';
import Icon from '../Icon';

const IconLink = (props) => {
  const href = props.href;
  const iconName = props.iconName;

  return(
    <a href={href} target='blank'>
      <Icon name={iconName} />
    </a>
  );
};

export default IconLink;
