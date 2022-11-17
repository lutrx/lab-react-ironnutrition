import { Divider, Input } from 'antd';
import {useState} from 'react';

// Iteration 5
function Search({foods, setFoods}) {
    const [query, setQuery] = useState('')
    const handleSearch = (event) => {
        const mappedFoods = foods.filter(food => {
            if (event.target.value === "") {
                return foods
            } else {
                return food.name.toLowerCase().includes(event.target.value.toLowerCase())
            }
        })
        setQuery(event.target.value)
        setFoods(mappedFoods);
    }
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={query} type="search" onChange={handleSearch} />
    </>
  );
}

export default Search;