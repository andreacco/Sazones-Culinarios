import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './redux/actions/index'
import { useSelector } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)
  const dispatch: any = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])
  
  const allProds = useSelector((state: any) => state.products)

  return (
    <div className="App">
      {allProds?.map((p:any) => {
        return (
        <div key={p.id}>
          <img src={p.cover_image} alt="coverImg" height={200}/>
        </div>
        )
      })}
    </div>
  )
}

export default App
