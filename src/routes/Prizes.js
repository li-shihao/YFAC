import Nav from "../Nav";
import Footer from "../Footer";
import React from "react";

export default function Prizes() {
  return (
    <React.Fragment>
      <Nav />


          <div className="flex flex-row justify-center mt-20">
      <div className="flex justify-center items-center flex-col max-w-7xl font-Inter">
        <h4 className="text-emerald-600 font-bold">PRIZES</h4>
        <div className="flex flex-col items-center lg:flex-row gap-10">
          <div className="lg:order-2 -z-1 mt-2 flex  flex-col font-Inter rounded-2xl overflow-hidden bg-white max-w-5xl lg:max-w-none text-black lg:pb-10 pb-10 border-2 border-gray-200 shadow-md w-11/12 lg:w-1/3">
            <div className="overflow-hidden lg:overflow-visible">
              <img src="https://htmlcolorcodes.com/assets/images/colors/gold-color-solid-background-1920x1080.png"></img>
            </div>
            <div className="pt-10 px-10">
              <h4 className="font-extrabold text-4xl lg:text-3xl text-center">1st Prize</h4>
              <p className=" text-lg text-gray-500 mt-5 text-center">
                S$800
              </p>
              
            </div>
          </div>
          <div className="lg:order-1 -z-1 mt-10 flex  flex-col font-Inter rounded-2xl overflow-hidden bg-white max-w-5xl lg:max-w-none text-black lg:pb-10 pb-10 border-2 border-gray-200 shadow-md w-11/12 lg:w-1/3">
            <div className="overflow-hidden">
              <img src="https://htmlcolorcodes.com/assets/images/colors/silver-color-solid-background-1920x1080.png"></img>
            </div>
            <div className="pt-10 px-10">
              <h4 className="font-extrabold text-4xl lg:text-3xl text-center">
                2nd Prize
              </h4>
              <p className=" text-lg text-gray-500 mt-5 text-center">
                S$400
              </p>
            </div>
          </div>
          <div className="lg:order-3 -z-1 mt-10 flex  flex-col font-Inter rounded-2xl overflow-hidden bg-white max-w-5xl lg:max-w-none text-black lg:pb-10 pb-10 border-2 border-gray-200 shadow-md w-11/12 lg:w-1/3">
            <div className="overflow-hidden">
              <img src="https://htmlcolorcodes.com/assets/images/colors/bronze-color-solid-background-1920x1080.png"></img>
            </div>
            <div className="pt-10 px-10">
              <h4 className="font-extrabold text-4xl lg:text-3xl text-center">
                3rd Prize
              </h4>
              <p className=" text-lg text-gray-500 mt-5 text-center">
                S$100
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>          

       
      <Footer />
    </React.Fragment>
  );
}
