import React from "react";
import './index.css';
function Image(){
    return <>
    <div class="flex items-center">
    <div class="flex items-center justify-between h-400 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md">
        <div class="flex flex-col w-screen">
        <div class="p-5">
            <span class="block text-center px-4 py-2">Create Powerful AI models</span>
            <span class="block text-center px-4 py-2">Use pre-trained Models.</span>
            <span class="block text-center px-4 py-2 mt-2">Analyse using Atlas Charts</span>
            <span class="block text-center px-4 py-2 mt-2">Without moving your data across security boundaries</span>
            <span class="block text-center px-4 py-2 mt-2"> <button class="px-4 py-2 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold border border-blue-700 rounded">Start Now</button></span>
        </div>
        </div>
        <img class="h-full py-2 pr-4 ml-" src="https://staqo.com/wp-content/uploads/2021/09/AI-ML-image-uai-720x405-1.jpg"></img>
    </div>
    </div>
</>
    
}

export default Image;