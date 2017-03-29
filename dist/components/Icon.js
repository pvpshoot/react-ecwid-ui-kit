'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Icon(props) {
  var name = props.name;

  return _react2.default.createElement('span', { className: 'icon-' + name });
}

Icon.propTypes = {
  name: _react.PropTypes.string.isRequired
};

exports.default = Icon;