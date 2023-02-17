import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetail, reset } from '../../redux/actions'
import NavBar from './components/NavBar'
import '../../scss/components/ProductDetail/ProductDetail.scss'
import Title from './components/Title'
import { useSelector } from 'react-redux'

export default function ProductDetail() {
    const dispatch: any = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getProductDetail(id));
        return () => {
          // willUnmount
          //limpiar el estado cuando se desmonte
        dispatch(reset());
        };
    }, [id, dispatch]);


    return (
        <div className='product-detail-container'>
            <NavBar/>
            <Title/>
        </div>
    )
}
