import React from 'react';
import HeaderCartButton from '../UI/HeaderCartButton/HeaderCartButton';

import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton />
    </div>
  );
};

export default Header;
