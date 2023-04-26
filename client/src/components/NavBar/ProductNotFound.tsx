import notFoundGif from '../../Images/notFoundGif.gif'
import '../../scss/components/ProductNotFound.scss'
import img4 from '../../Images/4.jpg'
import changePageTitle from '../../customHooks/ChangeTitle'

export default function ProductNotFound() {
  changePageTitle("Ups... ¡Seguimos cocinando este contenido para ti! - Sazones Culinarios")
  
  return (
    <div className='not-found-container'>
      <img src={img4} className="fondo" />
        <h1>¡Oh no...!</h1>
        <img src={notFoundGif} className='not-found-gif'/>
        <h2>¡Seguimos cocinando este contenido para ti!</h2>
    </div>
  )
}
