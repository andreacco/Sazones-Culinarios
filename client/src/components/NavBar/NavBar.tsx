import { useSelector } from "react-redux";
import logo from '../../assets/logo.png'
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom'
import { setTitle } from '../../redux/actions/index'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import '../../Styles/components/NavBar/NavBar.scss'

export default function NavBar() {
  const dispatch: any = useDispatch()

  const pages = ['Inicio', 'Nuestros Productos'];

  const title: string = useSelector((state: any) => state.title)

    useEffect(() => {
        dispatch(setTitle())
    }, [dispatch])

  return (
    <div className="appNavbar">
      <div className="left-side">
        <img src={logo} alt="logo-sazones-culinarios" className="logo"/>
        <h3 className="title">{title}</h3>
      </div>
      <div className="right-side">
        {pages.map((p: any) => {
          return (
            <h5 key={p} className="navBar-links">
              <Link to={p === 'Inicio' ? '/' : '/productos'}>{p}</Link>
            </h5>
          )
        })}
        <SearchBar />
        <Link to='/'>
            <BsInstagram />
        </Link>
        <Link to='/'>
            <BsFacebook />
        </Link>
        <Link to='/'>
            <BsTwitter />
        </Link>
      </div>
    </div>
  )
}
