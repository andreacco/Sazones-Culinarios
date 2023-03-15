import '../../../scss/components/ProductDetail/components/Preparaciones.scss'
import i1 from '../../../Images/i1.png'
import i2 from '../../../Images/i2.jpg'
import i3 from '../../../Images/i3.jpg'
import i4 from '../../../Images/i4.jpg'
import i5 from '../../../Images/i5.png'
import i6 from '../../../Images/i6.png'

export default function Preparaciones() {


  const preparaciones = [i5, i1, i6, i3, i2, i4]

  return (
    <div className='div-preparaciones'>
      <h1>PREPARACIONES DE ESTE CURSO</h1>
      <div className='preparaciones-grid'>
        {preparaciones?.map((i: any) => {
          return(
            <div className='preparaciones-card'>
              <img src={i} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
