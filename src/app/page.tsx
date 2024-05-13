"use client"
import usa from '../assets/images/flag-usa.svg'
import germany from '../assets/images/flag-germany.svg'
import brazil from '../assets/images/1280px-Flag_of_Germany.svg.svg'
import island from '../assets/images/1280px-Flag_of_any.svg.svg'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Pagination  from '../components/pagination/Pagination';

type Countries = {
  name: {
    common: string,
    official: string
  },
  flags: {
    svg: string,
  },
  capital: string,
  population: number,
  region: string,

}




const page = () => {

  const [data, setData] = useState([] || null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filter, setFilter] = useState('All')
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  console.log(data)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setData(response.data);

      } catch (error: any) {
        console.log(error.message)
      }
    };

    fetchData();


  }, []);




  const filteredCountries = data.filter((country: Countries) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  &&
  (filter === 'All' || country.region === filter)
  );

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCountries.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className='mb-10  '>
      <div className='flex px-10 justify-between items-center gap-4 mb-14 max-md:flex-col  '>
        <input placeholder='Search for a country...' className='dark:bg-[#2b3844] w-[400px]  max-md:w-full p-3 h-10 shadow-gray-300 dark:shadow-none rounded-sm outline-none shadow-sm placeholder:text-gray-300 placeholder:text-sm placeholder:font-sans placeholder:dark:text-white' type="text" name="" id=""
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select className='h-10 w-44 rounded-sm dark:bg-[#2b3844]  dark:shadow-none dark:text-white   shadow-gray-300  shadow-sm' name="" id=""
       value={filter} onChange={handleFilterChange}
        >
          <option value="All">Filtered by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className='grid grid-cols-4 px-16   mb-16 ml-10 max-sm:grid-cols-1 max-md:pr-10 max-md:gap-5   max-sm:px-5 max-md:grid-cols-2 gap-3 max-lg:grid-cols-3 max-lg:pr-8 max-lg:gap-5   max-md:px-0 max-xl:px-0 max-lg:px-0  '>
        {
          currentItems.map((country: Countries) => (
            <Link href={`/details/${country.name.common}`} key={country.name.common} className='w-full  min-[1200px]:w-[266px] max-lg:h-[345px]  max-sm:w-[280px] rounded-lg mb-5  bg-[#ffffff] shadow-sm shadow-gray-300 h-80 dark:bg-[#2b3844] dark:shadow-none'>
              <div className='mb-2 w-full h-[180px] max-md:h-[150px]  max-lg:h-[170px]  max-sm:h-[130px]'>

                <img src={country.flags.svg} alt="" className="w-full h-full object-cover rounded-t-lg   " />
              </div>

              <div className="p-4 pl-5 ">
                <h3 className='dark:text-white mb-2 text-md  font-semibold line-clamp-1'>{country.name.official}</h3>
                <h3 className="flex text-sm mb-2 dark:text-[#FFFFFF]">Population : <p>{country.population}</p></h3>
                <h3 className="flex text-sm mb-2 dark:text-[#FFFFFF]">Region : <p>{country.region}</p></h3>
                <h3 className="flex text-sm dark:text-[#FFFFFF]">Capital : <p>{country.capital}</p></h3>
              </div>
            </Link>
          ))
        }




   
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />




    </div>
  )
}

export default page