import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getAllCategories, subcribeUser, setTitle, resetSub } from '../../../redux/actions/index'
import { validate } from './validate'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '../../../scss/components/Form.scss'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import es from 'react-phone-number-input/locale/es.json'

const Form = () => {
    const dispatch: any = useDispatch()
    const [input, setInput] = useState<any>({
        name: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        interests: [],
    })

    const [errors, setErrors] = useState<any>({
        name: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        interests: "",
    })

    console.log(errors, "ERROOOOORS FORM");

    const handlePhone = (value: any) => {
        setInput({
            ...input,
            phoneNumber: value
        })
        setErrors(
            validate({
                ...input,
            }, "phoneNumber", errors),
        )
    }

    const allCategories: any = useSelector((state: any) => state.categories)
    
    let subResponse: any = useSelector((state: any) => state.subscribeResponse)

    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(setTitle())
        handleSubscribed()
    }, [dispatch, subResponse])
    

    const handleSubmit = (e: any) => {
        ponerMayusculas()
        e.preventDefault()
        if (!input.name || !input.lastname || !input.email || !input.phoneNumber || !input.interests.length) {
            const MySwal = withReactContent(Swal)
            MySwal.fire({
                html: <div className="alert">
                        <h2 className='PopUpText'>
                            Debes llenar todos los campos requeridos!
                        </h2>
                    </div>,
                background: "#a60715",
                showConfirmButton: false,
                confirmButtonAriaLabel: 'Ok',
                timer: 2500,
                buttonsStyling: false,
                customClass: {
                confirmButton: 'confirmButton'
                }
            })
            setErrors(
                validate({
                    ...input,
                }, null, errors),
            )
        }
        else if (errors.name || errors.lastname || errors.email || errors.phoneNumber || errors.interests) {
            alert("Datos incorrectos")
        }

        else {
            dispatch(subcribeUser(input))
            setInput({
                name: "",
                lastname: "",
                email: "",
                phoneNumber: "",
                interests: [],
            })
            setErrors({
                name: "",
                lastname: "",
                email: "",
                phoneNumber: "",
                interests: [],
            })
        }
    }
    
    const handleChange = (e: any) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            }, e.target.name, errors)
        )
    }
    
    const handleSelect = (e: any) => {
        if(!input.interests.includes(e.target.value)){
            setInput({
                ...input,
                interests: [...input.interests, e.target.value]
            }) 
        }
        setErrors(
            validate({
                ...input,
                interests: e.target.value,
            }, "interests", errors)
        )
    }

    const handleDelete = (c: any) => {
        setInput({
            ...input,
            interests: input.interests.filter((i: any) => i !== c)
        })
    }
    
    const ponerMayusculas = () => {
        let nombre = input.name
        let apellido = input.lastname
        const mayusculaNombre = nombre.substring(0,1).toUpperCase();
        const minusculaNombre = nombre.substring(1).toLowerCase();
        const mayusculaApellido = apellido.substring(0,1).toUpperCase();
        const minusculaApellido = apellido.substring(1).toLowerCase();
        input.name = mayusculaNombre.concat(minusculaNombre);
        input.lastname = mayusculaApellido.concat(minusculaApellido);
    }

    const [clicked, setClicked] = useState<boolean>(false)

    const handleClicked = () => {
        setClicked(true)
    }
    
    const [subscribed, setSubscribed] = useState<boolean>(false)
    const [subscribeError, setSubscribeError] = useState<boolean>(false)
    const [alreadySubscribed, setAlreadySubscribed] = useState<boolean>(false)
    

    const handleSubscribed = () => {
        if (typeof subResponse === "object") {
            setSubscribeError(true)
            setAlreadySubscribed(false)
            setSubscribed(false)
        }
        if (typeof subResponse === "string" /* && subResponse.length */){
            if (subResponse === "Ya estás suscrito a nuestra lista de correos!") {
                setAlreadySubscribed(true)
                setSubscribeError(false)
                setSubscribed(false)
            }
            if (subResponse === "Usuario registrado correctamente!") {
                setSubscribed(true)
                setSubscribeError(false)
                setAlreadySubscribed(false)
            }
        }
    }

    const reset = () => {
        setInput({
            name: "",
            lastname: "",
            email: "",
            phoneNumber: "",
            interests: [],
        })
        dispatch(resetSub())
        setAlreadySubscribed(false)
        setSubscribeError(false)
        setSubscribed(false)
    }

    return (
        <div className="div-form">
            <div className={subscribed === true || subscribeError === true || alreadySubscribed === true ? "form-container suscrito": "form-container no-suscrito"} >
                <div className="titulo-form" >
                    <h2>Suscríbete a nuestro newsletter!</h2>
                    <p>Entérate de las novedades, promociones y nuevos productos que tenemos para ti!</p>
                </div>
                <div className="form" >
                    <form className="registration">
                        <div className="nombres">
                            <div className="input-groupy">
                                <input required type="text" name="name" autoComplete="new-password" className="input" value={input.name} onChange={(e) => handleChange(e)} />
                                <label className="user-label">Tu Nombre*</label>
                                <div className="errors">
                                    {errors.name.length > 1 && <p>{errors.name}</p>}
                                </div>
                            </div>
                            <div className="input-groupy">
                                <input required type="text" name="lastname" autoComplete="new-password" className="input" value={input.lastname} onChange={(e) => handleChange(e)}/>
                                <label className="user-label">Tu Apellido*</label>
                                <div className="errors">
                                    {errors.lastname.length > 1 && <p>{errors.lastname}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="inputs-abajo">
                            <div className="input-groupy">
                                <input required type="text" name="email" autoComplete="new-password" className="input" value={input.email} onChange={(e) => handleChange(e)}/>
                                <label className="user-label">Tu mejor email*</label>
                                <div className="errors">
                                    {errors.email.length > 1 && <p>{errors.email}</p>}
                                </div>
                            </div>
                        </div>

                        <div className="inputs-abajo">
                            <div className={clicked === true || input.phoneNumber.length > 1 ? "div-phone-input clicked" : "div-phone-input"} onClick={() => handleClicked()}>
                                <label className="user-label-phone">Tu número de teléfono*</label>
                                <PhoneInput
                                    international
                                    countryCallingCodeEditable={false}
                                    value={input.phoneNumber}
                                    onChange={(value) => handlePhone(value)}
                                    className="phone-input"
                                    autoComplete="new-password"
                                    onClick={() => handleClicked()} 
                                    labels={es} 
                                    maxlength="21"/>
                                    <div className="errors">
                                        {errors.phoneNumber.length > 1 && <p>{errors.phoneNumber}</p>}
                                    </div>
                            </div>
                        </div> 

                        
                        <div className="inputs-abajo">
                            <div className="input-groupy">
                                <select name="interests" value={input.interests} onChange={(e) => handleSelect(e)} className="input">
                                    <option>Selecciona tus áreas de interés</option>
                                    {allCategories.map((c: any) => {
                                        return <option key={c} value={c}>{c}</option>
                                    })}
                                </select>
                                <label className="user-label">Tus áreas de interés*</label>
                                <div className="errors">
                                    {errors.interests.length > 1 && <p>{errors.interests}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="categories">
                            {input.interests.map((c: any) =>
                                <div className='category'>
                                    <h5>{c}</h5>
                                    <div className="div-boton" >
                                        <button className="delete" onClick={() => handleDelete(c)}>
                                            <span>X</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="boton-div">
                            <button className="boton" onClick={(e) => handleSubmit(e)}>
                                <span>Suscribirse</span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className={subscribed === true && subscribeError === false && alreadySubscribed === false ? "suscrito" : "no-suscrito"}>
                    <div className="gracias">
                        <h2>Suscripción realizada con éxito!</h2>
                        <p>¡Gracias por tu interés en Sazones culinarios!
                            <br />
                            <br />
                            Te hemos enviado un email de verificación al correo electrónico que ingresaste, por favor verifícalo cuanto antes para que empieces a recibir nuestros correos!</p>
                        <div className="boton-div">
                            <button className="boton" onClick={() => reset()}>
                                <span>Empezar desde cero</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={subscribed === false && subscribeError === true && alreadySubscribed === false ? "suscrito" : "no-suscrito"}>
                    <div className="gracias">
                        <h2>Ups... Hubo un error en tu subscripción</h2>
                        <p>¡Gracias por tu interés en Sazones culinarios!
                            <br />
                            <br />
                            Lamentablemente hubo un error con tu subscripción, si lo deseas, puedes intentarlo nuevamente y si el problema persiste por favor, contáctanos!</p>
                        <div className="boton-div">
                            <button className="boton" onClick={() => reset()}>
                                <span>Intentar de nuevo</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={subscribed === false && subscribeError === false && alreadySubscribed === true ? "suscrito" : "no-suscrito"}>
                    <div className="gracias">
                        <h2>Hola de nuevo!</h2>
                        <p>¡Gracias por tu interés en Sazones culinarios!
                            <br />
                            <br />
                            ¡Parece que ya estás registrado con nosotros! Si crees que se trata de un error, por favor revisa los datos que ingresaste, de persistir el error, por favor contáctanos lo antes posible y te ayudaremos con mucho gusto!</p>
                        <div className="boton-div">
                            <button className="boton" onClick={() => reset()}>
                                <span>Intentar de nuevo</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form