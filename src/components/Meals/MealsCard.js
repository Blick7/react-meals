import React, { useEffect, useState } from 'react';
import MealItem from './MealItem';
import Card from '../UI/Card/Card';

import classes from './MealsCard.module.css';

const MealsCard = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMealsData = async () => {
      const response = await fetch(
        'https://react-http-67f2d-default-rtdb.firebaseio.com/meals.json'
      );
      const data = await response.json();

      const loadedData = [];

      for (let item in data) {
        loadedData.push({
          id: item,
          name: data[item].name,
          description: data[item].description,
          price: data[item].price,
        });
      }
      // console.log(loadedData);
      setMeals(loadedData);
      setIsLoading(false);
    };

    fetchMealsData();
  }, []);

  if (isLoading) {
    return (
      <div className={classes.meals}>
        <Card>
          <p className={classes.loading}>Loading...</p>
        </Card>
      </div>
    );
  }

  return (
    <div className={classes.meals}>
      <Card>
        {meals.map((item) => {
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
