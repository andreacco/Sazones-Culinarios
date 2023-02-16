import loaderGif from '../../Images/loaderGif.gif'
import img4 from '../../Images/4.jpg'
import '../../scss/components/Loader.scss'

export default function Loader() {
  return (
  <div className='loader-container'>
    <h1>Cocinando...</h1>
    <img src={img4} className="fondo" />
    <img src={loaderGif} className='loader-gif'/>
  </div>
  )
}
