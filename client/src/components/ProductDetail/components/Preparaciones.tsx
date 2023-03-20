import { useSelector } from 'react-redux'
import '../../../scss/components/ProductDetail/components/Preparaciones.scss'

export default function Preparaciones() {

  const productDetailInfo = useSelector((state: any) => state.productDetail.beMaster)

  return (
    <div className='div-preparaciones'>
      <h1>PREPARACIONES DE ESTE CURSO</h1>
      <div className='preparaciones-grid'>
        {productDetailInfo ? productDetailInfo[0][0].preparaciones?.map((i: any) => {
          return(
            <div className='preparaciones-card'>
              <img src={i} alt="" />
            </div>
          )
        }) : ""}
      </div>
    </div>
  )
}
