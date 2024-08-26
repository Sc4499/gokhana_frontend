import React, { useEffect,useState } from 'react'
import Card from './Card'
import Carousel from './Carousel'
import SearchBar from './SearchBar';
import "./Home.css";
import FlatwareIcon from '@mui/icons-material/Flatware';
import WineBarIcon from '@mui/icons-material/WineBar';

const Home = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  // Handler function to update the search value
  const handleSearchChange = (value) => {
    setSearchValue(value);
  };
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/fooditem');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFoodItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const filteredFoodItems = foodItems.filter(item =>
    item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    item.description.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (loading) return <h1 style={{color : "white"}}>Loading...</h1>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <div className='container'>
        <Carousel/>
      </div>
      <div className='headBox headingone'>
      <FlatwareIcon className='forkIcon'/><span> What do you want to eat...</span>
      </div>
     
      <SearchBar onSearchChange={handleSearchChange}/>
   <div className="container text-center">
   <div className='headBox headingone'>
      <WineBarIcon className='forkIcon'/><span> Our different variety of Dishes...</span>
      </div>
  <div className="row ">
  {filteredFoodItems.length > 0 ? (
            filteredFoodItems.map((item) => (
              <div className="col-md-4 mb-4" key={item._id}>
                <Card data={item} />
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
   
   
  </div>

</div>
    </div>
  )
}

export default Home
