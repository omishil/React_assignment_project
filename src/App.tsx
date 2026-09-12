import { Nav } from "./Components/nav"
import Banner from "./Components/banner"
import { Suspense } from "react"
import Data from "./Components/Data"
import type { DataType } from "./Components/type/DataType"


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
    </>
  )
}

export default App
