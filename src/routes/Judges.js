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
            <div className="lg:text-xl text-3xl flex-col mx-8">
            <br></br>

            <h2 class="text-gray-800 font-bold">Mr. Kelvin Hong</h2>            
            <br></br>
            <p class="leading-relaxed">Kelvin is a serial entrepreneur who founded 
              and sold off numerous companies before returning
              to his early passions of teaching and economics. 
              It is no surprise that he has been teaching his 
              students to apply economics beyond exams - to 
              investments, entrepreneurship and life decisions. 
              Kelvin was part of the Administrative Service of 
              the Singapore Government before he embarked on 
              his entrepreneurship journey.</p>
              <br></br>
              <br></br>

              <h2 class="text-gray-800 font-bold">Mr. Dennis Goh</h2>
            <br></br>
            <p class="leading-relaxed">Dennis is the Co-Founder and Executive Chairman 
              of Lyte Ventures, Southeast Asia’s largest FinTech company for 
              freelancer solutions. A former Deputy Head of the Strategic Policy 
              Office for the Singapore Government, Dennis graduated from the 
              London School of Economics with First Class Honors in Economics 
              and the University of Cambridge with a Masters in Economics. </p>
              <br></br>
              <p class="leading-relaxed">He has amassed a wealth of experience in the venture capital and 
              entrepreneurial space, having been a partner at Wavemaker Partners 
              as well as founding HungryGoWhere.com in 2006, a social media 
              platform in Singapore with more than 1.5 million monthly users.</p>
              <br></br>
              <br></br>

              <h2 class="text-gray-800 font-bold">Ms. Yinshan Loh</h2>
            <br></br>
            <p class="leading-relaxed">Yinshan Loh is a social change entrepreneur,
            former central banker, and passionate behavioural economist. 
            A former Assistant Director at the Monetary Authority of Singapore, 
            Yinshan has a decade of experience in developing Singapore’s $200 billion government 
            and leading nation-wide initiatives in both digital transformation and financial 
            literacy. She was an Assistant Secretariat of a committee which oversaw the 
            formulation and implementation of monetary policy and the investment of the MAS’ reserves.
              <br></br>
              <br></br>

              <p class="leading-relaxed">Yinshan graduated from UC Berkeley with First Class 
              Honours in Economics and Psychology, and the University of 
              Cambridge with a Distinction in MBA. A British Chevening Award Scholar, 
              Cambridge Trust Scholar, and BCG MBA Fellow, she has won various 
              awards for her published research. </p>
            </p>
              <br></br>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
