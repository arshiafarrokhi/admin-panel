"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaWallet } from "react-icons/fa6";
import { FaExchangeAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { FaPercent } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import { LuActivity } from "react-icons/lu";
import './../../globals.css'

const sidebar = () => {

  const pathname = usePathname()

  return (
    <div className='bg-[#212B39] h-[100vh]  text-[#D2D9E4] p-6'>
      <div className='flex flex-col'>
        <img src="/11.png" alt="logo" width={150} height={150} className='mt-5' />
      </div>
      <div className='flex flex-col'>
        <Link className={`w-full hover:text-[#3EBF77] hover:border-[#3EBF77] transition-all flex items-center text-[16px] my-2 mt-6 py-4 px-4 font-semibold border rounded-lg border-slate-600 ${pathname === '/dashbord' ? 'active' : ''} `} href="/dashbord"><img src="/12.png" className='mr-2' alt="" /> Dashbord</Link>
        <Link className={`w-full hover:text-[#3EBF77] hover:border-[#3EBF77] transition-all flex items-center text-[16px] my-2 py-4 px-4 font-semibold border rounded-lg border-slate-600 ${pathname === '/dashbord/exchange' ? 'active' : ''} `} href="/dashbord/exchange"><FaExchangeAlt className='mr-2' />Exchange</Link>
        <Link className={`w-full hover:text-[#3EBF77] hover:border-[#3EBF77] transition-all flex items-center text-[16px] my-2 py-4 px-4 font-semibold border rounded-lg border-slate-600 ${pathname === '/dashbord/prices' ? 'active' : ''} `} href="/dashbord/prices"> <FaDollarSign className='mr-2' />Prices</Link>
        <Link className={`w-full hover:text-[#3EBF77] hover:border-[#3EBF77] transition-all flex items-center text-[16px] my-2 py-4 px-4 font-semibold border rounded-lg border-slate-600 ${pathname === '/dashbord/wallets' ? 'active' : ''} `} href="/dashbord/wallets"> <FaWallet className='mr-2' />Wallets</Link>
        <Link className={`w-full hover:text-[#3EBF77] hover:border-[#3EBF77] transition-all flex items-center text-[16px] my-2 py-4 px-4 font-semibold border rounded-lg border-slate-600 ${pathname === '/dashbord/promotions' ? 'active' : ''} `} href="/dashbord/promotions"><FaPercent className='mr-2' />Promotions</Link>
        <Link className={`w-full hover:text-[#3EBF77] hover:border-[#3EBF77] transition-all flex items-center text-[16px] my-2 py-4 px-4 font-semibold border rounded-lg border-slate-600 ${pathname === '/dashbord/activities' ? 'active' : ''} `} href="/dashbord/activities"><LuActivity className='mr-2' />Activities</Link>
        <Link className={`w-full hover:text-[#3EBF77] hover:border-[#3EBF77] transition-all flex items-center text-[16px] my-2 py-4 px-4 font-semibold border rounded-lg border-slate-600 ${pathname === '/dashbord/notifications' ? 'active' : ''} `} href="/dashbord/notifications"><MdNotificationsActive className='mr-2' />Notifications</Link>
        <Link className={`w-full hover:text-[#3EBF77] hover:border-[#3EBF77] transition-all flex items-center text-[16px] my-2 py-4 px-4 font-semibold border rounded-lg border-slate-600 ${pathname === '/dashbord/settings' ? 'active' : ''} `} href="/dashbord/settings"><IoMdSettings className='mr-2' />Settings</Link>
      </div>
    </div>
  )
}

export default sidebar