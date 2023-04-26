import '../../scss/components/SearchBar.scss'
import { BiSearchAlt } from 'react-icons/bi';
import { useState } from 'react';
import { getBySearch } from '../../redux/actions/index'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import useGoUp from '../../customHooks/GoUp';
import changePageTitle from '../../customHooks/ChangeTitle'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState<any>()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const goUp = useGoUp()
  
  const handleChange = (e: any) => {
    e.preventDefault()
    setInput(e.target.value)
  }
  
  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(getBySearch(e.target.value))
    changePageTitle(`Resultados para "${e.target.value}" - Sazones Culinarios`)
    setInput('')
    goUp()
    if (pathname !== "/productos") {
      navigate(`/productos/search/${input}`, { replace: true })
    }
  }

  return (
    <div className="container">
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <input 
        placeholder="Enter your text..." 
        className="input" 
        name="search" 
        value={input} 
        type="text" 
        onChange={(e) => handleChange(e)} 
        onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
        autoComplete='off'
        />
        <button className='search' onClick={(e) => handleSubmit(e)}>
          <BiSearchAlt size={22}/>
        </button>
      </form>
    </div>
  )
}

export default SearchBar;