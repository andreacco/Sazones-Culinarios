import { Routes, Route, useLocation} from 'react-router-dom';
import Home from './components/Home/Home';
import ProductCard from './components/ProductCard/ProductCard';
import './App.scss'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import VerifyEmail from './components/VerifyEmail/VerifyEmail';

function App() {

  const location = useLocation()
  
  return (
    <div>
      <NavBar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path='/productos' element={<ProductCard/>}/>
        <Route path='/verificateUser/:id' element={<VerifyEmail/>}/>
      </Routes>
      <Footer></Footer>
  </div>
  )
}

export default App
