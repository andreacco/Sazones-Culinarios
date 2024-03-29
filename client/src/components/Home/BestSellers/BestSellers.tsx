import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBestSellers } from '../../../redux/actions'
import '../../../scss/components/BestSellers.scss'

export default function BestSellers() {

  const dispatch: any = useDispatch()

  const handleClick = (name: any, id: any) => {
    const productName = name.replace(/ /g,'')
    window.open(`/${id}/${productName}`,'_blank')
  }

  useEffect(() => {
      dispatch(getBestSellers())
  }, [dispatch])
  

  const bestSellers = useSelector((state: any) => state.bestSellers)
  
  return (
    <div className='BestSellers-container'>
      <h2>BestSellers</h2>
      <div className='cards-container'>
        {bestSellers?.map((p: any) => p?.map((best: any) => {
          return (
            <div className={`container ${best.name?.length > 39 ? 
                                        `${best.name?.slice(22,25)}-card` : 
                                        best.name?.split(" ")[0] === "Curso" ?
                                        `${best.name?.slice(13, 16)}-card` :
                                        `${best.name?.split(" ")[0]}-card`}`}
                  key={best._id}>
                <div className="card_box">
                    <span className={`cinta-tarjeta ${best.name?.length > 39 ? 
                                                      best.name?.slice(22,25) : 
                                                      best.name?.split(" ")[0] === "Curso" ?
                                                      best.name?.slice(13, 16) :
                                                      best.name?.split(" ")[0]}`}></span>
                    <div className='content'>
                      <img src={best.name?.split(" ")[0] === "Gastronomía" ? 
                                best.mockups[0]?.izq : 
                                best.name?.split(" ")[0] === "Curso" ?
                                best.mockups[0]?.cent :
                                best.mockups[0]?.der
                              } alt="" className='imagen'/>
                      <h5>{best.name.includes(":") === true ? best.name.slice(0, -20) : best.name}</h5>
                      <div className='div-boton'>
                        <button className="boton" onClick={() => handleClick(best.name, best._id)}>
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
