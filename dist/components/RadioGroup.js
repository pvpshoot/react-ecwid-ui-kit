'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ramda = require('ramda');

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRandomId = function getRandomId() {
  return Math.random().toString(36).substring(7);
};

function RadioGroup(props) {
  var dataList = props.dataList,
      onChange = props.onChange;


  var randomName = getRandomId();
  var getRadioButton = function getRadioButton(data, key) {
    return _react2.default.createElement(
      _Radio2.default,
      _extends({
        key: key
      }, data, {
        onChange: onChange,
        name: (0, _ramda.or)(data.name, randomName)
      }),
      (0, _ramda.or)(data.label, data.value)
    );
  };

  var getRadioButtonsList = function getRadioButtonsList(arr) {
    return arr.map(getRadioButton);
  };
  return _react2.default.createElement(
    'div',
    null,
    getRadioButtonsList(dataList)
  );
}

RadioGroup.propTypes = {
  dataList: _react.PropTypes.arrayOf(_react.PropTypes.shape(_extends({}, _Radio.propTypes, {
    children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string, _react.PropTypes.number])
  }))),
  onChange: _react.PropTypes.func
};

RadioGroup.defaultProps = {
  dataList: null,
  onChange: _ramda.F
};

exports.default = RadioGroup;