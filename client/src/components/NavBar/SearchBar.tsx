import '../../styles/components/NavBar.scss'


const SearchBar = () => {
  return (
    <div className='searchBar'>
        <form>
            <input type="text" />
            <button>search</button>
        </form>
    </div>
  )
}

export default SearchBar;