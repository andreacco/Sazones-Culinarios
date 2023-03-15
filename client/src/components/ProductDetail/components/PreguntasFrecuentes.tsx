import { useState } from "react";
import { AiFillPlusCircle, AiOutlinePlusCircle, AiFillMinusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import '../../../scss/components/ProductDetail/components/PreguntasFrecuentes.scss'

export default function PreguntasFrecuentes() {

  const [open, setOpen] = useState<any>({
    p1: false,
    p2: false,
    p3: false,
    p4: false,
    p5: false,
    p6: false,
    p7: false,
  })

  const handleOpen: any = (p: any) => {
    if(p === "p1") {
      setOpen({
        ...open,
        p1: !open.p1
      })
    }
    if(p === "p2") {
      setOpen({
        ...open,
        p2: !open.p2
      })
    }
    if(p === "p3") {
      setOpen({
        ...open,
        p3: !open.p3
      })
    }
    if(p === "p4") {
      setOpen({
        ...open,
        p4: !open.p4
      })
    }
    if(p === "p5") {
      setOpen({
        ...open,
        p5: !open.p5
      })
    }
    if(p === "p6") {
      setOpen({
        ...open,
        p6: !open.p6
      })
    }
  }

  // console.log(open);
  

  return (
    <div className='div-PreguntasFrecuentes'>
      <h1 className="title">PREGUNTAS FRECUENTES</h1>
      <div className='div-divs-preguntas'>
        <div className="div-izq">
          <div className="div-cada-pregunta">
            <div className={open.p1 === true ? "div-pregunta activeTruePreg" : "div-pregunta"} onClick={() => handleOpen("p1")}>
              <h1 className="pregunta">¿Cuándo comienza el curso y en qué horarios?</h1>
              {open.p1 === false ? 
              <AiFillPlusCircle size={30}/>
              : 
              <AiFillMinusCircle size={30}/>
              }
            </div>
            <div className={open.p1 === true ? "div-respuesta activeTrueRes" : "div-respuesta"} >
              <p>¡Inmediatamente después del pago recibirás tu acceso para comenzar este curso! Podrás crear tu propia contraseña y enviaremos este respaldo a tu correo. Es un curso online que se adapta a tu ritmo, tú decides cuándo comenzar y cuándo terminar. En cuanto al horario, ¡No te preocupes! El curso no tiene un horario fijo, tú podrás ingresar a la plataforma en el horario que tu quieras e ir viendo los videos a tu propio ritmo. Además, tendrás acceso de por vida e ilimitado a la plataforma, por lo que podrás adelantar o retroceder cada receta las veces que quieras. </p>
            </div>
          </div>

          <div className="div-cada-pregunta">
            <div className={open.p2 === true ? "div-pregunta activeTruePreg" : "div-pregunta"} onClick={() => handleOpen("p2")}>
              <h1 className="pregunta">¿Envían una lista de ingredientes?</h1>
              {open.p2 === false ? 
              <AiFillPlusCircle size={30}/>
              : 
              <AiFillMinusCircle size={30}/>
              }
            </div>
            <div className={open.p2 === true ? "div-respuesta activeTrueRes" : "div-respuesta"}>
              <p>Todas las recetas que aprenderás contienen los ingredientes, preparación paso a paso y fichas técnicas en formato pdf para descargar.</p>
            </div>
          </div>

          <div className="div-cada-pregunta">
            <div className={open.p3 === true ? "div-pregunta activeTruePreg" : "div-pregunta"} onClick={() => handleOpen("p3")}>
              <h1 className="pregunta">¿Cómo obtengo el certificado del curso?</h1>
              {open.p3 === false ? 
              <AiFillPlusCircle size={30}/>
              : 
              <AiFillMinusCircle size={30}/>
              }
            </div>
            <div className={open.p3 === true ? "div-respuesta activeTrueRes" : "div-respuesta"}>
              <p>Luego de que termines el curso, la plataforma te brindará automáticamente la opción para descargar el certificado</p>
            </div>
          </div>
        </div>

        <div className="div-der">
          <div className="div-cada-pregunta">
            <div className={open.p4 === true ? "div-pregunta activeTruePreg" : "div-pregunta"} onClick={() => handleOpen("p4")}>
              <h1 className="pregunta">¿Qué necesito para hacer el curso?</h1>
              {open.p4 === false ? 
              <AiFillPlusCircle size={30}/>
              : 
              <AiFillMinusCircle size={30}/>
              }
            </div>
            <div className={open.p4 === true ? "div-respuesta activeTrueRes" : "div-respuesta"}>
              <p>Internet, un computador, tablet o celular. Pero lo más importante son las ganas de aprender. Si no tienes conocimientos previos, ¡No te preocupes! Nuestro curso está diseñado para que incluso sin tener nada de experiencia o ningún conocimiento previo lo puedas hacer y aprender perfectamente.</p>
            </div>
          </div>
          <div className="div-cada-pregunta">
            <div className={open.p5 === true ? "div-pregunta activeTruePreg" : "div-pregunta"} onClick={() => handleOpen("p5")}>
              <h1 className="pregunta">¿Debo invertir en utensilios o ingredientes?</h1>
              {open.p5 === false ? 
              <AiFillPlusCircle size={30}/>
              : 
              <AiFillMinusCircle size={30}/>
              }
            </div>
            <div className={open.p5 === true ? "div-respuesta activeTrueRes" : "div-respuesta"}>
              <p>No, nuestro fin no es el que te pongas a comprar materiales o utensilios; queremos que primero aprendas y luego, decidas con conocimiento que recetas te gustarían hacer, que utensilios necesitarás, cuales tienes y cuales deberías comprar.</p>
            </div>
          </div>
          <div className="div-cada-pregunta">
            <div className={open.p6 === true ? "div-pregunta activeTruePreg" : "div-pregunta"} onClick={() => handleOpen("p6")}>
              <h1 className="pregunta">¿El Pago es Seguro?</h1>
              {open.p6 === false ? 
              <AiFillPlusCircle size={30}/>
              : 
              <AiFillMinusCircle size={30}/>
              }
            </div>
            <div className={open.p6 === true ? "div-respuesta activeTrueRes" : "div-respuesta"}>
              <p>Los pagos se realizan a través de Hotmart® que es uno de los procesadores de pago más importantes del mundo. Nosotros NO tenemos acceso a tus datos de pago, eso es confidencial. Tu pago es 100% seguro.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
