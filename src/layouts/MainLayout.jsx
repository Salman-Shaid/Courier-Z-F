import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
const MainLayout = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white'>
      <Navbar />
      <div className='pt-20 min-h-[calc(100vh-100px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
