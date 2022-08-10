import React from 'react';
import Header from './components/Header/Header';
import MealsSummary from './components/Meals/MealsSummary';
import MealsCard from './components/Meals/MealsCard';

function App() {
  return (
    <React.Fragment>
      <Header />
      <MealsSummary />
      <MealsCard />
    </React.Fragment>
  );
}

export default App;
