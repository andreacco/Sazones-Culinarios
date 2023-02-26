import { GiForkKnifeSpoon } from "react-icons/gi";
import { BsFillInfoCircleFill, BsCheckLg } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { useState } from "react";
import Malla from "./Malla";
import '../../../scss/components/ProductDetail/components/Accordion.scss'


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

  const info = {
    descripcion: {
      parrafoUno: "El mundo del café es fascinante y tiene infinitas posibilidades. No solo permite vivir experiencias de sabor con las bebidas, sino que nos sumerge en un sinfín de vivencias sensoriales mientras nos asombramos con historias detrás de cada preparación.",
      
      parrafoDos: "Bajo la guía de Will Mateo Huertas, barista profesional hace más de 10 años. Para quien el barismo y el bartending, más que su profesión, es su su vocación y estilo de vida. De su mano lograrás enamorarte de este maravilloso mundo.",
    },
    detalles: {
      paraTi: ["¿Quieres iniciarte en el mundo del barismo y saber si esta profesión es para ti?", "¿Deseas aprender una nueva habilidad para entretenar y deleitar a tus amigos y familiares?", "¿Deseas empezar una trayectoria nueva, una oportunidad para transformar tu vida?", "¿Te encanta el proceso del café y quieres aprender las mejores técnicas para prepararlo?"],
      aprenderas: ["Aprenderás las mejores técnicas de elaboración de cafés clásicos.", "Lograrás conocer todos los utensilios, la máquina de café y sus funciones", "Aprenderás todos los métodos de preparación de café con diferentes cafeteras.", "Lograrás aprender a crear diseños con la espuma de la leche sobre el café.", "Aprenderás a preparar capuccino, affogato, latte, shakerato y muchos tipos más de cafetería italiana caliente y fría.", "Podrás deleitar a tus comensales con preparaciones exquisitas."],
  }
  }

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
              <p className="parrafoUno">{info.descripcion.parrafoUno}</p>
              <p className="parrafoDos">{info.descripcion.parrafoDos}</p>
            </div>
            <div className={active.dos === true ? "bloque activo" : "bloque inactivo"}>
              <h2>Este curso es para ti si:</h2>
              <ul className="checklist">
                {info.detalles.paraTi.map((d:any) => {
                  return (
                    <li key={d}><BsCheckLg size={15}/>{d}</li>
                  )
                })}
              </ul>
              <h2>¿Qué aprenderás en este curso?</h2>
              <ul className="checklist">
                {info.detalles.aprenderas.map((d:any) => {
                  return(
                    <li key={d}><BsCheckLg size={15}/>{d}</li>
                  )
                })}
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
