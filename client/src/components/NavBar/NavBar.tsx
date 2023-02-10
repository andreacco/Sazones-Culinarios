import { useSelector } from "react-redux";
import logo from '../../assets/logo.png'
import SearchBar from "./SearchBar";
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { setTitle } from '../../redux/actions/index'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import '../../scss/components/NavBar.scss'
import useGoUp from "../../customHooks/GoUp";
import Instagram from "../SocialMedia/Instagram";
import Facebook from "../SocialMedia/Facebook";
import Twitter from "../SocialMedia/Twitter";

export default function NavBar() {
  const dispatch: any = useDispatch()
  const goUp: any = useGoUp()
  const location: any = useLocation()
  console.log(location);
  

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
        {pages?.map((p: any) => {
          return (
            <NavLink 
            to={p === 'Inicio' ? '/' : '/productos'} 
            className={({isActive}) => isActive ? "navBar-links active" : "navBar-links"} 
            onClick={() => goUp()}>
              {p}
            </NavLink>
          )
        })}
        <SearchBar />
        <a href='https://www.instagram.com/sazonesculinarios/' target="_blank">
          <Instagram/>
        </a>
        <a href='https://www.facebook.com/SazonesCulinarios/' target="_blank">
          <Facebook/>
        </a>
        <a href='/'>
          <Twitter/>
        </a>
      </div>
    </div>
  )
}
