import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getAllProducts } from "../../redux/actions"

function ProductCard() {
    const dispatch: any = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    const productsArr = useSelector((state: any) => state.products)
    
    return (
        <div>
            {productsArr?.map((p: any) => {
                return (
                    <div key={p._id}>
                        <img src={p.cover_image} alt="cover-img" height={200}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductCard