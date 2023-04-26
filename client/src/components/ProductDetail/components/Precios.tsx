import { useSelector } from 'react-redux'
import '../../../scss/components/ProductDetail/components/Precios.scss'

export default function Precios( link : any ) {
  const product = useSelector((state: any) => state.productDetail)
  const productDetailInfo = useSelector((state: any) => state.productDetail.beMaster)

  const precio = product.price

  const precioMayor =  precio * 5

      const handleClick = () => {
        window.open(link.link, '_blank')
    }

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
            <img src="https://res.cloudinary.com/dgcn9sprj/image/upload/v1679294661/Product%20pages/otras%20img/precios/5_d1vwha.jpg" alt="UN SOLO PAGO IMG" />
            <p className='p1'>UN SOLO Y ÚNICO PAGO</p>
          </div>
          <div className='card'>
            <img src="https://res.cloudinary.com/dgcn9sprj/image/upload/v1679294658/Product%20pages/otras%20img/precios/3_ktn4uo.jpg" alt="LIFETIME GUARANTEE IMG" />
            <p className='p2'>PARA TODA LA ViDA</p>
          </div>
          <div className='card'>
            <img src="https://res.cloudinary.com/dgcn9sprj/image/upload/v1679294659/Product%20pages/otras%20img/precios/2_wdygko.jpg" alt="PARA SIEMPRE IMG" />
            <p>SIN COBROS POSTERIORES Y<h6 className='h6'>PARA SIEMPRE</h6></p>
          </div>
        </div>
      </div>

      <button className="BotonCompraPrecios" onClick={() => handleClick()}>
        ¡QUIERO INSCRIBIRME YA!
      </button>
      <img className="img-boton-compra-precio" src="https://res.cloudinary.com/dgcn9sprj/image/upload/v1679294660/Product%20pages/otras%20img/precios/4_g5haf7.jpg" alt="" />
      <img className='img-garantia' src={productDetailInfo ? productDetailInfo[0][0].garantiaImg : ""} alt="" />
    </div>
  )
}
