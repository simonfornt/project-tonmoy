import Hamberger from "./Hambeger";

function Navbar(){
    return(
        <>
            <div className="flex justify-between mx-10  py-4 items-center">
                <div className="text-xl font-bold">Uddagon</div>
                <div>
                    <ul className="hidden md:flex justify-between items-center gap-4 font-semibold">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About US</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
                <div className="flex gap-4  py-2 px-4 ">
                    <button>Login</button>
                    <button>but2</button>
                </div>
                
            </div>
        </>
    )
}

export default Navbar;