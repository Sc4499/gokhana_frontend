import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import CreateUser from './components/CreateUser';
import { CartProvider } from './contextReducer';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
      <CartProvider>
      <Router>
      <Header />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/cart" element={<Cart/>} />
      </Routes>

<Footer />
    
    </Router>
      </CartProvider>
    
     </div>
  );
}

export default App;