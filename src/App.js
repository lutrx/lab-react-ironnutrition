import { useState } from 'react';
import './App.css';
import { Row, Divider, Button } from 'antd';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox.jsx'
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [query, setQuery] = useState('')

  const handleSubmit = (event, newFood, resetInput) => {
    event.preventDefault()
    setFoods([
      ...foods,
      newFood,
  ])
  resetInput();
  }



  const deleteItem = (itemId) => {
    return
  }

  return (
    <div className="App">
    <AddFoodForm handleSubmit = {handleSubmit}/>
    <Button> Hide Form / Add New Food </Button>
    <Search query={query} setQuery={setQuery}/>
    <Divider>Food List</Divider>
    <Row gutter={[8, 8]}>
      {foods.filter(food => food.name.toLowerCase().includes(query.toLowerCase())).map((food, index) => {
        return (
          <FoodBox food={ {
            name: food.name,
            calories: food.calories,
            image: food.image,
            servings: food.servings
          }} deleteItem={deleteItem} />
        )
      })}
      </Row>
    </div>
  );
}

export default App;
