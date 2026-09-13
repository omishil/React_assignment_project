import logoImg from "../assets/logo-text.png"
export function Nav(){
    return(
       <>
<div className="nav sticky top-0 z-50 pt-5 w-[85%] flex justify-between m-auto text-black">            <img src={logoImg} alt="" />
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




       </div>
       
       </>
    )
}