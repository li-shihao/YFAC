export default function Sponsors() {
  return (
    <div className="mt-20 bg-emerald-50 flex justify-center">
      <div className="flex justify-center items-center flex-col lg:flex-row lg:justify-between lg:px-20 max-w-7xl font-Inter py-20 w-full px-5">
        <h3 className="text-emerald-900 text-4xl font-extrabold text-center leading-relaxed">
          2022 Sponsors
        </h3>
        <div className="flex flex-row mt-14 justify-center gap-14 md:gap-60 lg:gap-36 w-full lg:w-auto lg:mt-0">
          <a
            class="w-full h-full"
            href="https://www.theeconomicstutor.com/"
            target="_blank"
          >
            <img class="max-h-20" src={require("./Tutor.png")}></img>
          </a>
          <a
            class="w-full h-full"
            href="https://www.thebaummovement.org/"
            target="_blank"
          >
            <div className="flex flex-row items-center">
              <img class="max-h-20" src={require("./Baum.png")}></img>
              <span class="text-emerald-900 font-bold text-2xl ml-2">BAUM</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
