
// Aqui solo va a ir:
// Barra de navegacion con el logo, Inicio, Nuestros Productos y una searchBar
// Un banner con imagenes que inciten a la compra
// Un formulario de suscripcion a nuestra lista de correos electronicos
// los cursos mas vendidos
// Nuestras redes Sociales y un pequeño vistazo de ellas 
// Un footer que contenga links importanes o datos interesantes y ademas la seccion del igreso para el admin

import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getAllCategories, subcribeUser } from '../../redux/actions/index'
import TelefonoInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/bootstrap.css'
import 'react-phone-input-2/lib/material.css'

const Home = () => {
    const dispatch: any = useDispatch()
    const [input, setInput] = useState<any>({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        interests: [],
    })
    const allCategories = useSelector((state: any) => state.categories)

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])
    

    const handleSubmit = (e: any) => {
        e.preventDefault()
        dispatch(subcribeUser(input))
        setInput({
            name: "",
            lastName: "",
            email: "",
            phone: "",
            interests: [],
        })
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input);
        
    }
    
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
    
    return (
        <div>
            <div>
                <p>Banner</p>
            </div>
            <div>
                <h2>Suscríbete a nuestro newsletter!</h2>
                <p>Entérate de las novedades, promociones y nuevos productos que tenemos para ti!</p>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="input-group">
                    {/* <input placeholder="Breed Name:" type="text" name="name" value={input.name} onChange={(e) => handleChange(e)} />
                        {error.name && (<p className="error--p">{error.name}</p>)} */}
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name" value={input.name} onChange={(e) => handleChange(e)}/>
                        <label htmlFor="lastName">Apellido</label>
                        <input type="text" name="lastName" value={input.lastName} onChange={(e) => handleChange(e)}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="text" name="email" value={input.email} onChange={(e) => handleChange(e)}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="phoneNumber">Teléfono</label>
                        <TelefonoInput
                        country={'us'}
                        value={input.phone}
                        onChange={(phone: string) => setInput({ phone })}
                        />
                    </div>
                    {/* <div className="input-group">
                        <label htmlFor="interests">Áreas de interés</label>
                        <select name="interests" value={input.interests} onChange={(e) => handleSelect(e)}>
                            <option>Selecciona tus intereses</option>
                            {allCategories.map((c: any) => {
                                return <option value={c}>{c}</option>
                            })}
                        </select>
                    </div>
                    <div className="categories">
                        {input.interests.map((c: any) =>
                            <div className='category'>
                                <h5>{c}</h5>
                                <button className="delete" onClick={() => handleDelete(c)}>X</button>
                            </div>
                        )}
                    </div> */}
                    <button onClick={(e) => handleSubmit(e)}>Suscribirse</button>
                </form>
            </div>
            {/* Suscripción realizada con éxito!

Gracias por tu interés en Sazones culinarios! Te hemos enviado un email de verificación al correo electrónico que ingresaste, por favor verifícalo cuanto antes para que empieces a recibir nuestros correos!
boton que dice: Empezar desde cero */}
            <div>
                <h2>Los más vendidos</h2>
            </div>
            <div>
                <h2>RRSS</h2>
            </div>
        </div>
    )
}

export default Home