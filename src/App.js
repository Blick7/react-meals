import React from 'react';
import Header from './components/Header/Header';
import MealsSummary from './components/MealsSummary/MealsSummary';
import MealsCard from './components/MealsCard/MealsCard';

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
