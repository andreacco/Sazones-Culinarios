import { AiOutlineCheckCircle } from "react-icons/ai";
import Accordion from "./Accordion";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import '../../../scss/components/ProductDetail/components/Description.scss'

export default function Description() {
  const { name } = useParams()

  const productDetailInfo = useSelector((state: any) => state.productDetail.beMaster)
  
  const info = ["Comienza desde hoy", "Pago único en tu moneda local", "Idioma: Español", "Garantía de 7 días", "Certificación al Finalizar"]

  return (
    <div className='description-container'>
        <div className='descripcion-texts-container'>
        {/* ESTO ES LO QUE SE PUEDE CAMBIAR SI SE LE PUEDE HACER EL GOUP DEL DETALLE CONDICIONAL PRA CADA PRODUCTO (SOLO EL CLASSNAME)*/}
          <p /* className={`datoinicial ${name}dato`} */> { productDetailInfo ? 
              typeof productDetailInfo[0][0].dato !== "string" ? productDetailInfo[0][0].dato.map((s:any) => {
            return (
              <div>
                <p>{s}</p>
                <br />
              </div>
            )
          }) : productDetailInfo[0][0].dato 
        : ""} </p>
          <div className={`aqui-va-la-img ${name === "GastronomíaInternacionalOnline:7cursosincluidos"? "GastronomíaInternacionalOnline7cursosincluidos": name}`}>
          </div>
          {
            productDetailInfo ? 
              productDetailInfo[0][0].videoProfe ?
                <div className="video-entrevista-profe">
                  <p>Mira este breve video hasta el final y conoce por que es el curso más completo del mercado.</p>
                  <iframe className="video-profe" width="670" height="365" src={productDetailInfo ? productDetailInfo[0][0].videoProfe : ""} 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
                </div>
              : ""
            : ""
          }
          <Accordion/>
        </div>
        <div className='info-boxes-container'>
          <div className='header-inscripcion'>
            <h2>INSCRÍBETE AHORA</h2>
            <p>Promoción por tiempo limitado</p>
          </div>
          <div className='content-inscripcion'>
            <ul>
              {info.map((i:any) => {
                return(
                  <div className='list' key={i}>
                    <div className="info">
                      <AiOutlineCheckCircle size={24}/>
                      <li key={i}>{i}</li>
                    </div>
                    <div className='divider'></div>
                  </div>
                )
              })}
            </ul>
          </div>
          
          <div className="pagos">
            <div className='header-pago'>
              <h2>PAGO 100% SEGURO Y GARANTÍA DE SATISFACCIÓN DE 7 DÍAS.</h2>
              <p>El pago se realiza mediante las plataformas de pago más seguras del mercado.
                Si el curso no te es útil te devolvemos el 100% de tu dinero. Recibirás 10 veces el valor de los que invertirás en este completo curso.</p>
            </div>
            <div className='content-pago'>
              <img className="pagos-img" src="https://res.cloudinary.com/dgcn9sprj/image/upload/v1679295192/Product%20pages/otras%20img/precios/6_qie63x.jpg" alt="plataformas-de-pago" />
              <div className='content-pago-after'>
                <h2>CONVERSIÓN DE MONEDA PARA CUALQUIER PAÍS</h2>
                <p>Te facilitaremos la compra de nuestro curso dándote una conversión automática en tu moneda local.</p>
                <p>Con la conversión buscamos ofrecerte la misma experiencia y facilidad de una compra local sin importar el país donde te encuentres. Podrás pagar en la moneda de tu país sin tasas de compras internacionales.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
