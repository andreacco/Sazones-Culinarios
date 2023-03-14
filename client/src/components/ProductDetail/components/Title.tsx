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
        <div className='title-product-detail-container'>
            <div className='image-div'>
                <img className="img-fondo"
                    alt="img-fondo"
                    src="https://res.cloudinary.com/dgcn9sprj/image/upload/v1674780874/Fondos%20Banner/barista_xgy4kw.jpg"
                />
                <h1 className={`title-product-detail ${name}`}>
                {product.name}
                </h1>
                <iframe className='video' /* width="560" height="315"  */
                        src="https://www.youtube.com/embed/a1XW2yO_sYA"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                />

                {/* PARA EL FONDO NEGRO */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#080808" fill-opacity="1" d="M0,192L60,213.3C120,235,240,277,360,272C480,267,600,213,720,186.7C840,160,960,160,1080,176C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
            </div>
        </div>
    )
}
