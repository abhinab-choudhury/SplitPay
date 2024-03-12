import Navbar from "./Navbar"

function Home() {
  return (
    <>
      <Navbar />
      <div className="w-100 h-100 flex">
        <button className="px-3 py-2 text-2xl oswald-bold border border-black"> Get Started </button>
      </div>
    </>
  )
}

export default Home
