import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

function Layout() {
  return (
    <>
      <Header />
      <main className="container mx-auto font-normal overflow-x-hidden leading-6 tracking-normal max-md:px-4 md:px-4 lg:px-4 xl:px-4 py-24">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
