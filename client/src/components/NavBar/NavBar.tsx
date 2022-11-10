import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const NavBar = () => {
  return (
    <div>
        <div>
            <div>
                <img src={logo} alt="logo-sazones-culinarios" />
            </div>
            <div>
                <Link to='/'>
                    <p>Inicio</p>
                </Link>
                <Link to='/productos'>
                    <p>Nuestros Cursos</p>
                </Link>
                <p>Search</p>
            </div>
        </div>
    </div>
  )
}

export default NavBar
