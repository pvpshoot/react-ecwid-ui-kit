import React, { PropTypes } from 'react';
import {
  ifElse,
  F,
  or,
} from 'ramda';

import { Loader } from './';


function Button(props){
  const {
    type,
    size,
    children,
    disabled,
    inverse,
    inProgress,
    onPress,
  } = props;
  const getUnversedStyles  = (b) => b ? 'btn-inverse' : '';
  const getLoadingStyles  = (b) => b ? 'btn-loading' : '';

  const handlerClick = () => {
    const shouldNotUse = (arr) => or(...arr);
    const stopList = [disabled, inProgress]
    ifElse(shouldNotUse, F, onPress)(stopList);
  };

  return (
      <button
        onClick={handlerClick}
        className={`btn btn-${type} ${getUnversedStyles(inverse)} btn-${size} ${getLoadingStyles(inProgress)}`}
        disabled={disabled}
      >
        {inProgress ? Loader : children}
      </button>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf([
      'default',
      'alt',
      'primary',
      'info',
      'info-light',
      'warning',
    ]),
    size: PropTypes.oneOf([
      'small',
      'medium',
      'large',
    ]),
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]).isRequired,
    disabled: PropTypes.bool,
    inverse: PropTypes.bool,
    inProgress: PropTypes.bool,
    onPress: PropTypes.func,
}
Button.defaultProps = {
    type: 'default',
    size: 'medium',
    disabled: false,
    inverse: false,
    inProgress: false,
    onPress: F,
}

export default Button;
