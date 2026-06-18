import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="app-main flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
