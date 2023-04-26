import '../../../scss/components/ProductDetail/components/BotonCompra.scss'

export default function BotonCompra( link : any ) {
  
      const handleClick = () => {
        window.open(link.link, '_blank')
    }

  return (
    <div className='div-BotonCompra'>
      <button className="BotonCompra" onClick={() => handleClick()}>
        ¡YA ME DECIDÍ, QUIERO COMPRAR EL CURSO!
      </button>
      <img className="img-boton-compra" src="https://res.cloudinary.com/dgcn9sprj/image/upload/v1679295001/Product%20pages/otras%20img/precios/roj_tfg9x0.png" alt="" />
    </div>
  )
}
