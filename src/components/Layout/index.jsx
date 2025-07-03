import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

function Layout() {
  return (
    <>
      <Header />
      <main className="container mx-auto font-normal leading-6 tracking-normal py-24">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
