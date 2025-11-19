import axios from "./util/axios.customize.js"
import { useEffect } from "react"

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
      <h1>hello world</h1>
    </>
  )
}

export default App
