import React, { Component } from 'react';

class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.handleCloseOnEscape);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleCloseOnEscape);
  };

  handleCloseOnEscape = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleCloseOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleCloseOnBackdrop}>
        <div className="Modal">{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
