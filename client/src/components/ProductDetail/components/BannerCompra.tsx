import '../../../scss/components/ProductDetail/components/BannerCompra.scss'

export default function BannerCompra() {
  return (
    <div className='div-bannerCompra'>
      <div className='div-img-banner'>
        <img className="img-fondo-banner"
          alt="img-fondo-banner"
          src="https://res.cloudinary.com/dgcn9sprj/image/upload/v1674780874/Fondos%20Banner/barista_xgy4kw.jpg"
        />
      <div className='div-texts-banner'>
        <h3 className='h3'>¡Inicia ahora tu formación con nosotros!</h3>
        <h2 className='h2'>¿Estás listo para aumentar tus conocimientos y convertirte en un profesional de primera?</h2>
        <button className="BotonCompraBanner">
          COMPRAR AHORA
        </button>
      </div>
      </div>
    </div>
  )
}
