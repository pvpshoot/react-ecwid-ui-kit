'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Select(props) {
  var options = props.options,
      label = props.label,
      onChange = props.onChange,
      size = props.size,
      disabled = props.disabled;


  var handlerSelect = function handlerSelect(event) {
    return onChange((0, _ramda.path)(['target', 'value'], event));
  };

  var getOptions = function getOptions(arr) {
    return arr.map(function (el) {
      return _react2.default.createElement(
        'option',
        { value: el.value, key: el.value },
        ' ',
        (0, _ramda.or)(el.name, el.value),
        ' '
      );
    });
  };

  return _react2.default.createElement(
    'div',
    { className: 'select-wrap' },
    _react2.default.createElement(
      'select',
      {
        className: 'form-control input-' + size,
        onChange: handlerSelect,
        disabled: disabled,
        defaultValue: label
      },
      _react2.default.createElement(
        'option',
        { disabled: true, 'default': true },
        label
      ),
      getOptions(options)
    )
  );
}

Select.propTypes = {
  options: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    value: _react.PropTypes.any,
    name: _react.PropTypes.string
  })).isRequired,
  label: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: _react.PropTypes.bool
};
Select.defaultProps = {
  onChange: _ramda.F,
  options: [],
  label: 'Choose an option',
  size: 'medium',
  disabled: false
};

exports.default = Select;