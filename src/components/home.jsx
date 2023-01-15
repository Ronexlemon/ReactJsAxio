import React from "react";
import axios from "axios";

const Home=()=>{
    axios.get("")
    return(
        <div className="flex flex-row justify-between bg-black  h-screen w-full  text-white ">
           <div className=" h-1/2 w-1/2 min-h-0  bg-yellow-400 m-10 rounded-2xl ">
            
           

           </div>
           <div className="flex flex-col justify-between bg-green-400 m-10 h-3/4 w-1/4 rounded-xl">
            <div>
                <h1>div 1</h1>
            </div>
            <div>
                <h1>div 2</h1>
            </div>
            <div>
                <h1>div 3</h1>
            </div>

           </div>

        </div>
    )
}
export default Home;