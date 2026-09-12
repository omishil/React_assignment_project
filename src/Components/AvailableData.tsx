import type { DataType } from "./type/DataType"
import { AvCards } from "./AvailableCards"
import { useState } from "react"
import { YourStack } from "./YourStack"

export function AvailableDatas({Alldata}:{Alldata: DataType[]}){
const [stack, Setstack] = useState<DataType[]>([])


function addToStack(data: DataType){
const alreadyAdded= stack.find((i)=> i.id === data.id )

if(alreadyAdded){
    Setstack(stack.filter((i)=> i.id!== data.id))

}
else {
    Setstack([...stack,data])
}


}

function removeFromStack(id: string){
    Setstack(stack.filter((data)=>data.id !==id))
}

function removeAll(){
    Setstack([])
}
return(
<div>

<div className="availablecards flex  gap-[50px]">
    <div className="AllCardsSection       grid grid-cols-3 w-[70%] gap-x-5 ">
{
    Alldata.map((data:DataType)=>{
        return(
            <AvCards 
            key={data.id} 
            data={data}
            addToStack= {addToStack}
            ></AvCards>
    
)
    })
}</div>
{/* now right stack card
 */}
<YourStack stack= {stack}
            removeFromStack= {removeFromStack}
            removeAll={removeAll}
></YourStack>
</div>

</div>



)
}