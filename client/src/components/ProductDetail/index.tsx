import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetail, reset } from '../../redux/actions'
import NavBar from './components/NavBar'
import Title from './components/Title'
import Separator from './components/Separator'
import Description from './components/Description'
import '../../scss/components/ProductDetail/ProductDetail.scss'
import Beneficios from './components/Beneficios'
import BotonCompra from './components/BotonCompra'
import Preparaciones from './components/Preparaciones'
import PreguntasFrecuentes from './components/PreguntasFrecuentes'
import BannerCompra from './components/BannerCompra'
import Certificado from './components/Certificado'
import Opiniones from './components/Opiniones'
import Comunidad from './components/Comunidad'
import Precios from './components/Precios'
import BlobSeparatorOpen from './components/BlobSeparatorOpen'
import BlobSeparatorClose from './components/BlobSeparatorClose'

export default function ProductDetail() {
    const dispatch: any = useDispatch()
    const { id } = useParams()

    const textos: any = ["CURSO COMPLETO DE BARISTA PARA PRINCIPIANTES", "6 BENEFICIOS AL COMPRAR EL CURSO DE BARISTA"]
    const texto1: any = textos.shift()
    const texto2: any = textos.pop()
    
    useEffect(() => {
        dispatch(getProductDetail(id));
        return () => {
        dispatch(reset());
        };
    }, [id, dispatch]);


    return (
        <div className='product-detail-container'>
            <NavBar/>
            <Title/>
            <Separator texto={texto1} />
            <Description/>
            <Beneficios/>
            {/* <Separator texto={texto2} /> */}
            <BlobSeparatorOpen/>
            <BotonCompra/>
            <Preparaciones/>
            <PreguntasFrecuentes/>
            <BannerCompra/>
            <BlobSeparatorClose/>
            <Certificado/>
            <Opiniones/>
            <Comunidad/>
            <Precios/>
        </div>
    )
}
