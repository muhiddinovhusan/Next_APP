import usa from '../assets/images/flag-usa.svg'
import germany from '../assets/images/flag-germany.svg'
import brazil from '../assets/images/1280px-Flag_of_Germany.svg.svg'
import island from '../assets/images/1280px-Flag_of_any.svg.svg'
import Link from 'next/link'


const page = () => {
  return (
    <div className='mb-10  '>
<div className='flex px-10 justify-between items-center gap-4 mb-10 '>
  <input  placeholder='Search for a country...' className='dark:bg-[#2b3844] w-[400px] p-3 h-10 shadow-gray-300 dark:shadow-none rounded-sm outline-none shadow-sm placeholder:text-gray-300 placeholder:text-sm placeholder:font-sans placeholder:dark:text-white' type="text" name="" id="" />

  <select className='h-10 w-44 rounded-sm dark:bg-[#2b3844] dark:shadow-none dark:text-white   shadow-gray-300  shadow-sm' name="" id="">
    <option>Filter by Region</option>
    <option>Africa</option>
    <option>America</option>
    <option>Europe</option>
  </select>
</div>
<div className='grid grid-cols-4 px-16  mb-16 ml-10 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 max-md:px-0 max-xl:px-0 max-lg:px-0 '>
<Link href='/details/1' className='w-[264px] rounded-md  bg-[#ffffff] shadow-sm shadow-gray-300 h-80 dark:bg-[#2b3844] dark:shadow-none'>
  
  <div className='mb-2 '>
<img src={germany.src} alt="" />
  </div>
  <div className="p-4 pl-5 ">
    <h3 className='dark:text-white mb-2 text-md font-semibold'>Germany</h3>
    <h3 className="flex text-sm mb-2 dark:text-[#FFFFFF]">Population : <p>81,770,900</p></h3>
    <h3 className="flex text-sm mb-2 dark:text-[#FFFFFF]">Region : <p>Europe</p></h3>
    <h3 className="flex text-sm dark:text-[#FFFFFF]">Capital : <p>Berlin</p></h3>
  </div>
  <div>

  </div>
</Link>

<Link href="/details/2" className='w-[264px]  rounded-md bg-[#ffffff] shadow-sm shadow-gray-300 h-80 dark:bg-[#2b3844] dark:shadow-none'>
   
  <div className='mb-2'>
<img src={usa.src} alt="" />
  </div>
  <div className="p-4 pl-5 ">
    <h3 className='dark:text-white mb-2 text-md font-semibold'>United States of America</h3>
    <h3 className="flex text-sm mb-2 dark:text-[#FFFFFF]">Population : <p> 323,947,000</p></h3>
    <h3 className="flex text-sm mb-2 dark:text-[#FFFFFF]">Region : <p> Americas</p></h3>
    <h3 className="flex text-sm dark:text-[#FFFFFF]">Capital : <p>Washington, D.C.</p></h3>
  </div>
  <div>

  </div>
</Link > 
<Link href="/details/3" className='w-[264px] rounded-md bg-[#ffffff] shadow-sm shadow-gray-300 h-80 dark:bg-[#2b3844] dark:shadow-none'>
   
  <div className='mb-2'>
<img src={brazil.src} alt="" />
  </div>
  <div className="p-4 pl-5 ">
    <h3 className='dark:text-white mb-2 text-md font-semibold'>Brazil</h3>
    <h3 className="flex text-sm mb-2 dark:text-[#FFFFFF]">Population : <p>206,135,893</p></h3>
    <h3 className="flex text-sm mb-2 dark:text-[#FFFFFF]">Region : <p>Americas</p></h3>
    <h3 className="flex text-sm dark:text-[#FFFFFF]">Capital : <p>Brasilia</p></h3>
  </div>
  <div>

  </div>
</Link> 
<Link href="/details/4" className='w-[264px] rounded-md bg-[#ffffff] shadow-sm dark:bg-[#2b3844] dark:shadow-none shadow-gray-300 h-80'>
   <div className='mb-2'>
<img src={island.src} alt="" />
  </div>
  <div className="p-4 pl-5 ">
    <h3 className='dark:text-white mb-2 text-md font-semibold'>Iceland</h3>
    <h3 className="flex text-sm mb-2 dark:text-[#FFFFFF]">Population : <p>334,300</p></h3>
    <h3 className="flex text-sm mb-2 dark:text-[#FFFFFF]">Region : <p>Europe</p></h3>
    <h3 className="flex text-sm dark:text-[#FFFFFF]">Reykjavik : <p>Berlin</p></h3>
  </div>
  <div>

  </div>
</Link>
</div>
<div className='grid grid-cols-4 px-16  ml-10 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 max-md:px-0 max-xl:px-0 max-lg:px-0 '>
<Link href="/details/5" className='w-[264px] rounded-md  bg-[#ffffff] shadow-sm shadow-gray-300 h-80 dark:bg-[#2b3844] dark:shadow-none'>
  
  <div className='mb-2 '>
<img src={germany.src} alt="" />
  </div>
  <div className="p-4 pl-5 ">
    <h3 className='dark:text-white mb-2 text-md font-semibold'>Germany</h3>
    <h3 className="flex text-sm mb-2 dark:text-[#FFFFFF]">Population : <p>81,770,900</p></h3>
    <h3 className="flex text-sm mb-2 dark:text-[#FFFFFF]">Region : <p>Europe</p></h3>
    <h3 className="flex text-sm dark:text-[#FFFFFF]">Capital : <p>Berlin</p></h3>
  </div>
  <div>

  </div>
</Link>
<Link href="/details/6" className='w-[264px]  rounded-md bg-[#ffffff] shadow-sm shadow-gray-300 h-80 dark:bg-[#2b3844] dark:shadow-none'>
   
  <div className='mb-2'>
<img src={usa.src} alt="" />
  </div>
  <div className="p-4 pl-5 ">
    <h3 className='dark:text-white mb-2 text-md font-semibold'>United States of America</h3>
    <h3 className="flex text-sm mb-2 dark:text-[#FFFFFF]">Population : <p> 323,947,000</p></h3>
    <h3 className="flex text-sm mb-2 dark:text-[#FFFFFF]">Region : <p> Americas</p></h3>
    <h3 className="flex text-sm dark:text-[#FFFFFF]">Capital : <p>Washington, D.C.</p></h3>
  </div>
  <div>

  </div>
</Link > 
<Link href="/details/7" className='w-[264px] rounded-md bg-[#ffffff] shadow-sm shadow-gray-300 h-80 dark:bg-[#2b3844] dark:shadow-none'>
   
  <div className='mb-2'>
<img src={brazil.src} alt="" />
  </div>
  <div className="p-4 pl-5 ">
    <h3 className='dark:text-white mb-2 text-md font-semibold'>Brazil</h3>
    <h3 className="flex text-sm mb-2 dark:text-[#FFFFFF]">Population : <p>206,135,893</p></h3>
    <h3 className="flex text-sm mb-2 dark:text-[#FFFFFF]">Region : <p>Americas</p></h3>
    <h3 className="flex text-sm dark:text-[#FFFFFF]">Capital : <p>Brasilia</p></h3>
  </div>
  <div>

  </div>
</Link> 
<Link href="/details/8" className='w-[264px] rounded-md bg-[#ffffff] shadow-sm dark:bg-[#2b3844] dark:shadow-none shadow-gray-300 h-80'>
   <div className='mb-2'>
<img src={island.src} alt="" />
  </div>
  <div className="p-4 pl-5 ">
    <h3 className='dark:text-white mb-2 text-md font-semibold'>Iceland</h3>
    <h3 className="flex text-sm mb-2 dark:text-[#FFFFFF]">Population : <p>334,300</p></h3>
    <h3 className="flex text-sm mb-2 dark:text-[#FFFFFF]">Region : <p>Europe</p></h3>
    <h3 className="flex text-sm dark:text-[#FFFFFF]">Reykjavik : <p>Berlin</p></h3>
  </div>
  <div>

  </div>
</Link>
</div>

    </div>
  )
}

export default page