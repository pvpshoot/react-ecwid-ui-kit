import React, { PropTypes } from 'react';

function Icon(props) {
  const { name } = props;
  return <span className={`icon-${name}`} />;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
