import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

function Layout() {
  return (
    <>
      <Header />
      <main className="container mx-auto pt-5">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
