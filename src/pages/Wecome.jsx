import React,{useState} from "react";
//import { useLocation } from 'react-router-dom';
import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:8000/model/predict" 
  });

function ModelDetails(){
  // {
  //   "models": "xgboost",
  //   "tns": ["a","b", "c"],
  //   "ons": "qtr",
  //   "moURI": "mongo:srv;//"
  // }
    //const {state} = useLocation();
    //const { model } = state;
    const [moURI, setMoURI] = useState([]);
    const [tns, setTNS] = useState([]);
    const [ons, setONS] = useState([]);
    const [models, setModels] = useState([]);
    const [showText, setShowText] = useState(false);
    
    const callAPI = (event) => {
       event.preventDefault();
       
        var tnsList = tns.split(',');
        var data = {
          models: models,
          moURI: moURI,
          tns: tnsList,
          ons: ons,
       }
       console.log("firing call", data)
        client
           .post('', data)
           .then((response) => {
               console.log(response)
               setShowText(true)
              //setPosts([response.data, ...posts]);
           });
     };


    return <>
        <div class="flex justify-center block rounded-lg shadow-lg bg-white my-20 ml-[-200px] mt-[-7950px] w-[1000px]">
  <form onSubmit={(e)=>callAPI(e)}>
    <div class="form-group mb-6">
      <label for="exampleInputEmail1" class="form-label inline-block mb-2 text-gray-700">MongoURI</label>
      <input type="password" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
        onChange={(e) => setMoURI(e.target.value)}
        aria-describedby="emailHelp" placeholder="Mongo URI"/>
    </div>
    <div class="form-group mb-6">
      <label for="exampleInputEmail1" class="form-label inline-block mb-2 text-gray-700">Time Series NS</label>
      <input type="text" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
        onChange={(e) => setTNS(e.target.value)}
        aria-describedby="emailHelp" placeholder="TimeSeries Collections"/>
    </div>
    <div class="form-group mb-6">
      <label for="exampleInputEmail1" class="form-label inline-block mb-2 text-gray-700">Output NS</label>
      <input type="text" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
        aria-describedby="emailHelp" placeholder="Output NS"
        onChange={(e) => setONS(e.target.value)}/>
    </div>
    <div class="form-group mb-6">
      <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-gray-700">Models</label>
      <input type="text" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
        placeholder="Models"
        onChange={(e) => setModels(e.target.value)}
        />
    </div>
    <div class="form-group form-check mb-6">
      <input type="checkbox"
        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        id="exampleCheck1"/>
      <label class="form-check-label inline-block text-gray-800" for="exampleCheck1">Retrain with input data</label>
    </div>
    
    <button type="submit" class="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out mb-20">Predict</button>
  </form>
      </div>
    
    </>
      
}

export default ModelDetails;