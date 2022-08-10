import React, { useState } from 'react';
import HeaderCartButton from './HeaderCartButton';
import Modal from '../UI/Modal/Modal';

import classes from './Header.module.css';
import mealsImg from '../../assets/jpg/meals.jpg';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = (event) => {
    setShowModal(false);
    event.stopPropagation();
  };

  return (
    <React.Fragment>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={showModalHandler} />
      </div>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="meals"></img>
      </div>
      <Modal show={showModal} onClick={hideModalHandler} />
    </React.Fragment>
  );
};

export default Header;
