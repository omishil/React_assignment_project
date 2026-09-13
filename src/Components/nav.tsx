import logoImg from "../assets/logo-text.png"
export function Nav(){
    return(
       <div className="sticky top-0 bg-white">
        {/* hidden md:flex */}
<div className="nav
 hidden md:flex 
  pt-5 w-[85%] flex justify-between m-auto text-black">        
      <img src={logoImg} alt="" />
        <div className="anc  flex gap-9">
            <a href="">Home</a>
            <a href="">Technologies</a>
            <a href="">Projects</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>

        <div className="signbtn flex gap-7">
            <button className=" text-gray-400">Sign In</button>
<button className="bg-pink-600 text-white rounded-[12px] px-[12px] ">
  Sign Up
</button>        </div>




       </div >
       <div className=" w-[85%] pb-5 pt-5 flex md:hidden sticky bg-white m-auto justify-between text-black">
        <button className="text-2xl ">
                                ☰

        </button>
          <img src={logoImg} alt="" />
          
        <div className="signbtn flex gap-7">
            <button className=" text-gray-400">Sign In</button>
<button className="bg-pink-600 text-white rounded-[12px] px-[12px] ">
  Sign Up
</button>        </div>




       </div>
       </div>
    )
}