import React, { PropTypes } from 'react';

function Link(props, x) {
  const {
    href,
    children,
    disabled,
    inverse,
} = props;

  console.log(x);
  const getDisabledClass = b => (b ? 'disabled' : '');
  const getInverseClass = b => (b ? 'link-inverse' : '');

  return (
    <a
      href={href}
      disabled={disabled}
      className={`${getDisabledClass(disabled)} ${getInverseClass(inverse)}`}
    >
      {children}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  inverse: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

Link.defaultProps = {
  disabled: false,
  inverse: false,
};

export default Link;
