import { Divider, Input } from 'antd';
import {useState} from 'react';

// Iteration 4
function AddFoodForm({handleSubmit}) {
    const [newName, setNewName] = useState('')
    const [newImage, setNewImage] = useState('')
    const [newCalories, setNewCalories] = useState(0)
    const [newServings, setNewServings] = useState(0)
    const newFood = {name: newName, image: newImage, calories: newCalories, servings: newServings}
    
    const resetData = () => {
        setNewName('')
        setNewImage('')
        setNewCalories(0)
        setNewServings(0)
    }
        
    
  return (
    <form onSubmit={(e) => handleSubmit(e, newFood, resetData) }>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={newName} type="text" onChange={event => setNewName(event.target.value)} />

      <label>Image</label>
      <Input value={newImage} type="text" onChange={event => setNewImage(event.target.value)} />

      <label>Calories</label>
      <Input value={newCalories} type="number" onChange={event => setNewCalories(parseInt(event.target.value))} />

      <label>Servings</label>
      <Input value={newServings} type="number" onChange={event => setNewServings(parseInt(event.target.value))} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;