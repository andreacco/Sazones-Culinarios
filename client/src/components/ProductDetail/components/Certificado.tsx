import certificado from '../../../Images/certificado.jpg'
import '../../../scss/components/ProductDetail/components/Certificado.scss'

export default function Certificado() {
  return (
    <div className='div-certificado'>
      <h1 className='h1'>CERTIFICACIÓN</h1>
      <div className='div-contenido'>
        <img src={certificado} alt="certificado" className='img-certificado'/>
        <p className='texto-certificado'>{/* Somos cursosdecocina, una escuela con 5 años de experiencia capacitando a cientos de entusiastas alumnos que hoy cocinan junto a sus familias o han levantado respetados emprendimientos.
        <br />
        <br />
        Se parte de este movimiento y cumple el sueño de formarte como cocinero, pastelero o panadero con nuestros cursos en línea.
        <br />
        <br /> */}
        Si has pensado siempre en estudiar Gastronomía o adentrarte en el mundo gastronómico, sea por hobby, por alimentarte mejor o porque quieres desarrollar un emprendimiento, este curso te va a dar una base sólida para que comiences hoy mismo este camino.
        <br />
        <br />
        <strong>¡No dejes tus sueños para después. Accede hoy y empecemos juntos este viaje!</strong>
        </p>
      </div>
    </div>
  )
}
