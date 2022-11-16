import { Divider, Input } from 'antd';
import {useState} from 'react';

// Iteration 5
function Search({foods, setFoods}) {
    const [query, setQuery] = useState('')
    const handleSearch = (event) => {
        event.target.value = query;
        const mappedFoods = foods.filter(food => {
            if (event.target.value === "") {
                return foods
            } else {
                return food.name.toLowerCase().includes(event.target.value.toLowerCase())
            }
        })
        console.log(mappedFoods);
        setFoods(mappedFoods);
    }
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={query} type="search" onChange={(event) => handleSearch(event)} />
    </>
  );
}

export default Search;