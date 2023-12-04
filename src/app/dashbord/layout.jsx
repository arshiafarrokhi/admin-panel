import React from 'react'
import Sidebar from '../ui/dashbord/sidebar/sidebar'
import Navbar from '../ui/dashbord/navbar/navbar'

const Layout = ({ children }) => {
    return (
        <>
            <div>
                <Sidebar />
            </div>
            <div>
                <Navbar />
                {children}
            </div>
        </>
    )
}

export default Layout