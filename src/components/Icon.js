import React from 'react';

const Icon = (props) => {
  const name = props.name || 'warning';
  const size = props.size || 'lg';
  const classes = `fa fa-${name} fa-${size}`;

  return(
    <div className="Icon-wrapper">
      <i className={classes} />
    </div>
  );
};

export default Icon;
