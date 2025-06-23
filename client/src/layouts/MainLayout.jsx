import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer/Footer'


const MainLayout = ({children, toggleDarkMode, darkMode}) => {
  return (
    <div>
      <Navbar darkMode={darkMode} toggle={toggleDarkMode}></Navbar>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default MainLayout
