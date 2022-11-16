import { useState } from 'react';
import './App.css';
import { Row, Divider, Button } from 'antd';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox.jsx'
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsData);
  const handleSubmit = (event, newFood, resetInput) => {
    event.preventDefault()
    setFoods([
      ...foods,
      newFood,
  ])
  resetInput();
}
  return (
    <div className="App">
    <AddFoodForm handleSubmit = {handleSubmit}/>
    <Button> Hide Form / Add New Food </Button>
    {/* Display Search component here */}
    <Divider>Food List</Divider>
    <Row style={{ width: '100%', justifyContent: 'center' }}>
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
      </Row>
    </div>
  );
}

export default App;
