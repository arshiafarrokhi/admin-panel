"use client"
import Link from 'next/link'
import { FaWallet } from "react-icons/fa6";
import { FaExchangeAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { FaPercent } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { usePathname } from "next/navigation"
// import React from 'react';
import './../../globals.css'


const sidebar = ({ router }) => {
  
  // const router = useRouter();
  // const { router } =  usePathname();

  return (
    <div className='bg-[#212B39] h-[100vh] w-[20%] text-[#D2D9E4] p-6 absolute top-0 lg:left-0 -left-[100%]'>
      <div className='flex flex-col'>
        <img src="/11.png" alt="logo" width={150} height={150} className='mt-5' />
      </div>
      <div className='flex flex-col'>
        <Link className={`w-full hover:text-[#3EBF77] hover:border-[#3EBF77] transition-all flex items-center text-[16px] my-2 mt-6 py-4 px-4 font-semibold border rounded-lg border-slate-600 `} href="/dashbord"><img src="/12.png" className='mr-2' alt="" /> Dashbord</Link>
        <Link className={`w-full hover:text-[#3EBF77] hover:border-[#3EBF77] transition-all flex items-center text-[16px] my-2 py-4 px-4 font-semibold border rounded-lg border-slate-600 `} href="/dashbord/exchange"><FaExchangeAlt className='mr-2' />Exchange</Link>
        <Link className={`w-full hover:text-[#3EBF77] hover:border-[#3EBF77] transition-all flex items-center text-[16px] my-2 py-4 px-4 font-semibold border rounded-lg border-slate-600 `} href="/dashbord/prices"> <FaDollarSign className='mr-2' />Prices</Link>
        <Link className={`w-full hover:text-[#3EBF77] hover:border-[#3EBF77] transition-all flex items-center text-[16px] my-2 py-4 px-4 font-semibold border rounded-lg border-slate-600 `} href="/dashbord/wallets"> <FaWallet className='mr-2' />Wallets</Link>
        <Link className={`w-full hover:text-[#3EBF77] hover:border-[#3EBF77] transition-all flex items-center text-[16px] my-2 py-4 px-4 font-semibold border rounded-lg border-slate-600 `} href="/dashbord/promotions"><FaPercent className='mr-2' />Promotions</Link>
        <Link className={`w-full hover:text-[#3EBF77] hover:border-[#3EBF77] transition-all flex items-center text-[16px] my-2 py-4 px-4 font-semibold border rounded-lg border-slate-600 `} href="/dashbord/notifications"><MdNotificationsActive className='mr-2' />Notifications</Link>
        <Link className={`w-full hover:text-[#3EBF77] hover:border-[#3EBF77] transition-all flex items-center text-[16px] my-2 py-4 px-4 font-semibold border rounded-lg border-slate-600 `} href="/dashbord/settings"><IoMdSettings className='mr-2' />Settings</Link>
        <button className='w-full hover:text-[#131720] hover:bg-[#3EBF77] bg-[#3ebf7878] transition-all flex items-center text-[16px] my-2 py-4 px-4 font-semibold border rounded-lg border-slate-600' onClick={() => router.push("/")}><TbLogout2 className='mr-2' />Log Out</button>
      </div>
    </div>
  )
}

export default sidebar