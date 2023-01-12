
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom";
import Image from './Image';
import Menubar from './Menubar';
import ModelCards from './ModelCards';
import Welcome from './pages/Wecome';
import Right from './pages/Right';
import Cards from './Cards';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><>
    <Menubar></Menubar>
    <Image></Image>
    <ModelCards></ModelCards>
    
    </></div>,
  },
  {
     path: "/Right",
     element: <>
     <Menubar></Menubar>
     <Right></Right>
     </>
  },
  

  {
    path: "/Welcome",
    element: <>
    <Menubar></Menubar>
    <Cards></Cards>
    <Welcome></Welcome>
   
    </>
  }
]);




ReactDOM.render(
  <>
<RouterProvider router={router} />
  </>
 ,
  document.getElementById('root')
);