import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Header.css"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart, useDispatchCart } from '../contextReducer';
const Header = () => {

  const data = useCart();


  const navigate = useNavigate();
  const isLogin = localStorage.getItem("authToken");
  const handleLogout = () =>{
    localStorage.removeItem("authToken")
    navigate("/login");
  }

   return (
<>
<nav className="navbar navbar-expand-lg navContainer">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">GO<FastfoodIcon/>Khana</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
      
      {isLogin ? <>
     
          <li className="nav-item">
          <Link className="nav-link" to="/pricing">MyOrder</Link>
        </li>
        <li className="nav-item">
          <button className='btn fs-4 btn-theme ' onClick={handleLogout}>Logout</button>
        </li> 
      </> : <>
        <li className="nav-item">
          <Link className="nav-link btn btn-theme me-1" to="/login">Login</Link>
        </li> 
            <li className="nav-item">
            <Link className="nav-link btn btn-theme" to="/createUser">Signup</Link>
          </li> 
        </>  }
      
        <li className="nav-item counteritem">
    <Link className="nav-link" to="/cart"> <ShoppingCartIcon/><span className='count'>{data.length}</span></Link>
    </li>
    
      
      
      </ul>
  
    {/* <div class="d-flex counteritem">
 
      </div> */}
      </div>
  </div>
</nav>
</>

  )
}

export default Header
