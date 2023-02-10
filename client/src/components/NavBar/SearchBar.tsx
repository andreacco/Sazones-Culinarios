import '../../scss/components/SearchBar.scss'
import { BiSearchAlt } from 'react-icons/bi';

const SearchBar = () => {
  return (
    <div className="container">
      <input placeholder="Enter your text..." className="input" name="text" type="text"/>
      <button className='search'>
        <BiSearchAlt size={22}/>
      </button>
    </div>
  )
}

export default SearchBar;