import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
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
        <li className="nav-item">
          <Link className="nav-link" to="/pricing">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/createUser">Signup</Link>
        </li>
      
      
      </ul>
  
    <div class="d-flex counteritem">
      <button className='btn'><ShoppingCartIcon/><span className='count'>2</span></button>
    
      </div>
      </div>
  </div>
</nav>
</>

  )
}

export default Header
