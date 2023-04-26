import { useEffect, useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useGoUpMalla from '../../../customHooks/GoUpMalla'
import '../../../scss/components/ProductDetail/components/Malla.scss'

export default function Malla() {

    const productDetailInfo = useSelector((state: any) => state.productDetail.beMaster)
    const { name } = useParams()
    
    const [active, setActive] = useState<any>({})

    var numi

    name === 'GastronomíaInternacionalOnline:7cursosincluidos' ?
    numi = 2500 :
    name === 'DiplomadoOnlineenGastronomíaInternacional' ?
    numi = 2800 : 
    name === 'DiplomadoOnlineenCocinaInternacional' ?
    numi = 3050 : 
    name === 'DiplomadoOnlinedeReposteríayPastelería' ?
    numi = 2550 : 
    name === 'PastelesconDiseñoInterno' ?
    numi = 2450 : 
    name === 'AprendeCocinaVegana' ?
    numi = 2350 : 
    name === 'BaristaPrincipiante' ?
    numi = 2250 : 
    name === 'BartenderparaPrincpiantes' ?
    numi = 2220 : 
    name === 'ChocofresasIrresistibles' ?
    numi = 2180 : 
    name === 'CocinaMexicana' ?
    numi = 2440 : 
    name === 'CursoChocolateríaOnline' ?
    numi = 2680 : 
    name === 'CursoCocinaÁrabeOnline' ?
    numi = 2920 : 
    name === 'CursoCocinaBrasileraOnline' ?
    numi = 2720 : 
    name === 'CursoCocinaCoreanaOnline' ?
    numi = 2720 : 
    name === 'CursoCocinaFrancesaOnline' ?
    numi = 2780 : 
    name === 'CursoCocinaIndiaOnline' ?
    numi = 3040 : 
    name === 'CursoCocinaMexicanaOnline' ?
    numi = 2780 : 
    name === 'CursoCocinaNikkeiOnline' ?
    numi = 2850 : 
    name === 'CursoCocteleríaenCasa' ?
    numi = 2330 : 
    name === 'CervezaArtesanalCasera' ?
    numi = 2440 : 
    ""

    
    const upActive = useGoUpMalla(numi)
    
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
