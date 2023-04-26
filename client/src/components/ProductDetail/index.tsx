import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import Footer from './components/Footer'
import Profesores from './components/ProfesCard'
import changePageTitle from '../../customHooks/ChangeTitle'

export default function ProductDetail() {
    const dispatch: any = useDispatch()
    const { id } = useParams()
    
    useEffect(() => {
        dispatch(getProductDetail(id));
        return () => {
        dispatch(reset());
        };
    }, [id, dispatch]);

    const productDetailInfo = useSelector((state: any) => state.productDetail.beMaster)
    const productInfor = useSelector((state: any) => state.productDetail)
    changePageTitle(`${productInfor.name} - Sazones Culinarios`)
    const linkCompra = productInfor.links ? productInfor.links[0].materialDivulgacion.checkoutFull : ""

    return (
        <div className='product-detail-container'>
            <NavBar link = {linkCompra}/>
            <Title/>
            <Separator/>
            <Description/>
            <Beneficios/>
            <BlobSeparatorOpen/>
            <BotonCompra link = {linkCompra}/>
            <Preparaciones/>
            <PreguntasFrecuentes/>
            <BannerCompra link = {linkCompra}/>
            <Certificado/>
            {productDetailInfo ? 
                productDetailInfo[0][0].profesores ? 
                            <div className='div-div-profesores'>
                                <h1>CONOCE A TUS PROFESORES</h1>
                                <Profesores/> 
                            </div>
                            :
                            ""
                            : ""
                            }
            <Opiniones/>
            {/* <Comunidad/> */}
            <BlobSeparatorClose/>
            <Precios link = {linkCompra}/>
            <Footer/>
        </div>
    )
}
