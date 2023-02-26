import { AiOutlineCheckCircle } from "react-icons/ai";
import pagos from '../../../Images/pagos.png'
import Accordion from "./Accordion";
import '../../../scss/components/ProductDetail/components/Description.scss'

export default function Description() {
  const info = ["Comienza desde hoy", "Pago único en tu moneda local", "Idioma: Español", "Garantía de 7 días", "Certificación al Finalizar"]
  const imgs = [""]

  return (
    <div className='description-container'>
        <div className='descripcion-texts-container'>
          <p> Si quieres convertirte en un profesional del café, éste es el primer paso. Prepárate para incorporarte al mercado laboral o amplía tus conocimientos en el área al certificarte en este curso de Barista Principiante. Al finalizar este curso darás el primer paso para trabajar en cafeterías, restaurantes o bares, deleitar a tu audiencia y preparar cafés clásicos y modernos de la manera correcta. </p>
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
              <img className="pagos-img" src={pagos} alt="plataformas-de-pago" />
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
