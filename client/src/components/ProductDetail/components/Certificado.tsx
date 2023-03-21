import { useSelector } from 'react-redux'
import '../../../scss/components/ProductDetail/components/Certificado.scss'

export default function Certificado() {

  const productDetailInfo = useSelector((state: any) => state.productDetail.beMaster)

  return (
    <div className='div-certificado'>
      <h1 className='h1'>CERTIFICACIÓN</h1>
      <div className='div-contenido'>
        <img src={productDetailInfo? productDetailInfo[0][0].certificado : ""} alt="certificado" className='img-certificado'/>
        <p className='texto-certificado'>
        Si has pensado siempre en estudiar Gastronomía o adentrarte en el mundo gastronómico, sea por hobby, por alimentarte mejor o porque quieres desarrollar un emprendimiento, este curso te va a dar una base sólida para que comiences hoy mismo este camino.
        <br />
        <br />
        <strong>¡No dejes tus sueños para después. Accede hoy y empecemos juntos este viaje!</strong>
        </p>
      </div>
    </div>
  )
}
