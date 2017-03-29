import React, { PropTypes } from 'react';
import {
  path,
  F,
} from 'ramda';

const getRandomId = () => Math.random().toString(36).substring(7);

function Radio(props) {
  const {
    value,
    checked,
    name,
    children,
    note,
    disabled,
    onChange,
  } = props;

  const randomId = getRandomId();

  const handlerChange = event => onChange({
    name: path(['target', 'name'], event),
    value: path(['target', 'value'], event),
  });

  return (
    <div className="radio">
      <label htmlFor={randomId}>
        <input
          onChange={handlerChange}
          name={name}
          type="radio"
          id={randomId}
          disabled={disabled}
          defaultValue={value}
          defaultChecked={checked}
        />
        <span className="radio-label">
          {children}
          <span className="radio-label-note">{note}</span>
        </span>
      </label>
    </div>
  );
}

export const propTypes = {
  name: PropTypes.string,
  note: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

Radio.propTypes = propTypes;

Radio.defaultProps = {
  name: null,
  note: null,
  checked: false,
  disabled: false,
  onChange: F,
  value: null,
  children: null,
};

export default Radio;
