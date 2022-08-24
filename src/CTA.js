export default function CTA() {
  return (
    <div className="flex flex-row justify-center mt-20">
      <div className="flex justify-center items-center flex-col lg:flex-row max-w-7xl">
        <div class="lg:w-full flex justify-center items-center flex-col lg:flex-row lg:mx-1">
          <div className="mx-5 overflow-hidden rounded-2xl max-w-4xl aspect-video flex items-center lg:max-w-md -mb-24 z-10 shadow-2xl w-8/12 lg:w-test2 lg:-mb-0 lg:-mr-32 lg:aspect-square ">
            <img
              className="object-cover"
              src="https://unsplash.com/photos/0NJ9urGXrIg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8c3VzdGFpbmFibGV8ZW58MHwxfHx8MTY1OTYwMjI4Mw&force=true"
            ></img>
          </div>
          <div className="-z-1 flex mx-5 flex-col font-Inter rounded-2xl bg-emerald-600 max-w-5xl lg:max-w-none text-white px-10 pt-32 lg:pb-14 lg:pt-14 pb-5 shadow-lg shadow-emerald-300 w-11/12 lg:w-auto lg:h-auto lg:pl-44 lg:pr-24">
            <h4 className="font-extrabold text-4xl lg:text-3xl">
              Sustainable Investing
            </h4>
            <p className="my-3 lg:text-md leading-relaxed text-xl pt-2 pb-4">
              YFAC 2022 is about sustainability. How can we invest in the future
              of our planet? This year, participants will incorporate
              Environmental, Social, and Governance (ESG) perspectives into
              their investment analyses.
              <br></br>
              <br></br>
              YFAC 2022 is organized in conjunction with The BAUM Movement, 
              which aims to educate and encourage Gen Z-ers to steward our world 
              through sustainable investing. 
            </p>
            <div className="flex justify-center w-full lg:justify-start">
              <a
                href="https://www.thebaummovement.org/sustainable-investing"
                class="w-full"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-white px-20 lg:px-10 py-3 mb-5 lg:mb-0 hover:bg-gray-200 w-full text-emerald-600 text-xl lg:text-md font-medium rounded-lg shadow-lg lg:w-auto">
                  Learn more
                </button>
              </a>
            </div>
            <p className="mt-5">
              Or{" "}<a href="mailto:contact@yfacomp.com" class="hover:underline">
              email us
            </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
