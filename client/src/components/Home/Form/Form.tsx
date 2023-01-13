import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getAllCategories, subcribeUser, setTitle } from '../../../redux/actions/index'
import '../../../scss/components/Form.scss'

const Form = () => {
    const dispatch: any = useDispatch()
    const [input, setInput] = useState<any>({
        name: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        interests: [],
    })
    const [open, setOpen] = useState<boolean>(false)

    const allCategories: any = useSelector((state: any) => state.categories)

    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(setTitle())
    }, [dispatch])
    

    const handleSubmit = (e: any) => {
        e.preventDefault()
        dispatch(subcribeUser(input))
        setInput({
            name: "",
            lastname: "",
            email: "",
            phoneNumber: "",
            interests: [],
        })
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSelect = (e: any) => {
        if(!input.interests.includes(e.target.value)){
            setInput({
                ...input,
                interests: [...input.interests, e.target.value]
            }) 
        }
        console.log(input);
    }

    const handleDelete = (c: any) => {
        setInput({
            ...input,
            interests: input.interests.filter((i: any) => i !== c)
        })
    }

    const handleOpen = () => {
        setOpen(!open)
    }
    
    return (
        <div className="div-form">
            <div className="form-container">
                <div className="titulo-form">
                    <h2>Suscríbete a nuestro newsletter!</h2>
                    <p>Entérate de las novedades, promociones y nuevos productos que tenemos para ti!</p>
                </div>
                <div className="form">
                    <form className="registration" onSubmit={(e) => handleSubmit(e)}>
                        <div className="nombres">
                            <div className="input-groupy">
                                <input required type="text" name="name" autoComplete="new-password" className="input" value={input.name} onChange={(e) => handleChange(e)}/>
                                <label className="user-label">Tu Nombre</label>
                            </div>
                            <div className="input-groupy">
                                <input required type="text" name="lastname" autoComplete="new-password" className="input" value={input.lastname} onChange={(e) => handleChange(e)}/>
                                <label className="user-label">Tu Apellido</label>
                            </div>
                        </div>
                        <div className="inputs-abajo">
                            <div className="input-groupy">
                                <input required type="text" name="email" autoComplete="new-password" className="input" value={input.email} onChange={(e) => handleChange(e)}/>
                                <label className="user-label">Tu mejor email</label>
                            </div>
                        </div>
                        <div className="inputs-abajo">
                            <div className="input-groupy">
                                <input required type="text" name="phoneNumber" autoComplete="new-password" className="input" value={input.phoneNumber} onChange={(e) => handleChange(e)}/>
                                <label className="user-label">Tu número de teléfono</label>
                            </div>
                        </div>
                        <div className="inputs-abajo">
                            <div className="input-groupy">
                                <select name="interests" value={input.interests} onChange={(e) => handleSelect(e)} className="input">
                                    <option>Selecciona tus intereses</option>
                                    {allCategories.map((c: any) => {
                                        return <option value={c}>{c}</option>
                                    })}
                                </select>
                                <label className="user-label">Tus áreas de interés</label>
                            </div>
                        </div>



                        {/* <div className="inputs-abajo">
                            <div className={open == false ? "closey input-groupy" : "openy input-groupy"}>
                                <div className="select-input" onClick={() => handleOpen()}>
                                    <div className={open == false ? "close input" : "open input"}>
                                        <ul>
                                            {allCategories.map((c: any) => {
                                                return <li className="opciones" value={c} onClick={(e) => handleSelect(e)}>{c}</li>
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <label className="user-label-i">Tus áreas de interés</label>
                            </div>
                        </div> */}



                        {/* <div className="input-group">
                            <span>Teléfono</span>
                            <input placeholder="Ingresa tu numero de  teléfono" type="number" name="phoneNumber" value={input.phoneNumber} onChange={(e) => handleChange(e)} required/>
                        </div> */}
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
                {/* Suscripción realizada con éxito!
                Gracias por tu interés en Sazones culinarios! Te hemos enviado un email de verificación al correo electrónico que ingresaste, por favor verifícalo cuanto antes para que empieces a recibir nuestros correos!
                boton que dice: Empezar desde cero */}
            </div>
        </div>
    )
}

export default Form