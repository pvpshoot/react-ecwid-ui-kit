import React, { PropTypes } from 'react';
import ReactModal from 'react-modal';
import {
  compose,
  // withState,
  pure,
  defaultProps,
  withProps,
} from 'recompose';
import InlineSvg from 'react-inlinesvg';


import {
  merge,
} from 'ramda';

import closeIcon from './close.svg';

const defaultStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 100,
  },
  content: {},
};

const closeStyle = {
  backgroundColor: 'transparent',
  border: 0,
  cursor: 'pointer',
};

function Modal(props) {
  const {
    style,
    isOpen,
    children,
    contentLabel,
    onRequestClose,
  } = props;

  const handlerClose = () => {
    onRequestClose();
  };

  return (
    <ReactModal
      {...props}
      style={merge(defaultStyles, style)}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
    >
      <div className="main-popup__close">
        <button onClick={handlerClose} style={closeStyle}>
          <InlineSvg src={closeIcon}>Close</InlineSvg>
        </button>
      </div>
      {children}
    </ReactModal>
  );
}


const enhanced = compose(
  withProps(props => props),
  defaultProps({ style: {} }),
  pure,
);

Modal.propTypes = {
  /** */
  /** Boolean describing if the modal should be shown or not. Defaults to false. */
  isOpen: PropTypes.bool.isRequired,
  /** */
  contentLabel: PropTypes.string.isRequired,
  /**
   * Function that will be run when the modal is requested to be closed,
   * prior to actually closing. */
  onRequestClose: PropTypes.func.isRequired,
  /** */
  children: PropTypes.element.isRequired,
  /** Object indicating styles to be used for the modal, divided into overlay and content styles. */
  style: PropTypes.object,
  /**
   * Set this to properly hide your application from assistive
   * screenreaders and other assistive technologies while the modal is open. */
  appElement: PropTypes.node,
  /** Function that will be run after the modal has opened. */
  onAfterOpen: PropTypes.func,
  /**
   * Function that will be run when the modal is requested
   *  to be closed, prior to actually closing. */
  closeTimeoutMS: PropTypes.number,
  /** Boolean indicating if the appElement should be hidden. Defaults to true. */
  ariaHideApp: PropTypes.bool,
  /** Boolean indicating if the overlay should close the modal. Defaults to true. */
  shouldCloseOnOverlayClick: PropTypes.bool,
  /** String className to be applied to the portal. Defaults to "ReactModalPortal". */
  portalClassName: PropTypes.string,
  /** String className to be applied to the overlay. */
  overlayClassName: PropTypes.string,
  /** String className to be applied to the modal content. */
  className: PropTypes.string,
  /** String indicating how the content container should be announced to screenreaders. */
  /** String indicating the role of the modal, allowing the
   * 'dialog' role to be applied if desired. */
  role: PropTypes.string,
  /** Function that will be called to get the parent element that the modal will be attached to. */
  parentSelector: PropTypes.node,
};


export default enhanced(Modal);
