import React from 'react';
import ReactDOM from 'react-dom';
import Cart from '../../Cart/Cart';
import classes from './Modal.module.css';

const Modal = (props) => {
  if (!props.show) return;

  return ReactDOM.createPortal(
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.onClick}>
        <div
          className={classes.modal}
          onClick={(event) => event.stopPropagation()}
        >
          <Cart onClick={props.onClick} />
        </div>
      </div>
    </React.Fragment>,
    document.body
  );
};

export default Modal;
