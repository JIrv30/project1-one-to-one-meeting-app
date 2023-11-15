import { Outlet } from "react-router-dom"
import { AuthContextProvider } from "../context/AuthContext"
import SignIn from "./SignIn"
import Protected from "./Protected"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="">
          <Protected>
            <Outlet />
          </Protected>
        </main>
      </div>
    </div>
  )
}


export default Layout