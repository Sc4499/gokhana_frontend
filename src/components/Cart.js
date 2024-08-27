import React from 'react'
import { useCart, useDispatchCart } from '../contextReducer';
import "./Cart.css"

const Cart = () => {
    const data = useCart();
    const dispatch = useDispatchCart();
    console.log(data);

    const totalPrice = data.reduce((acc, item) => {
        return acc + item.price; 
    }, 0); 

    const handleCheckout = async() =>{
      let userEmail = localStorage.getItem("email")
      let response = await fetch ("http://localhost:5000/api/order",{
        method : "POST",
        headers: {  // Corrected from header to headers
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         order_data : data,
         email : userEmail,
         order_date : new Date().toDateString()
      })
      })
 console.log("this is my response",response);
      if(response.status === 200){
        dispatch({type:"DROP"})
      }

    }

    if(data.length === 0 ){
        return(
            <h1 className='emptyCartmsg'>This cart is Empty</h1>
        )
    }else{
        return (
            <div>
              <table class="table mb-0">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
        
            </tr>
          </thead>
          <tbody>
           {data?.map((item)=>{
            return(
            <tr>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.quantity}</th>
              <th>{item.option}</th>
              <th>{item.price}</th>
            </tr>
            )
           })} 
         </tbody>
        </table>
        <div className='checkoutsec'>
            Total Price : Rs {totalPrice}/-
            <button className='btn btn-success' onClick={handleCheckout}>Checkout</button>
        </div>
            </div>
          )
    }
 
}

export default Cart
