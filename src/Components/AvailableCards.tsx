import type { DataType } from "./type/DataType"
import starImg from '../assets/star.png'

export const AvCards = ({ data }: {data: DataType}) => {
    
    return ( 
    <div className="EachCard  py-[30px] px-[20px] rounded-[10px] my-[15px]  p-[10px] flex flex-col border border-slate-100 gap-5 text-black"  >


<div className="CardHead flex justify-between">
    <img className="w-[40px]"
      src={data.icon}
      alt="Shoes" />
      <p>{data.badge}</p>
      </div>


  <p className="text-gray-500">{data.description}</p>


  <div className="down flex flex-col gap-3">


  <div className="  flex -px-[2px] justify-between text-gray-600" >
    <span className="bg-gray-100 rounded-[5px] px-[5px]">{data.category}</span>
  <span>{data.difficulty} </span>
   <div className="flex">
    <img src={starImg} className="mt-[4px] w-[17px] h-[15px]" alt="Rating" />
  {data.rating}
  </div>
  </div>
  
      <button className=" bg-black text-white py-2 rounded-[10px]">Add to Stack</button>
      </div>
    </div>)
}