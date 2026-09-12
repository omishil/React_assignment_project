import bannerIMg from "../assets/banner-stack.png"
export default function Banner() {
  return (
    <>
    <div className="bannerSection mt-[50px]  w-[85%] h-[500px] flex flex-row m-auto justify-between">
    <div className="  text-black w-[600px] flex flex-col gap-[40px]">
      <h1 className=" font-bold text-[60px] ">Build Your Ideal 
<p className="fon bg-gradient-to-r from-[#EC3950] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
 Development Stack
</p>        </h1>
      <p>
        Explore front-end, back-end, database, and tooling options, compare
        them side by side, and put together the stack that fits your next
        project.
      </p>
      <div className="bannerBtn flex gap-[15px]">
      <button className="text-white rounded-[10px] px-4 py-2  bg-gradient-to-r from-[#F97316] to-[#7C3AED]">Explore Technologies</button>
      <button>Learn more</button>
      </div>
    </div>
    <div className="rightImg">
        <img src={bannerIMg} alt="" className="-mt-[80px]" />
    </div></div>
    </>
  )
}