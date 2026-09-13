import logo from "../assets/logo-text.png"
export function Footer(){
    return(
<div>
<hr className="border-gray-300 mt-10" />

<footer className="mt-20 w-[85%] h-fit flex justify-between text-black m-auto">
<div className="col w-[55%] flex flex-col gap-5">
<img src={logo} alt=""  className="w-[130px]"/>
<p className="text-gray-500">Curated toools technologies and resourses for developers building modern software
    </p><div className="anc flex gap-2 text-gray-700">
    <a href="https://github.com">GitHub</a>
    <a href="https://twitter.com">Twitter</a>
    <a href="https://www.linkedin.com">LinkedIn</a>
</div>
</div>
<div className="col flex flex-col gap-5">
<h1>PRODUCT</h1>
<div className="text-gray-400 flex flex-col gap-3">
<a href="">Home</a>
<a href="">Technologies</a>
<a href="">Projects</a>
</div>
</div>
<div className="col">
<h1>COMPANY</h1>
<div className="text-gray-400 flex flex-col gap-3">
<a href="">About</a>
<a href="">Contact</a>
<a href="">Careers</a>
</div>

</div>
<div className="col"><h1>LEGAL</h1>
<div className="text-gray-400 flex flex-col gap-3">
<a href="">Privacy Policy</a>
<a href="">Terms of Service</a>
</div>
</div>
</footer>
<div className="fooot text-gray-400        w-[85%] m-auto mt-10 flex justify-between  text-black">
    <p>© 2026 Dev Stack. All rights reserved.</p>
    <div className="flex gap-5">
        <a href="">Privacy</a><a href="">Terms</a>
    </div>
</div>
</div>

        
    )
}