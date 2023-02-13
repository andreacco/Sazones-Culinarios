import '../../scss/components/SearchBar.scss'
import { BiSearchAlt } from 'react-icons/bi';
import { useState } from 'react';
import { getBySearch } from '../../redux/actions/index'
import { useDispatch } from 'react-redux';

const SearchBar = () => {
  // const dispatch = useDispatch()
  // const [input, setInput] = useState<any>()

  // const handleChange = (e: any) => {
  //   e.preventDefault()
  //   setInput(e.target.value)
  // }

  // const handleSubmit = (e: any) => {
  //   e.preventDefault()
  //   dispatch(getBySearch(e.target.value))
  //   setInput('')
  // }

  return (
    <div className="container">
      <form className='form' /* onSubmit={(e) => handleSubmit(e)} */>
        <input 
        placeholder="Enter your text..." 
        className="input" 
        name="search" 
        // value={input} 
        type="text" 
        /* onChange={(e) => handleChange(e)}  */
        /* onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)} */
        />
        <button className='search' /* onClick={(e) => handleSubmit(e)} */>
          <BiSearchAlt size={22}/>
        </button>
      </form>
    </div>
  )
}

export default SearchBar;