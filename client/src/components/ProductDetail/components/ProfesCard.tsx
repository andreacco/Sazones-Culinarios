import { useSelector } from "react-redux"
import '../../../scss/components/ProductDetail/components/ProfesCard.scss'

function Profesores() {

    const productDetailInfo = useSelector((state: any) => state.productDetail.beMaster)

    const productsReturn = (p: any) => {
            return (
                <div className="profes-card"  key={p._id}>
                    <div className={`card ${p?.nombre}`}>
                        <div className="img-profes">
                            <img src={p?.imagen} alt="cover-img" className="imagen-profes"/>
                        </div>
                        <div className="profes-detalles-div">
                            <p className="profes-nombre">{p?.nombre}</p>
                            <p className="profes-descripcion">{p?.descripcion}</p>
                        </div>
                    </div>
                </div>
            )
    }

    return (
        <div className="profes-container">
            <div className="profes-div">
                {
                    productDetailInfo[0][0].profesores.map((p: any) => {
                        return(
                            productsReturn(p)
                        )
                    }) 
                }
            </div>
        </div>
    )
}

export default Profesores