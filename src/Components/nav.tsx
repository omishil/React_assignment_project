import logoImg from "../assets/logo-text.png"
export function Nav(){
    return(
       <>
       <div className="nav w-[85%] flex justify-between m-auto text-black">
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
  Sign out
</button>        </div>




       </div>
       
       
       </>
    )
}