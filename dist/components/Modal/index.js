'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _recompose = require('recompose');

var _reactInlinesvg = require('react-inlinesvg');

var _reactInlinesvg2 = _interopRequireDefault(_reactInlinesvg);

var _ramda = require('ramda');

var _close = require('./close.svg');

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 100
  },
  content: {}
};

var closeStyle = {
  backgroundColor: 'transparent',
  border: 0,
  cursor: 'pointer'
};

function Modal(props) {
  var style = props.style,
      isOpen = props.isOpen,
      children = props.children,
      contentLabel = props.contentLabel,
      onRequestClose = props.onRequestClose;


  var handlerClose = function handlerClose() {
    onRequestClose();
  };

  return _react2.default.createElement(
    _reactModal2.default,
    _extends({}, props, {
      style: (0, _ramda.merge)(defaultStyles, style),
      isOpen: isOpen,
      onRequestClose: onRequestClose,
      contentLabel: contentLabel
    }),
    _react2.default.createElement(
      'div',
      { className: 'main-popup__close' },
      _react2.default.createElement(
        'button',
        { onClick: handlerClose, style: closeStyle },
        _react2.default.createElement(
          _reactInlinesvg2.default,
          { src: _close2.default },
          'Close'
        )
      )
    ),
    children
  );
}

var enhanced = (0, _recompose.compose)((0, _recompose.withProps)(function (props) {
  return props;
}), (0, _recompose.defaultProps)({ style: {} }), _recompose.pure);

Modal.propTypes = {
  /** */
  /** Boolean describing if the modal should be shown or not. Defaults to false. */
  isOpen: _react.PropTypes.bool.isRequired,
  /** */
  contentLabel: _react.PropTypes.string.isRequired,
  /**
   * Function that will be run when the modal is requested to be closed,
   * prior to actually closing. */
  onRequestClose: _react.PropTypes.func.isRequired,
  /** */
  children: _react.PropTypes.element.isRequired,
  /** Object indicating styles to be used for the modal, divided into overlay and content styles. */
  style: _react.PropTypes.object,
  /**
   * Set this to properly hide your application from assistive
   * screenreaders and other assistive technologies while the modal is open. */
  appElement: _react.PropTypes.node,
  /** Function that will be run after the modal has opened. */
  onAfterOpen: _react.PropTypes.func,
  /**
   * Function that will be run when the modal is requested
   *  to be closed, prior to actually closing. */
  closeTimeoutMS: _react.PropTypes.number,
  /** Boolean indicating if the appElement should be hidden. Defaults to true. */
  ariaHideApp: _react.PropTypes.bool,
  /** Boolean indicating if the overlay should close the modal. Defaults to true. */
  shouldCloseOnOverlayClick: _react.PropTypes.bool,
  /** String className to be applied to the portal. Defaults to "ReactModalPortal". */
  portalClassName: _react.PropTypes.string,
  /** String className to be applied to the overlay. */
  overlayClassName: _react.PropTypes.string,
  /** String className to be applied to the modal content. */
  className: _react.PropTypes.string,
  /** String indicating how the content container should be announced to screenreaders. */
  /** String indicating the role of the modal, allowing the
   * 'dialog' role to be applied if desired. */
  role: _react.PropTypes.string,
  /** Function that will be called to get the parent element that the modal will be attached to. */
  parentSelector: _react.PropTypes.node
};

exports.default = enhanced(Modal);