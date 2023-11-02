import { Outlet }from 'react-router-dom'
import Navbar from "../components/organisms/Navbar"
import Footer from "../components/templates/Footer"

const RootLayout = () => {
  return (
    <>
    <Navbar />
    
        
    <Outlet />
    
    <Footer />
    </>
  )
}

export default RootLayout