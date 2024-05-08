import Link from 'next/link'
import React from 'react'
import ThemeToggle from '../ThemeToggle'

const Header = () => {
    return (
        <div className=' bg-[#ffffff] shadow-sm shadow-gray-300 dark:shadow-sm  text-white py-6 px-7 mx-auto flex justify-between items-center mb-10 dark:bg-[#2b3844] '>

            <h3 className='text-[#000] pl-10 text-xl font-semibold dark:text-white'>Where in the world?</h3>
            <div className='flex gap-2 items-center justify-center'>
                <ThemeToggle />
                Dark Mode

            </div>
        </div>
    )
}

export default Header