import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../../redux/actions'
import '../../../scss/components/BestSellers.scss'

export default function BestSellers() {

  const dispatch: any = useDispatch()

  useEffect(() => {
      dispatch(getAllProducts())
  }, [dispatch])
  

  const products = useSelector((state: any) => state.products)
  const bestSellers = products.slice(0, 3)
  
  return (
    <div className='BestSellers-container'>
      <h2>BestSellers</h2>
      <div className='cards-container'>
        {bestSellers.map((p: any) => {
          return (
            <div className="container">
                <div className="card_box">
                    <span className='cinta-tarjeta'></span>
                    <div className='content'>
                      <img src={p.cover_image} alt="" className='imagen'/>
                      <h5>{p.name}</h5>
                      <div className='div-boton'>
                        <button className="boton" >
                          <span className='span-boton'>Más Información</span>
                        </button>  
                      </div>
                    </div>
                </div>
            </div>
          )
        })

        }
      </div>
    </div>
  )
}
