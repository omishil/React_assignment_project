import type { DataType } from "./type/DataType"
import { AvCards } from "./AvailableCards"
export function AvailableDatas({Alldata}:{Alldata: DataType[]}){
return(
<div>

<div className="availablecards">
    <div className="AllCardsSection       grid grid-cols-3 w-[70%] gap-x-5 ">
{
    Alldata.map((data:DataType)=>{
        return(
            <AvCards key={data.id} data={data} ></AvCards>
    
)
    })
}</div>


</div>
<div className="addOrRemove">

</div>
</div>



)
}