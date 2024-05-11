"use client"
import React, { useEffect, useState } from 'react'
import germany from '../../../assets/images/flag-germany.svg'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/router';

interface Country {
  name: {
    official: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  flags: {
    svg: string;
  };
  tld: string[];
  currencies: {
    EUR: {
      name: string;
      symbol: string;
    }
  };
  languages: {
    [key: string]: string;
  };
  independent: boolean;
}

const page = ({ params: { id } }: {
  params: { id: string }
}) => {
  console.log(id)

  const [countryData, setCountryData] = useState<Country | null>(null);
  console.log(countryData)
  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${id}`);
        setCountryData(response.data[0]);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    if (id) {
      fetchCountryData();
    }
  }, [id]);

  return (
    <div className='flex w-full max-lg:flex-col  max-md:flex-col' >
      <Link href='/'>
        <h2 className='ml-12'>back</h2>
      </Link>
      <div className='w-[50%] max-lg:p-28 max-md:w-full  max-lg:w-full p-8 max-md:p-12'>
        <img className='w-full h-full rounded-md' src={countryData?.flags?.svg} alt="" />
      </div>
      <div className='grid grid-cols-2  max-lg:w-full max-md:grid-cols-1 px-12 mt-16 max-lg:px-24  max-lg:-mt-2  max-md:mt-0 max-xl:mt-10 w-1/2 '>

        <div className=' '>
          <p className="font-light max-md:text-[15px] mb-4  text-md max-xl:text-lg  dark:text-white"><span className="max-md:text-[15px] mb-4  font-medium mr-2 text-md max-xl:text-lg dark:text-white">Native Name:</span>{countryData?.name?.official}</p>
          <p className="font-light max-md:text-[15px] mb-4 text-md max-xl:text-lg  dark:text-white"><span className="font-medium mr-2 mb-4 dark:text-white text-md max-xl:text-lg max-md:text-[15px]">Population:</span>{countryData?.population}</p>
          <p className="font-light max-md:text-[15px] text-md max-xl:text-lg mb-4  dark:text-white"><span className="font-medium mr-2  mb-4  dark:text-white text-md max-xl:text-lg max-md:text-[15px]">Region:</span>{countryData?.region}</p>
          <p className="font-light max-md:text-[15px] text-md max-xl:text-lg mb-4 dark:text-white"><span className="font-medium mr-2 mb-4  dark:text-white text-md max-xl:text-lg max-md:text-[15px]">Sub Region:</span>{countryData?.subregion}</p>
          <p className="font-light max-md:text-[15px] text-md max-xl:text-lg mb-4 dark:text-white"><span className="font-medium mr-2 mb-4  dark:text-white text-md max-xl:text-lg max-md:text-[15px]">Capital:</span>{countryData?.capital}</p>

        </div>
        <div className='mt-20 max-md:mt-8  max-lg:mt-0 '>
          <p className="font-light max-md:text-[15px] text-md max-xl:text-lg  dark:text-white"><span className="font-medium mr-2 text-md max-xl:text-lg  dark:text-white max-md:text-[15px]">Top Level Domain :</span>{countryData?.tld?.join(', ')} </p>

          <p className="font-light max-md:text-[15px] text-md  dark:text-white max-xl:text-lg"><span className="font-medium  dark:text-white mr-2 text-md max-xl:text-lg max-md:text-[15px]">Currencies:</span>{countryData?.currencies?.EUR?.name} {countryData?.currencies?.EUR?.symbol}</p>
          <h2 className='mb-2 max-md:text-[15px] dark:text-white text-md max-xl:text-lg'> Languages : {countryData?.languages ? Object.keys(countryData.languages).join(', ') : 'Not available'}</h2>
          <p className="font-light max-md:text-[15px] text-md  dark:text-white max-xl:text-lg"><span className="font-medium  dark:text-white mr-2 text-md max-xl:text-lg max-md:text-[15px]">Independent:</span>{countryData?.independent ? "true" : "false"} </p>
        </div>
      </div>
      <div>
        border
      </div>

    </div>
  )
}

export default page;
