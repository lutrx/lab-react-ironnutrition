import { useState } from 'react';
import './App.css';
import foodsData from './foods.json';

function App() {
  const [foods, setFoods] = useState(foodsData);
  return (
    <div className="App">
    <h2>Food List</h2>
      {foods.map((food, index) => {
        return (
          <div key={index}>
            <p> {food.name} </p>
            <img src={food.image} alt="food-img" width={150} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
