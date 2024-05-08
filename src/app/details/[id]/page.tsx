import React from 'react'
import germany from '../../../assets/images/flag-germany.svg'

const page = () => {
  return (
    <div className='flex w-full  max-md:flex-col' >
<div className='w-[50%]  max-md:w-full p-8 max-md:p-12'>
<img className='w-full rounded-md' src={germany.src} alt="" />
</div>
<div className='grid grid-cols-2 max-md:grid-cols-1 px-12 mt-40 max-md:mt-0 max-xl:mt-10 w-[60%] '>
<div className='  '>
  <h1 className='text-3xl font-bold mb-5 max-md:text-2xl dark:text-white'>Belgium</h1>
  <h2 className='mb-2 text-[17px]  max-md:text-[15px] dark:text-white'>Native Name : Belgie</h2>
  <h2 className='mb-2 max-md:text-[15px] dark:text-white'>Population: Belgie</h2>
  <h2 className='mb-2 max-md:text-[15px] dark:text-white'>Region : Belgie</h2>
  <h2 className='mb-2 max-md:text-[15px] dark:text-white'>Sub Region : Belgie</h2>
  <h2 className='mb-2 max-md:text-[15px] dark:text-white'> Capital : Belgie</h2>
</div>
<div className='mt-20 max-md:mt-8'>
<h2 className='mb-2 max-md:text-[15px] dark:text-white'>Top Level Domain : Belgie</h2>
  <h2 className='mb-2 max-md:text-[15px] dark:text-white'>Currencies : Lorem.</h2>
  <h2 className='mb-2 max-md:text-[15px] dark:text-white'> Languages : Lorem, ipsum dolor.</h2></div>
</div>

    </div>
  )
}

export default page