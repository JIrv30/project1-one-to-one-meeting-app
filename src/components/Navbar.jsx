import { MdOutlineLogout } from "react-icons/md";



const Navbar = () => {
  return (
    <nav className="flex justify-end items-center bg-lime-200">
      <button className="flex flex-col justify-center items-center pr-3">
      <MdOutlineLogout /> Sign out
      </button>

    </nav>
  )
}

export default Navbar