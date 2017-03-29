'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRandomId = function getRandomId() {
  return Math.random().toString(36).substring(7);
};

function Radio(props) {
  var value = props.value,
      checked = props.checked,
      name = props.name,
      children = props.children,
      note = props.note,
      disabled = props.disabled,
      onChange = props.onChange;


  var randomId = getRandomId();

  var handlerChange = function handlerChange(event) {
    return onChange({
      name: (0, _ramda.path)(['target', 'name'], event),
      value: (0, _ramda.path)(['target', 'value'], event)
    });
  };

  return _react2.default.createElement(
    'div',
    { className: 'radio' },
    _react2.default.createElement(
      'label',
      { htmlFor: randomId },
      _react2.default.createElement('input', {
        onChange: handlerChange,
        name: name,
        type: 'radio',
        id: randomId,
        disabled: disabled,
        defaultValue: value,
        defaultChecked: checked
      }),
      _react2.default.createElement(
        'span',
        { className: 'radio-label' },
        children,
        _react2.default.createElement(
          'span',
          { className: 'radio-label-note' },
          note
        )
      )
    )
  );
}

var propTypes = exports.propTypes = {
  name: _react.PropTypes.string,
  note: _react.PropTypes.string,
  checked: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  onChange: _react.PropTypes.func,
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string, _react.PropTypes.number]).isRequired
};

Radio.propTypes = propTypes;

Radio.defaultProps = {
  name: null,
  note: null,
  checked: false,
  disabled: false,
  onChange: _ramda.F,
  value: null,
  children: null
};

exports.default = Radio;