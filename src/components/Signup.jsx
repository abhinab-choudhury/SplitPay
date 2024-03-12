import { Link } from "react-router-dom"
import Navbar from "./Navbar"

function Signup() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-white">
        <div className="flex flex-col">
          <h1 className="text-3xl oswald-bold">Sign up Form</h1>
        </div>
        <p className="font-extralight">If you already had an Account than <Link to="/signin" className="text-gray-400 hover:text-gray-700">signin</Link> </p>
      </div>
    </>
  )
}

export default Signup
