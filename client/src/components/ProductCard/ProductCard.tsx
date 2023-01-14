import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
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
            {productsArr?.map((p: any) => {
                return (
                    <div className="card-container"  key={p._id}>
                        <div className={`card ${p.name.length > 39 ? 
                                                            p.name.slice(22,25) : 
                                                            p.name.length === 35 ?
                                                            p.name.split(",")[0] :
                                                            p.name.split(" ")[0]}`}>
                            <div className="img-box">
                                <img src={p.cover_image} alt="cover-img" className="imagen"/>
                            </div>
                            <div className="card-details">
                                <p className="text-title">{p.name}</p>
                                <p className="text-body">{(p.description).substring(0,90)}...</p>
                            </div>
                            <button className="card-button">Haz click para más información</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

                    {/* <div key={p._id} className="card">
                        <div className="header">
                            <div className="img-box">
                                <img src={p.cover_image} alt="cover-img" height={200}/>
                            </div>
                            <h1 className="title">{p.name}</h1>
                        </div>

                        <div className="content">
                            <p>
                                {(p.description).substring(0,90)}...
                            </p>
                            <button className="boton btn-link">
                                <span>Más Información</span>
                            </button>  
                        </div>
                    </div> */}

export default ProductCard