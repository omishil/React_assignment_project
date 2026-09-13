import type { DataType } from "./type/DataType"
export function YourStack({stack, removeFromStack,removeAll}:
     { stack: DataType[],
        removeFromStack : (id : string)=>void,
        removeAll: ()=> void        
    
    }){

    //  console.log(stack)
   return(
<div className="StackCard  text-black   border p-3 rounded-[5px] h-fit min-w-[270px] ">
<h2 className="text-2xl">Your Stack</h2>
<p className={`text-gray-400 ${stack.length>0? "hidden" : ""}  `}>No technologies selected yet</p>
<div className={`emptyBox         flex flex-col  gap-3   mt-[25px]  rounded-[5px]           `}>
<p className={`text-gray-400     ${stack.length==0? "hidden": ""} -mt-4`} >{stack.length} Technology selected
</p>{
    stack.map((data)=>
    {
        return (
        <div key={data.id} className="w-full  flex justify-between border border-gray-400 px-5 rounded-[5px] ">
   
   
   <div className="flex gap-2"> 
    <img src={data.icon} className="w-8" alt="" />

<div>
    
   <p> {data.name}</p>
<p className="text-sm text-gray-400">{data.category}</p>

</div>
</div>

<div    onClick={() =>removeFromStack(data.id)}
        className="cross text-2xl text-red-500">×</div>

        </div>
    )
    }
    )
}



<p className={`EmptyText  border border p-5 py-10 rounded-[5px]  ${stack.length>0? "hidden" : ""}   text-gray-400`}>Your Stack is empty </p>
</div>

<button 
onClick={removeAll}
className={`border border w-full mt-7 rounded-[5px] text-red-500 ${stack.length==0?"hidden":""}`} >Remove All</button>
</div>

    )
}