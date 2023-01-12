import React from "react";
import './index.css';
import Records from './resp.json';

function Cards(){
    return <>
    {
        Records.map(record => {
            return (
                <div>
             <div class="flex flex-col w-screen">  
<div className="ml-[950px] overflow-y-scroll">
  <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center "><br></br>
    <div class="py-3 px-6 border-b border-gray-300  ">
    {record.dataset_file_name}
    </div>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{record.base_model}</h5>
      <p class="text-gray-700 text-base mb-4">
      
      </p>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-700 mr-2 mb-2 text-[#1CB92D]">{record.status}</span>
    </div>
    <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
    {record.updated}
    </div>
  </div>
</div>
<br></br>
                </div>
                </div> 
            )
        })
    }
    </>
}

export default Cards