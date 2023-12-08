import React from 'react'
import Sidebar from '../ui/dashbord/sidebar/sidebar'
import Navbar from '../ui/dashbord/navbar/navbar'
import './../ui/globals.css'

const Layout = ({ children }) => {
    return (
        <div className='flex h-[100vh] w-full'>
            <div className='w-[20%]'>
                <Sidebar />
            </div>
            <div className='w-[1000000%] lg:w-[80%] overflow-y-scroll'>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Layout