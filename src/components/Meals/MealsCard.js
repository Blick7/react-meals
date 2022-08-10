import React from 'react';
import MealItem from './MealItem';
import DUMMY_MEALS from '../../dummy-meals';
import Card from '../UI/Card/Card';

import classes from './MealsCard.module.css';

const MealsCard = () => {
  return (
    <div className={classes.meals}>
      <Card>
        {DUMMY_MEALS.map((item) => {
          return (
            <MealItem
              name={item.name}
              description={item.description}
              price={item.price}
              id={item.id}
              key={item.id}
            ></MealItem>
          );
        })}
      </Card>
    </div>
  );
};

export default MealsCard;
