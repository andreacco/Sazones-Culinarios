import imgAma from '../../../Images/ama.png'
import imgRoj from '../../../Images/roj.png'
import '../../../scss/components/ProductDetail/components/BotonCompra.scss'

export default function BotonCompra() {
  return (
    <div className='div-BotonCompra'>
      <button className="BotonCompra">
        ¡YA ME DECIDÍ, QUIERO COMPRAR EL CURSO!
      </button>
      <img className="img-boton-compra" src=/* {imgAma} */ {imgRoj} alt="" />
    </div>
  )
}
