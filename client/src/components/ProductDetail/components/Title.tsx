import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import '../../../scss/components/ProductDetail/components/Title.scss'

export default function Title() {
    const product = useSelector((state: any) => state.productDetail)
    const productDetailInfo = useSelector((state: any) => state.productDetail.beMaster)
    const { name } = useParams()
    

    return (
        <div className='title-product-detail-container'>
            <div className='image-div'>
                <img className={`img-fondo ${name === "GastronomíaInternacionalOnline:7cursosincluidos"? "GastronomíaInternacionalOnline7cursosincluidosimgfondo": `${name}fondo`}`}
                    alt="img-fondo"
                    src={productDetailInfo? productDetailInfo[0][0].fondoTitulo : ""}
                />
                <h1 className={`title-product-detail ${name === "GastronomíaInternacionalOnline:7cursosincluidos"? "GastronomíaInternacionalOnline7cursosincluidos": name}`}>
                {product.name}
                </h1>
                <iframe className='video'
                        src={productDetailInfo? productDetailInfo[0][0].video : ""}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                />

                {/* PARA EL FONDO NEGRO */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#080808" fill-opacity="1" d="M0,192L60,213.3C120,235,240,277,360,272C480,267,600,213,720,186.7C840,160,960,160,1080,176C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
        </div>
    )
}
