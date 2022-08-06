import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="p-4 bg-white md:px-6 md:py-8 ">
      <div class="flex justify-center lg:justify-between">
        <Link to="/">
          <a href="" class="lg:flex hidden items-center mb-4 sm:mb-0">
            <div className="flex justify-start lg:flex-1">
              <svg viewBox="0 0 193 261" class="fill-emerald-900 w-10 h-14">
                <path d="M193,144v79c-20.23,11.93-40.4,24-60.79,35.64a9.85,9.85,0,0,1-8.24-.13c-39.6-22.7-79-45.69-118.55-68.53C2.16,188.1.73,185.74.74,182q.11-69.22,0-138.46c0-3.83,1.49-6.15,4.72-8Q33.65,19.35,61.71,3C65.43.8,68.63.65,72.4,2.89,91.32,14.1,110.41,25,129.23,36.4c2,1.23,3.8,4.73,3.83,7.2.25,20.15.12,40.31-.07,60.47,0,4,1.6,6.37,5,8.34,16,9.27,31.88,18.76,47.84,28.1C188.11,141.85,190.6,142.85,193,144ZM17.28,41.88c1.07.55,1.68.83,2.25,1.17,14.89,8.8,29.72,17.71,44.75,26.26,1.66.94,4.92.53,6.72-.5C85.44,60.56,99.71,52,114,43.53a24.24,24.24,0,0,0,2.71-2.21A12.25,12.25,0,0,0,115,39.78c-14.69-8.49-29.3-17.12-44.19-25.25-2.08-1.13-6-.73-8.2.49C48.68,22.77,35,31,21.18,39A47.77,47.77,0,0,0,17.28,41.88ZM12,103.12l45-26L12,51.13Zm0,19.5v52l44.54-26.2ZM118,112.5,73,86.6v52ZM77.93,77.13,123,103.58V51.1ZM16.2,183.78,61,210V157.87Zm122.86.15L184,210.18V157.89ZM17.53,112.66,62,138.57V86.69ZM123,193.41,78.42,219.47l44.58,26ZM77.59,148.46,122,174.29V122.53Zm56.41,45v51.81l44.9-25.86Zm44.53-45.45L134,122.39v51.76ZM115.8,183,73,158.16v51.45l42.8-24.84Z" />
              </svg>
            </div>
          </a>
        </Link>
        <ul class="flex flex-wrap lg:flex-row flex-col items-center text-sm text-gray-500 sm:mb-0 gap-3">
          <li>
            <a
              href="https://static1.squarespace.com/static/60d2ddc037c96b172303e14b/t/60dd1afab016d058bb2cff7b/1625103099114/YFAC+2021+Privacy+Policy_.pdf"
              class="lg:mr-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://static1.squarespace.com/static/60d2ddc037c96b172303e14b/t/60dc7b9ecc33482b8e3b45b5/1625062302524/YFAC+2021+Terms+and+Conditions.pdf"
              class="lg:mr-4 hover:underline "
              rel="noreferrer"
            >
              Terms and Conditions
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://static1.squarespace.com/static/60d2ddc037c96b172303e14b/t/60e3c425f5f9156374dd86f9/1625539621831/YFAC+Ambassador+Terms+and+Conditions+%281%29.pdf"
              class="lg:mr-4 hover:underline "
              rel="noreferrer"
            >
              Ambassador Terms and Conditions
            </a>
          </li>
          <li>
            <a href="mailto:contact@yfa-comp.com" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span class="block text-sm text-gray-500 text-center">
        © 2022{" "}
        <a href="" class="hover:underline">
          BAUM Movement
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
