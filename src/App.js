import { useState } from 'react';
import './App.css';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox.jsx'

function App() {
  const [foods, setFoods] = useState(foodsData);
  return (
    <div className="App">
      <h2>Food List</h2>
      {foods.map((food, index) => {
        return (
          <FoodBox food={ {
            name: food.name,
            calories: food.calories,
            image: food.image,
            servings: food.servings
          }} />
        )
      })}
    </div>
  );
}

export default App;
