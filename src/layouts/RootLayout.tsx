import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const RootLayout = () => {
  return (
    <div>
<<<<<<< HEAD
      <Navbar/>
      <Outlet/>
=======
      <Navbar />
      <div className="container mx-auto px-4">
        <Outlet />
      </div>
>>>>>>> 306bc0e (commit coba)
    </div>
  )
}

export default RootLayout