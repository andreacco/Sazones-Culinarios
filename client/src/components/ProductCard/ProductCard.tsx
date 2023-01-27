import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../redux/actions"
import '../../scss/components/Products.scss'

function ProductCard() {
    const dispatch: any = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    const productsArr = useSelector((state: any) => state.products)

    return (
        <div className="products-container">
            <div className="all-products">
                {productsArr?.map((p: any) => {
                    return (
                        <div className="card-container"  key={p._id}>
                            <div className={`card ${p?.name.length > 39 ? 
                                                                p?.name.slice(22,25) : 
                                                                p?.name.split(" ")[0] === "Curso" ?
                                                                p?.name.slice(13, 16) :
                                                                p?.name.split(" ")[0]}`}>
                                <div className="img-box">
                                    <img src={p?.cover_image} alt="cover-img" className="imagen"/>
                                </div>
                                <div className="card-details">
                                    <p className="text-title">{p?.name}</p>
                                    <p className="text-body">{(p?.description).substring(0,90)}...</p>
                                </div>
                                <button className="card-button">Haz click para más información</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductCard