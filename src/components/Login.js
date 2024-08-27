import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {

  const navigate = useNavigate();
   const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:5000/api/loginUser", {
                method: "POST",
                headers: {  // Corrected from header to headers
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                   email: email,
                   password: password
                })
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const json = await response.json();
    
            if (!json.success) {
                 throw new Error("Something went wrong");
            } else {
                console.log("Success:", json);
                localStorage.setItem("authToken", json.authToken);
                localStorage.setItem("email", email);
                navigate("/"); 
            }
    
        } catch (error) {
            console.error('Error:', error);
        }
    }

  return (
    <div className='formcontainer'>
    <div className='btnBox'>
    <h3>Login Here</h3>
    </div>
    
      <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name={email} value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" name={password} value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </div>
<div className='btnBox'>
<button type="submit" class="btn btn-theme">Login</button><br></br>
<Link to="/createUser">If not registered click here</Link>
</div>
 
</form>
    </div>
  )
}

export default Login
//sach1234,123raj