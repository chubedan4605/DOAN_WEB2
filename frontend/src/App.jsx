import Header from "./components/layout/header.jsx"
import axios from "./util/axios.customize.js"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"

function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`/v1/api`)
      console.log(">>> Check res: ", res)
    }

    fetchHelloWorld()
  }, [])

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  ) 
}

export default App
