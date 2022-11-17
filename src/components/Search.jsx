import { Divider, Input } from 'antd';

// Iteration 5
function Search({query, setQuery}) {
    
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={query} type="search" onChange={(event) => setQuery(event.target.value)} />
    </>
  );
}

export default Search;