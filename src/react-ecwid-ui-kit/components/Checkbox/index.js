import React, { PropTypes } from 'react';
import {
  path,
  F,
} from 'ramda';

const getRandomId = () => Math.random().toString(36).substring(7);

function CheckBox(props) {
  const {
    name,
    size,
    labelOn,
    checked,
    labelOff,
    disabled,
    onChange,
  } = props;

  const randomId = getRandomId();

  const handlerChange = event => onChange({
    name: path(['target', 'name'], event),
    checked: path(['target', 'checked'], event),
  });

  return (
    <label className={`checkbox ${size}`} htmlFor={randomId}>
      <input
        name={name}
        id={randomId}
        type="checkbox"
        disabled={disabled}
        defaultChecked={checked}
        onChange={handlerChange}
      />
      <div data-on={labelOn} data-off={labelOff}>
        <div />
      </div>
    </label>
  );
}

CheckBox.propTypes = {
  name: PropTypes.string,
  labelOn: PropTypes.string,
  labelOff: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['big', 'tiny']),
};
CheckBox.defaultProps = {
  name: '',
  labelOn: 'enabled',
  labelOff: 'disabled',
  disabled: false,
  checked: false,
  onChange: F,
  size: 'big',
};

export default CheckBox;
