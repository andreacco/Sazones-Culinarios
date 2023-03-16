import '../../../scss/components/ProductDetail/components/Precios.scss'
import garantia from '../../../Images/7diasgarantia.png'
import imgRoj from '../../../Images/roj.png'
import info1 from '../../../Images/8.png'
import info2 from '../../../Images/9.png'
import info3 from '../../../Images/10.png'


export default function Precios() {

  const precio = 95

  const precioMayor =  precio * 5


  return (
    <div className='div-precio'>
      <h1 className='quote'>"CONVIÉRTETE EN LA PERSONA QUE ATRAIGA LOS RESULTADOS QUE BUSCAS." - JIM CATHCART</h1>
      <h1 className='precioMayor'>{`$${precioMayor} USD`}</h1>

      <div className='div-PrecioReal'>
          <h6 className='h6'>HOY</h6>
          <h1 className='precioReal'>{`$${precio} USD`}</h1>
      </div>

      <div className='div-infoPago'>
        <div className='cards'>
          <div className='card'>
            <img src={info1} alt="UN SOLO PAGO IMG" />
            <p className='p1'>UN SOLO Y ÚNICO PAGO</p>
          </div>
          <div className='card'>
            <img src={info2} alt="LIFETIME GUARANTEE IMG" />
            <p className='p2'>PARA TODA LA ViDA</p>
          </div>
          <div className='card'>
            <img src={info3} alt="PARA SIEMPRE IMG" />
            <p>SIN COBROS POSTERIORES Y<h6 className='h6'>PARA SIEMPRE</h6></p>
          </div>
        </div>
      </div>

      <button className="BotonCompraPrecios">
        ¡QUIERO INSCRIBIRME YA!
      </button>
      <img className="img-boton-compra-precio" src= {imgRoj} alt="" />
      <img className='img-garantia' src={garantia} alt="" />
    </div>
  )
}
