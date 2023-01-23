import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBestSellers } from '../../../redux/actions'
import '../../../scss/components/BestSellers.scss'

export default function BestSellers() {

  const dispatch: any = useDispatch()

  useEffect(() => {
      dispatch(getBestSellers())
  }, [dispatch])
  

  const bestSellers = useSelector((state: any) => state.bestSellers)
  // const bestSellers = products.slice(0, 3)
  
  return (
    <div className='BestSellers-container'>
      <h2>BestSellers</h2>
      <div className='cards-container'>
        {bestSellers.map((p: any) => p.map((best: any) => {
          return (
            <div className="container">
                <div className="card_box">
                    <span className={`cinta-tarjeta ${best.name.length > 39 ? 
                                                            best.name.slice(22,25) : 
                                                            best.name.split(" ")[0] === "Curso" ?
                                                            best.name.slice(13, 16) :
                                                            best.name.split(" ")[0]}`}></span>
                    <div className='content'>
                      <img src={best.name.split(" ") === "Gastronomía" ? "" : ""} alt="" className='imagen'/>
                      <h5>{best.name}</h5>
                      <div className='div-boton'>
                        <button className="boton" >
                          <span className='span-boton'>Más Información</span>
                        </button>  
                      </div>
                    </div>
                </div>
            </div>
          )
        }))

        }
      </div>
    </div>
  )
}
