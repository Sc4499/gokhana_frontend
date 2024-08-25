import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import CreateUser from './components/CreateUser';
function App() {
  return (
    <div className="App">
      <Router>
      <Header />

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/createUser" element={<CreateUser />} />
</Routes>

<Footer />
    
    </Router>
     </div>
  );
}

export default App;