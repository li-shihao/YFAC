import Nav from "../Nav";
import Footer from "../Footer";
import React from "react";

export default function Judges() {
  return (
    <React.Fragment>
      <Nav />
      <div className="flex flex-row justify-center py-20 border-b border-gray-200">

        <div className="flex justify-center flex-col max-w-4xl font-Inter">
          <h4 className="text-emerald-600 font-bold text-center">JUDGES</h4>
          <div className="flex flex-col pt-8 justify-center lg:flex-row">
            <div className="flex-col mx-8">
            <h2 class="text-xl text-gray-800 font-bold">Mr. Kelvin Hong</h2>
            <br></br>
            <p>Kelvin is a serial entrepreneur who founded 
              and sold off numerous companies before returning
              to his early passions of teaching and economics. 
              It is no surprise that he has been teaching his 
              students to apply economics beyond exams - to 
              investments, entrepreneurship and life decisions. 
              Kelvin was part of the Administrative Service of 
              the Singapore Government before he embarked on 
              his entrepreneurship journey.</p>
              <br></br>
              <h2 class="text-xl text-gray-800 font-bold">Check back soon for the full judge lineup!</h2>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
