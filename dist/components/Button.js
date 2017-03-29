'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ramda = require('ramda');

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function Button(props) {
  var type = props.type,
      size = props.size,
      children = props.children,
      disabled = props.disabled,
      inverse = props.inverse,
      inProgress = props.inProgress,
      onPress = props.onPress;

  var getUnversedStyles = function getUnversedStyles(b) {
    return b ? 'btn-inverse' : '';
  };
  var getLoadingStyles = function getLoadingStyles(b) {
    return b ? 'btn-loading' : '';
  };

  var handlerClick = function handlerClick() {
    var shouldNotUse = function shouldNotUse(arr) {
      return _ramda.or.apply(undefined, _toConsumableArray(arr));
    };
    var stopList = [disabled, inProgress];
    (0, _ramda.ifElse)(shouldNotUse, _ramda.F, onPress)(stopList);
  };

  return _react2.default.createElement(
    'button',
    {
      onClick: handlerClick,
      className: 'btn btn-' + type + ' ' + getUnversedStyles(inverse) + ' btn-' + size + ' ' + getLoadingStyles(inProgress),
      disabled: disabled
    },
    inProgress ? _.Loader : children
  );
}

Button.propTypes = {
  type: _react.PropTypes.oneOf(['default', 'alt', 'primary', 'info', 'info-light', 'warning']),
  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
  children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]).isRequired,
  disabled: _react.PropTypes.bool,
  inverse: _react.PropTypes.bool,
  inProgress: _react.PropTypes.bool,
  onPress: _react.PropTypes.func
};
Button.defaultProps = {
  type: 'default',
  size: 'medium',
  disabled: false,
  inverse: false,
  inProgress: false,
  onPress: _ramda.F
};

exports.default = Button;