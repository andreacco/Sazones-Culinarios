import { useEffect, useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import useGoUpMalla from '../../../customHooks/GoUpMalla'
import '../../../scss/components/ProductDetail/components/Malla.scss'

export default function Malla() {

    const productDetailInfo = useSelector((state: any) => state.productDetail.beMaster)
    
    const [active, setActive] = useState<any>({})

    const upActive = useGoUpMalla()
    useEffect(() => {
        var mms: any = []
        productDetailInfo ? productDetailInfo[0][0].modulos.map((m: any) => {
            active[m.id] = false
            mms.push(m.id)
        }) : ""
    }, [])
    
    
    const handleCantidad = (string: any) => {
        let val
        productDetailInfo ? productDetailInfo[0][0].modulos.map((p:any) => {
            if (p.nombre === string) {
                console.log(p.id)
                const l = p.lecciones[0]
                val = p.id
            }
        }) : ""
        return val
    }
    
    const handleActive = (cantidady: any) => {
        console.log(cantidady, "cantidady");
        setActive({
                [cantidady] : !active[cantidady]
            }
        )
        upActive()
    }

    return (
        <div className="acordeon">
                {productDetailInfo ? productDetailInfo[0][0].modulos.map((m: any) => {
                    return (
                        <div key={m.id} className={active[m.id] === true ?  "div-each-bloque activo" : "div-each-bloque"}>
                            <div className='div-h2' onClick={() => handleActive(handleCantidad(m.nombre))}>
                                <h2 className="h2-mm">{m.nombre}</h2>
                                <AiOutlineDown/>
                            </div>
                            {m.lecciones.map((l: any) => {
                                return (
                                    <div className="contenido">
                                    {
                                        typeof l === "string" ? 
                                        <p className="contenidosnombrel" key={l}>{l}</p>
                                        :

                                        <p className="contenidosnombre" key={l.nombre}>{l.nombre}</p>
                                    }
                                    {
                                        l.contenido?.map((cc: any) => {
                                            return(
                                                <div className='divpes'>
                                                    <p className="contenidos">{cc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                                )
                            })}
                        </div>
                    )
                }) : ""}
        </div>
    )
}
