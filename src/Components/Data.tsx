import type { DataType } from "./type/DataType";
import { use } from "react";
import { AvailableDatas } from "./AvailableData";


const Data = ({ data}: {data: Promise<DataType[]>} ) => {
const datas= use(data)
console.log(datas);
return (<div className="AllCardSection m-auto w-[85%]  ">
    <h1 className="text-black text-[30px] font-bold">Explore the <span className=" bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h1>
<p className="text-gray-500 ">Pick one technology per category to build your ideal stack</p>


<AvailableDatas Alldata= {datas}></AvailableDatas>



</div>)
}

export default Data;