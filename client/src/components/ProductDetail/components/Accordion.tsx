import { GiForkKnifeSpoon } from "react-icons/gi";
import { BsFillInfoCircleFill, BsCheckLg } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { useState } from "react";
import Malla from "./Malla";
import '../../../scss/components/ProductDetail/components/Accordion.scss'
import { useSelector } from "react-redux";


export default function Accordion() {
  const [active, setActive] = useState<any>({
    uno: true,
    dos: false,
    tres: false,
  })

  const handleActive = (title: any) => {
    if (title === "Descripcion") {
      setActive({
        uno: true,
        dos: false,
        tres: false,
      })
    }
    if (title === "Detalles") {
      setActive({
        uno: false,
        dos: true,
        tres: false,
      })
    }
    if (title === "Malla") {
      setActive({
        uno: false,
        dos: false,
        tres: true,
      })
    }
  }

  const productDetailInfo = useSelector((state: any) => state.productDetail.beMaster)


  return (
    <div>
      <div className="contenedor">
        <ul className="ul">
          <li className={active.uno === true ? "li activo" : "li"} onClick={() => handleActive("Descripcion")}> 
            <GiForkKnifeSpoon/> Descripción
          </li>
          <li className={active.dos === true ? "li activo" : "li"} onClick={() => handleActive("Detalles")}> 
            <BsFillInfoCircleFill/> Detalles
          </li>
          <li className={active.tres === true ? "li activo" : "li"} onClick={() => handleActive("Malla")}> 
            <FaThList/> Malla
          </li>
        </ul>
        <div className="subcontenedor">
            <div className={active.uno === true ? "bloque activo" : "bloque inactivo"}>
            <p> {productDetailInfo ? productDetailInfo[0][0].descripcion.map((s:any) => {
              return (
                <div>
                  <p>{s}</p>
                  <br />
                </div>
              )
            }) : ""} </p>
            </div>
            <div className={active.dos === true ? "bloque activo" : "bloque inactivo"}>
              <h2>Este curso es para ti si:</h2>
              <ul className="checklist">
                {productDetailInfo ? productDetailInfo[0][0].detalles.paraTi.map((d:any) => {
                  return (
                    <li key={d}><BsCheckLg size={15}/>{d}</li>
                  )
                }) : ""}
              </ul>
              <h2>¿Qué aprenderás en este curso?</h2>
              <ul className="checklist">
                {productDetailInfo ? productDetailInfo[0][0].detalles.aprenderas.map((d:any) => {
                  return(
                    <li key={d}><BsCheckLg size={15}/>{d}</li>
                  )
                }) : ""}
              </ul>
            </div>
            <div className={active.tres === true ? "bloque activo" : "bloque inactivo"}>
              <Malla/>
            </div>
        </div>
      </div>
    </div>
  )
}
