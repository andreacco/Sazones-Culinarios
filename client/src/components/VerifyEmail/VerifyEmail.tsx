import { useEffect } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { verifyUser } from "../../redux/actions/index";
import { useDispatch } from "react-redux";

const VerifyEmail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  console.log(id);
  
  useEffect(() => {
    dispatch(verifyUser(id));
  }, []);

  return (
    <div className="container_verificate_account">
      <div className="container_verificate_account_content">
        <div>
          <BsFillCheckCircleFill className="icon_verificate" />
          <h1>WELCOME !</h1>
          <p>Thank you for verifying your account; enjoy new features. </p>
          <button className="button_forms_send_admin_interface" onClick={()=>{
            navigate("/")
          }}>
            Enjoy MANGA COFFEE
          </button>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail;