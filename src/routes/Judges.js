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
            <p class="italic">
              Founder, The Economics Tutor
            </p>
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
              <h2 class="text-xl text-gray-800 font-bold">Mr. Dennis Goh</h2>
            <br></br>
            <p class="italic">
            Co-Founder and Executive Chairman of Lyte Ventures
            </p>
            <br></br>
            <p>Dennis Goh is the Co-Founder and Executive Chairman 
              of Lyte Ventures, Southeast Asia’s largest FinTech company for 
              freelancer solutions. A former Deputy Head of the Strategic Policy 
              Office for the Singapore Government, Dennis graduated from the 
              London School of Economics with First Class Honors in Economics 
              and the University of Cambridge with a Masters in Economics. </p>
              <br></br>
              <p>He has amassed a wealth of experience in the venture capital and 
              entrepreneurial space, having been a partner at Wavemaker Partners 
              as well as founding HungryGoWhere.com in 2006, a social media 
              platform in Singapore with more than 1.5 million monthly users.</p>
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
