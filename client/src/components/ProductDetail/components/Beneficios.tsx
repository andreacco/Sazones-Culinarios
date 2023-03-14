import expimg from '../../../Images/experiencia.png'
import accimg from '../../../Images/acceso.png'
import garimg from '../../../Images/garantia.png'
import ahoimg from '../../../Images/ahorro.png'
import cerimg from '../../../Images/certificado.png'
import pagimg from '../../../Images/pago.png'
import '../../../scss/components/ProductDetail/components/Beneficios.scss'

function Beneficios() {
    return (
        <div className='beneficios-div'>
            <h1>¡6 BENEFICIOS QUE OBTIENES AL COMPRAR EL CURSO!</h1>
            <div className='beneficios-grid'>
                <div className='Beneficio-card'>
                    <img className="img-benef" src={expimg} alt="logo-beneficio" />
                    <h3>Experiencia</h3>
                    <p>Te ofrecemos nuestros 5 años de experiencia capacitando a emprendedores y entusiastas. Todos nuestros profesores son titulados de carreras gastronómicas con amplia experiencia en hoteles y restaurantes. Ya hemos capacitado a más de 5.000 alumnos.</p>
                </div>
                <div className='Beneficio-card'>
                    <img className="img-benef" src={accimg} alt="logo-beneficio" />
                    <h3>Acceso Ilimitado</h3>
                    <p>Accede sin restricciones a todas las lecciones en forma permanente las veces que quieras y ve nuestros videos en alta definición a tu propio ritmo.</p>
                </div>
                <div className='Beneficio-card'>
                    <img className="img-benef" src={garimg} alt="logo-beneficio" />
                    <h3>Garantía</h3>
                    <p>Puedes estar seguro de tomar nuestro curso. Si luego de 7 días posteriores a la compra el curso no llena tus expectativas te devolveremos el 100% de tu dinero.</p>
                </div>
                <div className='Beneficio-card'>
                    <img className="img-benef" src={ahoimg} alt="logo-beneficio" />
                    <h3>Ahorro</h3>
                    <p>Aprende desde casa sin gastar tiempo en traslados o dinero en transporte. Por una pequeña cantidad de dinero menor a la de una mensualidad de cualquier instituto te daremos una capacitación sólida en Gastronomía.</p>
                </div>
                <div className='Beneficio-card'>
                    <img className="img-benef" src={cerimg} alt="logo-beneficio" />
                    <h3>Certificación</h3>
                    <p>Al finalizar nuestro curso obtendrás automáticamente un certificado que acreditará todo tu aprendizaje logrado. El certificado será enviado a tu correo en formato pdf descargable.</p>
                </div>
                <div className='Beneficio-card'>
                    <img className="img-benef" src={pagimg} alt="logo-beneficio" />
                    <h3>Pago Único</h3>
                    <p>Con un solo pago y sin mensualidades o matrículas ni cuotas de incorporación podrás tener acceso a todo nuestro curso, aprender y capacitarte desde la comodidad de tu hogar.</p>
                </div>
            </div>
        </div>
    )
}

export default Beneficios;