import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

const Home=()=>{
    const [items,setItems] = useState({});
    const getAllCats = async () => {
        try {
            const response = await axios.get("https://cat-fact.herokuapp.com/facts/");
            setItems(response.data);
            console.log("the response is", response.data);
        } catch (error) {
            console.log("error is",error);
        }
    };


useEffect(()=>{
    getAllCats();
    
},[])

    return(
        <div className="flex flex-row justify-between bg-black  h-screen w-full  text-white ">
           <div className=" h-1/2 w-1/2 min-h-0  overflow-scroll scrollbar-none  bg-yellow-400 m-10 rounded-2xl ">
           {items.length > 0 ?
    items.map((item,index)=>(
        <div key={item.index} className="grid grid-cols-3 gap-2   w-full mt-3 rounded-lg bg-slate-400 p-2">
            <h4  >Description: {item.text}</h4><br/>
            <h3>id: {item._id}</h3>
            <h3>updatedAt : {item.updatedAt}</h3>
            <h3>Deleted : {item.deleted}</h3>
        </div>
        
    ))
    : <p>Loading...</p>
}

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