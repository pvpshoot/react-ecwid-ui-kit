import React, { PropTypes } from 'react';
import {
  F,
  or,
  path,
} from 'ramda';


function Select(props) {
  const {
    options,
    label,
    onChange,
    size,
    disabled,
  } = props;

  const handlerSelect = event => onChange(path(['target', 'value'], event));

  const getOptions = arr => arr.map(el =>
    <option value={el.value} key={el.value}> {or(el.name, el.value) } </option>,
  );

  return (
    <div className="select-wrap">
      <select
        className={`form-control input-${size}`}
        onChange={handlerSelect}
        disabled={disabled}
        defaultValue={label}
      >
        <option disabled default>{label}</option>
        {getOptions(options)}
      </select>
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      name: PropTypes.string,
    })).isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
  ]),
  disabled: PropTypes.bool,
};
Select.defaultProps = {
  onChange: F,
  options: [],
  label: 'Choose an option',
  size: 'medium',
  disabled: false,
};

export default Select;
