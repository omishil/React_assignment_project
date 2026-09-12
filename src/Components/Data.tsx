import type { DataType } from "./type/DataType";
import { use } from "react";
import { AvailableDatas } from "./AvailableData";


const Data = ({ data }:Promise<DataType[]>) => {
const datas= use(data)
console.log(datas);
return (<div className="AllCardSection m-auto w-[85%]  ">
    <h1 className="text-black text-[30px] font-bold">Explore the <span className="text-yellow-600">Technologies</span></h1>
<p className="text-gray-500 ">pick one technology per category to build your ideal stack</p>


<AvailableDatas Alldata= {datas}></AvailableDatas>



</div>)
}

export default Data;