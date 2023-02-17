import { Container, Typography, Button, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../../scss/components/ProductDetail/components/NavBar.scss'

export default function NavBar() {
    const [cupos, setCupos] = useState<Number>(1)
    const { name } = useParams()
    console.log(name)
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

    useEffect(() => {
        cuposRandom()
    }, [])

    return (
        <Box className='navBar-product-detail-container'
            component="div"
            sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            }}
        >
            <Container maxWidth="md" className='navBar-product-detail'>
                <Typography variant="body1" className='titulo-product-detail'>
                    {`¡ÚLTIMOS ${cupos} CUPOS SOLO POR HOY!`}
                </Typography>
                <Button variant="contained" className='boton-product-detail'>
                    LO QUIERO COMPRAR YA MISMO
                </Button>
            </Container>
        </Box>
    )
}
