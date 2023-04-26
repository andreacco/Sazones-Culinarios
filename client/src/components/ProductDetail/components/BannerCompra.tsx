import { useSelector } from 'react-redux'
import '../../../scss/components/ProductDetail/components/BannerCompra.scss'

export default function BannerCompra( link : any ) {

  const productDetailInfo = useSelector((state: any) => state.productDetail.beMaster)

      const handleClick = () => {
        window.open(link.link, '_blank')
    }

  return (
    <div className='div-bannerCompra'>
      <div className='div-img-banner'>
        <img className="img-fondo-banner"
          alt="img-fondo-banner"
          src={productDetailInfo? productDetailInfo[0][0].fondoTitulo : ""}
        />
      <div className='div-texts-banner'>
        <h3 className='h3'>¡Inicia ahora tu formación con nosotros!</h3>
        <h2 className='h2'>¿Estás listo para aumentar tus conocimientos y convertirte en un profesional de primera?</h2>
        <button className="BotonCompraBanner" onClick={() => handleClick()}>
          COMPRAR AHORA
        </button>
      </div>
      </div>
    </div>
  )
}
