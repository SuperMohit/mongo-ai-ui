import React from "react";
import './index.css';
import { Navigate, useNavigate } from "react-router-dom";
import cat_pic from "./images/img_cat.jpeg";
import obj_pic from "./images/obj_det.jpeg";
import text_pic from "./images/text_img.png";
import reg_pic from "./images/regression.png";

function ModelCards()
{
 const goToWelcome = (m) => {
        Navigate("/Right", { state: { model : m } });
    }
 const Navigate = useNavigate();
    return <>
     <div className="text-[35px] ml-[620px]"><b>Explore Models</b></div><br></br><br></br>
    <div class="flex flex-nowrap">
  <div><div id="i_c" class="max-w-sm rounded overflow-hidden shadow-lg" onClick={(e) => goToWelcome(e.id)}>
  <img class="w-full h-[220px]" src={cat_pic} alt="Image Classification"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 ml-[60px]">Image Classification</div>
    <p class="text-gray-700 text-base">
    Image classification is the task of assigning a label or class to an entire image. Images are expected to have only one class for each image. Image classification models take an image as input and return a prediction about which class the image belongs to.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ai-ml</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#mongodb</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#classifier</span>
  </div>
</div></div>
  <div><div id="o_d" class="max-w-sm rounded overflow-hidden shadow-lg" onClick={(e) => goToWelcome(e.id)}>
  <img class="w-full" src={obj_pic} alt="Object Detection"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 ml-[80px]">Object Detection</div>
    <p class="text-gray-700 text-base">
    Object Detection models allow users to identify objects of certain defined classes. Object detection models receive an image as input and output the images with bounding boxes and labels on detected objects.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#vision</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#images</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#detection</span>
  </div>
</div></div>
  <div><div id="t_c" class="max-w-sm rounded overflow-hidden shadow-lg" onClick={(e) => goToWelcome(e.id)}>
  <img class="w-full h-[240px]" src={text_pic} alt="Text Classification"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 ml-[90px]">Text Classification</div>
    <p class="text-gray-700 text-base">
    Text Classification is the task of assigning a label or class to a given text. Some use cases are sentiment analysis, natural language inference, and assessing grammatical correctness.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#text</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sentiment</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nlp</span>
  </div>
</div>
</div>
<div><div id="t_s" class="max-w-sm rounded overflow-hidden shadow-lg" onClick={(e) => goToWelcome(e.id)}>
  <img class="w-full h-[310px]" src={reg_pic} alt="Time Series Prediction"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 ml-[60px]">Time Series Regression</div>
    <p class="text-gray-700 text-base">
    Numerical Regression is the task of predicting a numerical value given a set of attributes.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#regression</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#prediction</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#xgboost</span>
  </div>
</div></div>
</div>
            
            
          </>  
                
}

export default ModelCards;