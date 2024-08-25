import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'



const CreateUser = () => {
    const navigate = useNavigate();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [location,setLocation] = useState();
    const [password,setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:5000/api/user", {
                method: "POST",
                headers: {  // Corrected from header to headers
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    location: location,
                    password: password
                })
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const json = await response.json();
    
            if (!json.success) {
                throw new Error("faile to get response, Something went wrong");
            } else {
                console.log("Success:", json);
                navigate("/login"); 
            }
    
        } catch (error) {
            console.error('Error:', error);
        }
    }


return (
    <div className='formcontainer'>
    <div className='btnBox'>
    <h3>Register Here</h3>
    </div>
    
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="textHelp" name={name} value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name={email} value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputLocation1" className="form-label">Location</label>
    <input type="text" className="form-control" id="exampleInputLocation1" aria-describedby="textHelp" name={location} value={location} onChange={(e)=>setLocation(e.target.value)}/>
    </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name={password} value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </div>
<div className='btnBox'>
<button type="submit" className="btn btn-theme">Register</button><br></br>
<Link to="/login">if already register click to login here</Link>
</div>
 
</form>
    </div>
  )
}

export default CreateUser
