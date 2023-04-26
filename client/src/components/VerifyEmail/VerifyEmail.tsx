import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { verifyUser } from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import '../../scss/components/VerifyEmail.scss'
import changePageTitle from '../../customHooks/ChangeTitle'

const VerifyEmail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
      changePageTitle("Gracias por verificar tu e-mail! - Sazones Culinarios")

  console.log(id);

  useEffect(() => {
    dispatch(verifyUser(id));
  }, []);

  return (
    <div className="container-verify-email">
      <div className="container-verify-email-content">
        <div className="container-interior">
          <h1>¡Bienvenido a Sazones Culinarios!</h1>
          <p>¡Muchísimas gracias por tu interés en sazones culinarios 
            <br />
            y por verificar tu correo!
          </p>
            <p>
              ¡Ahora que estás verificado empezarás a recibir 
              <br />
              nuestros correos, según tus intereses!
            </p>
          <div className='div-boton'>
            <Link to="/">
              <button className="boton" >
                <span className='span-boton'>¡Quiero disfrutar del contenido!</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail;