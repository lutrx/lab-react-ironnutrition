import { useState } from 'react';
import './App.css';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox.jsx'

function App() {
  const [foods, setFoods] = useState(foodsData);
  return (
    <div className="App">
      <h2>Food List</h2>
      <FoodBox food={ {
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} />
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
