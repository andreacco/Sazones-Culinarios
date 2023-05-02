
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
import { Link } from "react-router-dom"
import '../../scss/components/Home.scss'
import Instagram from "../SocialMedia/Instagram"
import Facebook from "../SocialMedia/Facebook"
import Twitter from "../SocialMedia/Twitter"
import changePageTitle from '../../customHooks/ChangeTitle'

const Home = () => {
    const dispatch: any = useDispatch()
        changePageTitle("Sazones Culinarios")

    useEffect(() => {
        dispatch(setTitle())
    }, [dispatch])
    
    return (
        <div className="home-div">
            <Banner/>
            <Form/>
            <BestSellers/>
            <div className="RRSS-container">
                <Link to='/'>
                    <Instagram/>
                </Link>
                <Link to='/'>
                    <Facebook/>
                </Link>
                <Link to='/'>
                    <Twitter/>
                </Link>
            </div>
        </div>
    )
}

export default Home