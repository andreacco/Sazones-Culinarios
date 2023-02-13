import { useParams } from 'react-router-dom'
import '../../scss/components/ProductDetail.scss'

export default function ProductDetail() {
    const { name } = useParams()

    return (
        <div className='product-detail-container'>
            <h1>{name}</h1>
        </div>
    )
}
