import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const Layout = () => {
  return (
    <>
      <Sidebar />
      <main className="flex justify-center items-center w-screen">
        <Outlet />
      </main>
    </>
  )
}

export default Layout