import React from 'react';
import MealItem from '../MealItem/MealItem';
import DUMMY_MEALS from '../../dummy-meals';
import Card from '../UI/Card/Card';

import classes from './MealsCard';

const MealsCard = () => {
  return (
    <Card>
      {DUMMY_MEALS.map((item) => {
        return (
          <MealItem
            name={item.name}
            description={item.description}
            price={item.price}
            key={item.id}
          ></MealItem>
        );
      })}
    </Card>
  );
};

export default MealsCard;
