import { Outlet } from 'react-router-dom'

import Navbar from '../navbar/navbar.components'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}
