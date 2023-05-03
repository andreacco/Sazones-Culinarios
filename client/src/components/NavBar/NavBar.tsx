import { useSelector } from "react-redux";
import logo from '../../assets/logo.png'
import SearchBar from "./SearchBar";
import { Link, NavLink } from 'react-router-dom'
import { reset, setTitle } from '../../redux/actions/index'
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import '../../scss/components/NavBar.scss'
import useGoUp from "../../customHooks/GoUp";
import Instagram from "../SocialMedia/Instagram";
import Facebook from "../SocialMedia/Facebook";
import Twitter from "../SocialMedia/Twitter";

export default function NavBar() {
  const dispatch: any = useDispatch()
  const goUp: any = useGoUp()

  const pages = ['Inicio', 'Nuestros Productos'];

  const title: string = useSelector((state: any) => state.title)

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
      dispatch(setTitle())
  }, [dispatch])

  const handleClick = () => {
    goUp()
    dispatch(reset())
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="appNavbar">
      <div className="left-side">
        <Link to='/' className="link-logo" onClick={() => handleClick()}>
          <img className="logo"src={logo} alt="logo-sazones-culinarios" />
          <h3 className="title">{title}</h3>
        </Link>
      </div>
      <div className={`right-side mobile ${open === true ? "opened" : "closed"}`}>
        {/* <input className="input-checkbox" type="checkbox" name="" id=""/> */}
        <div className=/* {` */"hamburger-lines"/*  ${open === true ? "opened" : "closed"}`} */ onClick={() => handleOpen()}>
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
        </div>
        <div className="menu-items">
          <div className="mobile-links">
            {pages?.map((p: any) => {
              return (
                <NavLink 
                  to={p === 'Inicio' ? '/' : '/productos'} 
                  className={({isActive}) => isActive ? "navBar-links active" : "navBar-links"} 
                  onClick={() => handleClick()}
                  key={p} >
                    {p}
                </NavLink>
              )
            })}
            <SearchBar 
              setOpen={setOpen}
            />
            <div className="social-Media">
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
        </div>
      </div>
    </div>
  )
}
