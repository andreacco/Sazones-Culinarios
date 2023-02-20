import { Box, Typography, Card, CardContent,/* CardCover, */ Container } from '@mui/material'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import img1 from '../../../Images/coffee-1.jpg'
import img2 from '../../../Images/coffee-2.jpg'
import img3 from '../../../Images/coffee-3.jpg'
import '../../../scss/components/ProductDetail/components/Title.scss'

export default function Title() {
    const product = useSelector((state: any) => state.productDetail)
    const { name } = useParams()

    return (
        <Box className='title-product-detail-container'
            component="div"
            sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            padding: 0
            }}
        >
            <Box
            className="img-fondo"
            component="img"
            sx={{ height: 120 }}
            alt="img-fondo"
            src="https://res.cloudinary.com/dgcn9sprj/image/upload/v1674780874/Fondos%20Banner/barista_xgy4kw.jpg"
            />
            <Box
                className="content-title-container"
                component="div"
            >
                <Typography className={`title-product-detail ${name}`} variant='h1'>
                    {product.name}
                </Typography>
                <Box className='video-container'
                    component="div"
                    sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    padding: 0
                    }}
                >
                    <iframe className='video'/* width="560" height="315" */ src="https://www.youtube.com/embed/a1XW2yO_sYA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
                </Box>
            </Box>
        </Box>
    )
}
