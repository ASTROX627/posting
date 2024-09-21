import { useAppContext } from "../context/app/app_context";

const Navbar = () => {
  const {toggleForm} = useAppContext();
  return(
    <nav className="navbar-nav align-middle flex justify-between bg-white shadow-lg mb-">
      <button onClick={toggleForm} className="bg-blue-700 m-2 text-white px-3 py-2 rounded-md ">ایجاد پست</button>
    </nav>
  )
}

export default Navbar;