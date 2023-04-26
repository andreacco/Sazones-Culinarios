import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Timer from './Timer'
import '../../../scss/components/ProductDetail/components/NavBar.scss'

export default function NavBar( link : any ) {
    const [cupos, setCupos] = useState<Number>(1)
    const { name } = useParams()
    const cuposExistentes = window.localStorage.getItem(`cupos${name}`)
    
    const cuposRandom = () => {
        const min: any = 2
        const max: any = 10
        const cantidad: any = Math.floor(Math.random() * (max - min + 1) + min)
        if(!cuposExistentes?.length){
            setCupos(cantidad)
            window.localStorage.setItem(`cupos${name}`, cantidad)
        } else {
            setCupos(Number(cuposExistentes))
        }
    }

    const handleClick = () => {
        window.open(link.link, '_blank')
    }

    useEffect(() => {
        cuposRandom()
    }, [])
    
    return (
        <div className='navBar-product-detail-container'>
            <div className='navBar-product-detail'>
                <p className='titulo-product-detail'>
                    {`¡ÚLTIMOS ${cupos} CUPOS SOLO POR HOY!`}
                </p>
                <Button variant="contained" className='boton-product-detail' onClick={() => handleClick()}>
                    LO QUIERO COMPRAR YA MISMO  
                </Button>
            </div>
            <Timer/>
        </div>
    )
}
