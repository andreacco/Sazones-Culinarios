import { Box, Typography, Card, CardContent,/* CardCover, */ Container } from '@mui/material'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import img1 from '../../../Images/gif.jpg'
import img2 from '../../../Images/gif2.jpg'
import img3 from '../../../Images/gif3.jpg'
import img5 from '../../../Images/gif5.jpg'
import img6 from '../../../Images/gif6.png'
import img7 from '../../../Images/gif7.jpg'
import img8 from '../../../Images/gif8.jpg'
import '../../../scss/components/ProductDetail/components/Title.scss'

export default function Title() {
    const product = useSelector((state: any) => state.productDetail)
    const { name } = useParams()
    

    return (
        <div className='title-product-detail-container'>
            <div className='image-div'>
                <img className={`img-fondo ${name === "GastronomíaInternacionalOnline:7cursosincluidos"? "GastronomíaInternacionalOnline7cursosincluidosimgfondo": `${name}fondo`}`}
                    alt="img-fondo"
                    // src="https://i.pinimg.com/564x/42/1d/9c/421d9c0b41d0b82e2d7fb82f361e0d66.jpg"
                    // src={img3}
                    // src='https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    // src="https://images.pexels.com/photos/4571115/pexels-photo-4571115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    // src={img6}
                    // src={img7}
                    // src="https://res.cloudinary.com/dgcn9sprj/image/upload/v1674780874/Fondos%20Banner/barista_xgy4kw.jpg"
                    // src={img8}
                    src='https://i.pinimg.com/originals/c9/e9/0a/c9e90a3295ddde6639f46e4b0dc06fd5.jpg'
                    // src='https://images.pexels.com/photos/8448320/pexels-photo-8448320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />
                <h1 className={`title-product-detail ${name === "GastronomíaInternacionalOnline:7cursosincluidos"? "GastronomíaInternacionalOnline7cursosincluidos": name}`}>
                {product.name}
                </h1>
                <iframe className='video' /* width="560" height="315"  */
                        src="https://www.youtube.com/embed/a1XW2yO_sYA"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                />

                {/* PARA EL FONDO NEGRO */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#080808" fill-opacity="1" d="M0,192L60,213.3C120,235,240,277,360,272C480,267,600,213,720,186.7C840,160,960,160,1080,176C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
        </div>
    )
}
