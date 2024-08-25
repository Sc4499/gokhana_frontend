import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"


const Card = (item) => {
  const {name,description,image,category,price,quantity,ingredients,calories}=item.data
  console.log(image);
  return (
    <div className='neon-border'>
      <div className="card cardcolor " style={{ width: 'auto' }}>
  <img src={image} class="card-img-top p-4" alt={name} onError={(e) => e.target.src = 'https://via.placeholder.com/150'}/>
 
  <div class="card-body cardcolor">
  <span className='category'>{category}</span>
    <h5 class="card-title foodname">{name}</h5>
    <p class="card-text ellipsis fs-bolder">{description}</p>
    <span className='ingdnt'>Ingredient : {ingredients.join(', ')}</span>
    <select className='mt-2 mb-2 h-100 w-100 '>
        {Array.from(Array(6),(e,i)=>{
            return(
                <option key={i+1} value={i+1}>{i+1}</option>
            )})}
    </select>
    <select className='mt-2 mb-2 h-100 w-100 '>
    {quantity?.map((item)=>{
      return(
        <option value={item}>{item}</option>
      )
    })}
             
              
           
    </select>
    <Link to="/" class="btn btn-theme">Total Price : {price}</Link>
  </div>
</div>
    </div>
  )
}

export default Card