import { Routes, Route, useLocation} from 'react-router-dom';
import Home from './components/Home/Home';
import ProductCard from './components/ProductCard/ProductCard';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {

  const location = useLocation()
  
  return (
    <div>
      <NavBar></NavBar>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path='/productos' element={<ProductCard/>}/>
      </Routes>
      <Footer></Footer>
  </div>
  )
}

export default App
