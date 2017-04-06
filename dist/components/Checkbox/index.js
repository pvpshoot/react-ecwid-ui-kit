'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRandomId = function getRandomId() {
  return Math.random().toString(36).substring(7);
};

function CheckBox(props) {
  var name = props.name,
      size = props.size,
      labelOn = props.labelOn,
      checked = props.checked,
      labelOff = props.labelOff,
      disabled = props.disabled,
      onChange = props.onChange;


  var randomId = getRandomId();

  var handlerChange = function handlerChange(event) {
    return onChange({
      name: (0, _ramda.path)(['target', 'name'], event),
      checked: (0, _ramda.path)(['target', 'checked'], event)
    });
  };

  return _react2.default.createElement(
    'label',
    { className: 'checkbox ' + size, htmlFor: randomId },
    _react2.default.createElement('input', {
      name: name,
      id: randomId,
      type: 'checkbox',
      disabled: disabled,
      defaultChecked: checked,
      onChange: handlerChange
    }),
    _react2.default.createElement(
      'div',
      { 'data-on': labelOn, 'data-off': labelOff },
      _react2.default.createElement('div', null)
    )
  );
}

CheckBox.propTypes = {
  name: _react.PropTypes.string,
  labelOn: _react.PropTypes.string,
  labelOff: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,
  checked: _react.PropTypes.bool,
  onChange: _react.PropTypes.func,
  size: _react.PropTypes.oneOf(['big', 'tiny'])
};
CheckBox.defaultProps = {
  name: '',
  labelOn: 'enabled',
  labelOff: 'disabled',
  disabled: false,
  checked: false,
  onChange: _ramda.F,
  size: 'big'
};

exports.default = CheckBox;