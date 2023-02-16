import { Container, Typography, Button, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import '../../../scss/components/ProductDetail/components/NavBar.scss'

export default function NavBar() {
    const [cupos, setCupos] = useState<Number>(1)

    const cuposRandom = () => { // min and max included 
        const min: any = 2
        const max: any = 10
        const cantidad = Math.floor(Math.random() * (max - min + 1) + min)
        setCupos(cantidad)
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
