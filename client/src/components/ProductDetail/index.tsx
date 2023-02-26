import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetail, reset } from '../../redux/actions'
import NavBar from './components/NavBar'
import Title from './components/Title'
import Separator from './components/Separator'
import Description from './components/Description'
import '../../scss/components/ProductDetail/ProductDetail.scss'

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
            {/* <Separator texto={texto2} /> */}
        </div>
    )
}
