import { useSelector } from 'react-redux'
import '../../../scss/components/ProductDetail/components/Separator.scss'

export default function Separator() {
    const productDetailInfo = useSelector((state: any) => state.productDetail.beMaster)
    

    return (
        <div className='separator-container'>
            <p className='separator-text'>
                {productDetailInfo ? productDetailInfo[0][0].separator : ""}
            </p>
        </div>
    )
}
