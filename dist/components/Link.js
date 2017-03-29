'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Link(props, x) {
  var href = props.href,
      children = props.children,
      disabled = props.disabled,
      inverse = props.inverse;


  console.log(x);
  var getDisabledClass = function getDisabledClass(b) {
    return b ? 'disabled' : '';
  };
  var getInverseClass = function getInverseClass(b) {
    return b ? 'link-inverse' : '';
  };

  return _react2.default.createElement(
    'a',
    {
      href: href,
      disabled: disabled,
      className: getDisabledClass(disabled) + ' ' + getInverseClass(inverse)
    },
    children
  );
}

Link.propTypes = {
  href: _react.PropTypes.string.isRequired,
  disabled: _react.PropTypes.bool,
  inverse: _react.PropTypes.bool,
  children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]).isRequired
};

Link.defaultProps = {
  disabled: false,
  inverse: false
};

exports.default = Link;