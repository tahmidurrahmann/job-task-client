import { Outlet } from "react-router-dom"
import Navbar from "./shared/Navbar/Navbar"
import Footer from "./shared/Footer/Footer"

function App() {

  return (
    <div className="font-raleway">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
