import React from 'react'
import Search from './search'

const SearchBar = () => {
    return (
        <div className='relative'>
            <form className='flex justify-end items-center'>
                <input 
                placeholder='Buscar...'
                className='
                    bg-none 
                    outline-none 
                    border-none 
                    rounded-full 
                    max-w-[190px]
                    text-sc-blacky
                    dark:text-sc-background
                    p-2
                    px-3
                    '
                name='search'
                // value={}
                type="text" 
                // onChange={}
                // onKeyPress={}
                autoComplete='off'
                />
                <button className='absolute'>
                    <Search/>
                </button>
            </form>
        </div>
    )
}

export default SearchBar