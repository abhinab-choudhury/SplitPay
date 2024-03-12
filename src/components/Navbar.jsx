
function Navbar() {
  return (
    <>
      <nav className="fixed top-0 flex shadow-xl w-screen bg-gray-100 px-10 py-3 items-center">
        <div className="flex items-center">
          <img src="https://img.icons8.com/hatch/64/1A1A1A/split.png" alt="Logo" />
          <h1 className="ml-2 mr-3 text-3xl oswald-bold">
            <a href="/">SplitPay</a>
          </h1>
        </div>
        <ul className="flex ml-auto mr-11 text-lg">
          <li className="text-gray-500 hover:text-gray-700 font-extrabold inconsolata-Normal">Dashboard</li>
        </ul>
        <div className="flex items-center">
          <button className="hover:bg-black hover:text-white border border-black rounded-md text-xl px-3 py-2 oswald-light">
            <a href="#" > Sign in </a>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
