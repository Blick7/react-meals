import React from 'react';
import HeaderCartButton from '../UI/HeaderCartButton/HeaderCartButton';

import classes from './Header.module.css';
import mealsImg from '../../assets/jpg/meals.jpg';

const Header = () => {
  return (
    <React.Fragment>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </div>
      <div className={classes['main-image']}>
        <img src={mealsImg}></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
