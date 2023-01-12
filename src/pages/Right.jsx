import React from "react";
import Records1 from "./resp1.json";
import { Navigate, useNavigate } from "react-router-dom";
function Right(){
    const goToRight = () => {
        Navigate("/Welcome");
    }
    const Navigate = useNavigate();
    return <>
 <br></br>   <b><h1 className="text-[30px] ml-[620px]">Explore Models</h1></b><br></br>
    <div class="h-56 grid grid-cols-3 gap-4 content-start ml-[40px]" onClick={() => goToRight()}>
   {
    Records1.map(record1 => {
        return (
            
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm " >
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2 ml-[40px] ">{record1.base_model}</h5>
    <p class="text-gray-700 text-base mb-4">
    </p>
    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-[120px]">Try it</button>
  </div>

        )
    })
   }
   </div>
    </>
}
export default Right