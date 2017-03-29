import React, { PropTypes } from 'react';
import {
  F,
  path,
  isNil,
  or,
  not,
  isEmpty,
} from 'ramda';


function Input(props) {
  const {
    type,
    onChange,
    value,
    placeholder,
    status,
    disabled,
    group,
    size,
    prefix,
    suffix,
  } = props;

  const handlerChange = (event) => {
    onChange(path(['target', 'value'], event));
  };

  const getClassByStatus = (s) => {
    switch (s) {
      case 'error':
        return 'has-error';
      case 'success':
        return 'has-success';
      default:
        return '';
    }
  };

  const getGroupClassIfNeed = s => (isNil(s) ? '' : 'input-group');
  const getGroupContent = cont => (<span className="input-suffix">{cont}</span>);

  const getInput = b => (
    b
    ? <div><input
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      onChange={handlerChange}
      disabled={disabled}
    /></div>
    : <input
      type={type}
      className={`form-control input-${size}`}
      placeholder={placeholder}
      defaultValue={value}
      onChange={handlerChange}
      disabled={disabled}
    />
  );

  const anyFix = or(not(isEmpty(prefix)), not(isEmpty(suffix)));

  const getPrefixClassName = b => (b ? '' : 'has-prefix');
  const getSuffixClassName = b => (b ? '' : 'has-suffix');
  const getSuffixPrefixClassnames = (p, s) => (
    anyFix
    ? `input-prefix-suffix ${getPrefixClassName(isEmpty(p))} ${getSuffixClassName(isEmpty(s))}`
    : ''
  );
  const getPrefix = s => (<div className="prefix">{s}</div>);
  const getSuffix = s => (<div className="suffix">{s}</div>);
  return (
    <div
      className={`
        ${getClassByStatus(status)}
        ${getGroupClassIfNeed(group)}
        ${getSuffixPrefixClassnames(prefix, suffix)}
      `}
    >

      {anyFix ? getPrefix(prefix) : null}
      { getInput(anyFix) }
      {anyFix ? getSuffix(suffix) : null}

      { getGroupContent(group)}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  placeholder: PropTypes.string,
  group: PropTypes.string,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
  ]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  status: PropTypes.oneOf([
    '',
    'error',
    'success',
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
Input.defaultProps = {
  type: 'text',
  suffix: '',
  prefix: '',
  placeholder: '',
  group: null,
  onChange: F,
  disabled: false,
  status: '',
  size: 'medium',
  value: null,
};
export default Input;
