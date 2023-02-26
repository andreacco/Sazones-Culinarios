import { useEffect, useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { BsCircleFill } from 'react-icons/bs'
import '../../../scss/components/ProductDetail/components/Malla.scss'

export default function Malla() {
    const info = {
        modulos: [
            {
                id: "mm0",
                nombre: "Módulo 1: Introducción",
                lecciones: ["Lección 1: Bienvenida.", "Lección 2: ¿Quién soy?.", "Lección 3: Grupo privado.", "Lección 4: Qué aprenderás.", "Lección 5: Cómo sacarle el mejor provecho a este curso."],
            },
            {
                id: "mm1",
                nombre: "Módulo 2: Historia del café.",
                lecciones: ["Lección 1: Historia del café.", "Lección 2: Especies y variedades de café.", "Lección 3: Beneficios del café.", "Lección 4: Café comercial vs. café de especialidad."],
            },
            {
                id: "mm2",
                nombre: "Módulo 3: Herramientas del barista y el espresso perfecto.",
                lecciones: ["Lección 1: Máquina espresso y sus partes.", "Lección 2: Chemex, french press, aeropress, moka y vietnamita.", "Lección 3: Espresso Perfecto."],
            },
            {
                id: "mm3",
                nombre: "Módulo 4: Arte latte.",
                lecciones: ["Lección 1: Emulsificación o texturización de la leche.", "Lección 2: Técnica Etching y práctica de diseños.", "Lección 3: Técnica Etching y práctica de diseños."],
            },
            {
                id: "mm4",
                nombre: "Módulo 5: Cafetería italiana caliente.",
                lecciones: ["Lección 1: Café americano.", "Lección 2: Latte.", "Lección 3: Mocaccino.", "Lección 4: Café vienés.", "Lección 5: Café Bombón."],
            },
            {
                id: "mm5",
                nombre: "Módulo 6: Cafetería italiana fría.",
                lecciones: ["Lección 1: Shakerato.", "Lección 2: Latte frío.", "Lección 3: Frapuccino.", "Lección 4: Affogato."],
            },
            {
                id: "mm6",
                nombre: "Módulo 7: Métodos de elaboración.",
                lecciones: ["Lección 1: French press.", "Lección 2: Chemex.", "Lección 3: Aeropress.", "Lección 4: Vietnamita."],
            },
            {
                id: "mm7",
                nombre: "Módulo 8: Despedida.",
                lecciones: ["Lección 1: Despedida."],
            }
        ]
    }
    
    const [active, setActive] = useState<any>({})
    
    
    const handleCantidad = (string: any) => {
        const num = string.split(":").shift().split(" ").pop()
        const nume = num - 1
        const val = `mm${nume}`
        return val
    }
    
    const handleActive = (cantidady: any) => {
        var mms: any = []
        for (let i = 0; i < info.modulos.length; i++) {
            let cantidad = `mm${i}`
            active[cantidad] = false
            mms.push(cantidad)
        }
        mms.map((m:any) => {
            setActive({
                    [m]: false,
                }
            )
        })
        setActive({
                ...active,
                [cantidady] : true
            }
        )
    }
    

    return (
        <div className="acordeon">
            {/* <div className="bloque"> */}
                {info.modulos.map((m: any) => {
                    return (
                        <div key={m.id} className={active[m.id] === true ?  "div-each-bloque activo" : "div-each-bloque"}>
                            <div className='div-h2' onClick={() => handleActive(handleCantidad(m.nombre))}>
                                <h2 className="h2-mm">{m.nombre}</h2>
                                <AiOutlineDown/>
                            </div>
                            {m.lecciones.map((l: any) => {
                                return (
                                    // <div className='div-contenido'>
                                    //     <BsCircleFill/>
                                        <p className="contenido" key={l}>{l}</p>
                                    // </div>
                                )
                            })}
                        </div>
                    )
                })}
            {/* </div> */}
        </div>
    )
}
