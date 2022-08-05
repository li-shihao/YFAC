export default function Sponsors() {
  return (
    <div className="mt-20 bg-blue-50 flex justify-center">
      <div className="flex justify-center items-center flex-col lg:flex-row lg:justify-between lg:px-20 max-w-7xl font-Inter py-20 w-full px-5">
        <h3 className="text-blue-900 text-4xl font-extrabold text-center leading-relaxed">
          2022 Sponsors
        </h3>
        <div className="flex flex-row mt-14 justify-center gap-14 md:gap-60 lg:gap-36 w-full lg:w-auto lg:mt-0">
          <img class="max-h-20" src={require("./Tutor.png")}></img>
          <div className="flex flex-row items-center">
            <img class="max-h-20" src={require("./Baum.png")}></img>
            <span class="text-blue-900 font-bold text-2xl ml-2">BAUM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
