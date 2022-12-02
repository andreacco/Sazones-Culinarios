
// Aqui solo va a ir:
// Barra de navegacion con el logo, Inicio, Nuestros Productos y una searchBar
// Un banner con imagenes que inciten a la compra
// Un formulario de suscripcion a nuestra lista de correos electronicos
// los cursos mas vendidos
// Nuestras redes Sociales y un pequeño vistazo de ellas 
// Un footer que contenga links importanes o datos interesantes y ademas la seccion del igreso para el admin

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setTitle } from '../../redux/actions/index'
import Form from "./Form/Form"
import Banner from "./Banner/Banner"
import BestSellers from "./BestSellers/BestSellers"
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom"
import '../../scss/components/Home.scss'


const Home = () => {
    const dispatch: any = useDispatch()

    useEffect(() => {
        dispatch(setTitle())
    }, [dispatch])
    
    return (
        <div>
            <Banner/>
            <Form/>
            <BestSellers/>
            <div className="RRSS-container">
                <Link to='/'>
                    <BsInstagram size={30}/>
                </Link>
                <Link to='/'>
                    <BsFacebook size={30}/>
                </Link>
                <Link to='/'>
                    <BsTwitter size={30}/>
                </Link>
            </div>
        </div>
    )
}

export default Home