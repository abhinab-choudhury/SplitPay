import { Link } from "react-router-dom"
import Navbar from "./Navbar"

function Signin() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-white">
        <div className="flex flex-col">
          <h1 className="text-3xl oswald-bold">Sign in Form</h1>
        </div>
        <hr />
        <p className="font-extralight">If you don&#39;t have an Account than <Link to='/signup' className="text-gray-400 hover:text-gray-700">signup</Link> </p>
      </div>
    </>
  )
}

export default Signin
