"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  "div",
  { className: "loader" },
  _react2.default.createElement(
    "div",
    { className: "spinner spin-right" },
    _react2.default.createElement(
      "svg",
      { width: "60px", height: "60px", viewBox: "0 0 60 60", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
      _react2.default.createElement("path", { className: "loader-outer", d: "M30,60 C46.5685425,60 60,46.5685425 60,30 C60,13.4314575 46.5685425,0 30,0 C13.4314575,0 0,13.4314575 0,30 C0,46.5685425 13.4314575,60 30,60 L30,60 Z" }),
      _react2.default.createElement("path", { className: "loader-background", d: "M30,56 C44.3594035,56 56,44.3594035 56,30 C56,15.6405965 44.3594035,4 30,4 C15.6405965,4 4,15.6405965 4,30 C4,44.3594035 15.6405965,56 30,56 L30,56 Z", fill: "#FFFFFF" }),
      _react2.default.createElement("path", { className: "loader-inner", d: "M12.0224719,32.0224719 C10.9078652,32.0224719 10,31.1146067 10,30 C10,18.9707865 18.9707865,10 30,10 C31.1146067,10 32.0224719,10.9078652 32.0224719,12.0224719 C32.0224719,13.1370787 31.1146067,14.0449438 30,14.0449438 C21.2,14.0449438 14.0449438,21.2 14.0449438,30 C14.0449438,31.1146067 13.1370787,32.0224719 12.0224719,32.0224719 L12.0224719,32.0224719 Z M30,50 C28.8853933,50 27.9775281,49.0921348 27.9775281,47.9775281 C27.9775281,46.8629213 28.8853933,45.9550562 30,45.9550562 C38.8,45.9550562 45.9550562,38.8 45.9550562,30 C45.9550562,28.8853933 46.8629213,27.9775281 47.9775281,27.9775281 C49.0921348,27.9775281 50,28.8853933 50,30 C50,41.0292135 41.0292135,50 30,50 L30,50 Z", fill: "#231F20" })
    )
  )
);