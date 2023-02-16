import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../redux/actions'
import '../../scss/components/ProductDetail.scss'

export default function ProductDetail() {
    const dispatch: any = useDispatch()
    const { name, id } = useParams()
    console.log(id)
    
    useEffect(() => {
        dispatch(getProductDetail(id))
    })

    return (
        <div className='product-detail-container'>
            <h1>{name}</h1>
        </div>
    )
}
