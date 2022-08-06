export default function CTA() {
  return (
    <div className="flex flex-row justify-center mt-20">
      <div className="flex justify-center items-center flex-col lg:flex-row max-w-7xl">
        <div class="lg:w-full flex justify-center items-center flex-col lg:flex-row lg:mx-10">
          <div className="overflow-hidden rounded-2xl max-w-4xl aspect-video flex items-center lg:max-w-md -mb-24 z-10 shadow-2xl w-8/12 lg:w-test2 lg:-mb-0 lg:-mr-32 lg:aspect-square ">
            <img
              className="object-cover"
              src="https://unsplash.com/photos/0NJ9urGXrIg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8c3VzdGFpbmFibGV8ZW58MHwxfHx8MTY1OTYwMjI4Mw&force=true"
            ></img>
          </div>
          <div className="-z-1 flex  flex-col font-Inter rounded-2xl bg-emerald-600 max-w-5xl lg:max-w-none text-white px-10 pt-32 lg:pb-24 lg:pt-24 pb-10 shadow-lg shadow-emerald-300 w-11/12 lg:w-auto lg:h-auto lg:max-h-96 lg:pl-44 lg:pr-24">
            <h4 className="font-extrabold text-4xl lg:text-3xl">
              Sustainable Investing
            </h4>
            <p className="my-5 text-md">
              YFAC 2022 is about sustainability. How can we invest in the future
              of our planet? This year, participants will incorporate
              Environmental, Social, and Governance (ESG) perspectives into
              their investment analyses.
            </p>
            <div className="flex justify-center w-full lg:justify-start">
              <a
                href="https://www.thebaummovement.org/sustainable-investing"
                class="w-full"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-white px-20 lg:px-10 py-3 hover:bg-gray-200 w-full text-emerald-600  text-md font-medium rounded-lg shadow-lg lg:w-auto">
                  Learn more
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
