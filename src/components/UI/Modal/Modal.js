import React from 'react';
import Cart from '../../Cart/Cart';
import classes from './Modal.module.css';

const Modal = (props) => {
  if (!props.show) return;

  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.onClick}>
        <div
          className={classes.modal}
          onClick={(event) => event.stopPropagation()}
        >
          <Cart onClick={props.onClick} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
