import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import { useCart, useDispatchCart } from '../contextReducer';

const Card = ({ data }) => {
  const [cost, setCost] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [selectedVariety, setSelectedVariety] = useState({});

  const { id, name, description, image, category, price, quantity, ingredients, calories } = data;
  const datainfo = useCart();
  const dispatch = useDispatchCart();

  // Map quantity options to a more usable format
  const quantityOptions = quantity.map(q => {
    const key = Object.keys(q)[0];
    return { key, value: q[key] };
  });

  // Handle quantity change and update the cost
  const handleQuantityChange = (event) => {
    const selectedQuantity = parseInt(event.target.value, 10);
    setSelectedQuantity(selectedQuantity);
   
    // Calculate the total cost based on selected quantity
    // const totalCost = selectedQuantity * price;
    // setCost(totalCost);
  };

  // Handle variety selection and update the selected variety object
  const handleVarityChange = (event) => {
    const selectedKey = event.target.value;
    const selectedOption = quantityOptions.find(option => option.key === selectedKey);
    setSelectedVariety(selectedOption.value);
   
  };

   
  // Optionally update cost based on selected variety
 

  useEffect(() => {
    if(selectedQuantity && selectedVariety){
      const totalCost = parseInt(selectedQuantity) * parseInt(selectedVariety) ; // Adjust as needed
      setCost(totalCost);
    }
   // Logs the current cart state whenever it changes
  }, [datainfo, cost,selectedQuantity,selectedVariety]);

  const handleAddtocart = () => {
    dispatch({
      type: "ADD",
      id,
      name,
      description,
      price: cost,
      quantity: selectedQuantity,
      variety: selectedVariety
    });
  };

  return (
    <div className='neon-border'>
      <div className="card cardcolor" style={{ width: 'auto' }}>
        <img
          src={image}
          className="card-img-top p-4"
          alt={name}
          onError={(e) => e.target.src = 'https://via.placeholder.com/150'}
        />
        <div className="card-body cardcolor">
          <span className='category'>{category}</span>
          <h5 className="card-title foodname">{name}</h5>
          <p className="card-text ellipsis fs-bolder">{description}</p>
          <span className='ingdnt'>Ingredient : {ingredients.join(', ')}</span>
          
          <select className='mt-2 mb-2 h-100 w-100' onChange={handleQuantityChange}>
            <option value="">Select Quantity</option>
            {Array.from({ length: 6 }, (e, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>

          <select className='mt-2 mb-2 h-100 w-100' onChange={handleVarityChange}>
            <option value="">Select</option>
            {quantityOptions.map((option, index) => (
              <option key={index} value={option.key}>{option.key}</option>
            ))}
          </select>
{ cost? <>  <span>Cost per quantity: {parseInt(selectedVariety)}</span><br />
<span>Total Price: {cost.toFixed(2)}</span><br /></>:""}
        
          <Link to="/" className="btn btn-theme" onClick={handleAddtocart}>ADD TO CART</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
