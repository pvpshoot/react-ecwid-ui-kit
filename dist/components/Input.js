'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Input(props) {
  var type = props.type,
      onChange = props.onChange,
      value = props.value,
      placeholder = props.placeholder,
      status = props.status,
      disabled = props.disabled,
      group = props.group,
      size = props.size,
      prefix = props.prefix,
      suffix = props.suffix;


  var handlerChange = function handlerChange(event) {
    onChange((0, _ramda.path)(['target', 'value'], event));
  };

  var getClassByStatus = function getClassByStatus(s) {
    switch (s) {
      case 'error':
        return 'has-error';
      case 'success':
        return 'has-success';
      default:
        return '';
    }
  };

  var getGroupClassIfNeed = function getGroupClassIfNeed(s) {
    return (0, _ramda.isNil)(s) ? '' : 'input-group';
  };
  var getGroupContent = function getGroupContent(cont) {
    return _react2.default.createElement(
      'span',
      { className: 'input-suffix' },
      cont
    );
  };

  var getInput = function getInput(b) {
    return b ? _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('input', {
        type: type,
        placeholder: placeholder,
        defaultValue: value,
        onChange: handlerChange,
        disabled: disabled
      })
    ) : _react2.default.createElement('input', {
      type: type,
      className: 'form-control input-' + size,
      placeholder: placeholder,
      defaultValue: value,
      onChange: handlerChange,
      disabled: disabled
    });
  };

  var anyFix = (0, _ramda.or)((0, _ramda.not)((0, _ramda.isEmpty)(prefix)), (0, _ramda.not)((0, _ramda.isEmpty)(suffix)));

  var getPrefixClassName = function getPrefixClassName(b) {
    return b ? '' : 'has-prefix';
  };
  var getSuffixClassName = function getSuffixClassName(b) {
    return b ? '' : 'has-suffix';
  };
  var getSuffixPrefixClassnames = function getSuffixPrefixClassnames(p, s) {
    return anyFix ? 'input-prefix-suffix ' + getPrefixClassName((0, _ramda.isEmpty)(p)) + ' ' + getSuffixClassName((0, _ramda.isEmpty)(s)) : '';
  };
  var getPrefix = function getPrefix(s) {
    return _react2.default.createElement(
      'div',
      { className: 'prefix' },
      s
    );
  };
  var getSuffix = function getSuffix(s) {
    return _react2.default.createElement(
      'div',
      { className: 'suffix' },
      s
    );
  };
  return _react2.default.createElement(
    'div',
    {
      className: '\n        ' + getClassByStatus(status) + '\n        ' + getGroupClassIfNeed(group) + '\n        ' + getSuffixPrefixClassnames(prefix, suffix) + '\n      '
    },
    anyFix ? getPrefix(prefix) : null,
    getInput(anyFix),
    anyFix ? getSuffix(suffix) : null,
    getGroupContent(group)
  );
}

Input.propTypes = {
  type: _react.PropTypes.string,
  prefix: _react.PropTypes.string,
  suffix: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  group: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
  onChange: _react.PropTypes.func,
  disabled: _react.PropTypes.bool,
  status: _react.PropTypes.oneOf(['', 'error', 'success']),
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};
Input.defaultProps = {
  type: 'text',
  suffix: '',
  prefix: '',
  placeholder: '',
  group: null,
  onChange: _ramda.F,
  disabled: false,
  status: '',
  size: 'medium',
  value: null
};
exports.default = Input;