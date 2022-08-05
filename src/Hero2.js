import Lottie from "react-lottie-player";

import tree from "./tree.json";

export default function Hero() {
  return (
    <div>
      <div>
        <div className="font-Inter max-w-7xl mx-auto flex flex-col lg:flex-row border-b-4 border-gray-100 items-end lg:gap-6">
          <div className="z-1 lg:max-w-2xl lg:w-full pb-10 lg:pb-20">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    Youth Financial Analysis Competition
                  </span>{" "}
                  <span className="block text-emerald-600 xl:inline">2022</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  The Youth Financial Analysis Competition is a free,
                  international stock pitch event for high school students.
                  Participants work individually or in teams of up to 4 to
                  compete for a $800 cash prize. Join youths from over 10
                  countries today, or become a YFAC ambassador for your country!
                </p>
              </div>
            </main>
          </div>
          <div className="w-full h-full px-4 md:px-10">
            <Lottie
              loop
              animationData={tree}
              play
              rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
