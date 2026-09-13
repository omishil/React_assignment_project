import { Nav } from "./Components/nav"
import Banner from "./Components/banner"
import { Suspense } from "react"
import Data from "./Components/Data"
import type { DataType } from "./Components/type/DataType"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Footer } from "./Components/footer"

async function  DataPromise(): Promise<DataType[]>{
  const res= await fetch("/data.json")
  const data = await res.json()
  return data
}

function App() {

  return (
    <>
   
     <Nav ></Nav>
     <Banner></Banner>
     <Suspense fallback={<p>loading...</p>}>
     <Data data={DataPromise()}></Data> 
     
     </Suspense>
     <ToastContainer position="bottom-right"></ToastContainer>
     <Footer></Footer>
    </>
  )
}

export default App
