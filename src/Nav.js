import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <Popover className="relative bg-transparent z-20">
      <div className=" mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          {/*logo*/}
          <Link to="/">
          <div className="flex flex-row justify-start lg:flex-1">
            <svg viewBox="0 0 388.15 587.41" class="fill-emerald-900 w-10 h-14 mr-5">
            <path class="cls-1" d="M302.3,21.35a65.26,65.26,0,0,1,65,65V501.76a65.26,65.26,0,0,1-65,65H86.14a65.26,65.26,0,0,1-65-65V86.35a65.26,65.26,0,0,1,65-65H302.3m0-21H86.14a86.25,86.25,0,0,0-86,86V501.76a86.25,86.25,0,0,0,86,86H302.3a86.25,86.25,0,0,0,86-86V86.35a86.25,86.25,0,0,0-86-86Z" transform="translate(-0.14 -0.35)"/>
            <path class="cls-1" d="M21,465.12a89,89,0,0,1,41.73-25.78c5.78-1.6,10-2.12,17-3,14.21-1.77,18.64-.88,27.45-1.69a99.42,99.42,0,0,0,40.16-12.91,79.22,79.22,0,0,0,23-19.06,76.75,76.75,0,0,0,14-26.77V323.39c-1.13-2.45-2.83-6-5.07-10.13-6.61-12.21-11-20.24-18.85-26.38a43.66,43.66,0,0,0-19.35-8.54c-21.75-3.46-38.79,13.42-41,15.71L85.78,280.87s5.31-12.14,38.24-23c0,0-22.26-19.26-79.69-16.33v-22.6s86.35-8.3,140,62.25V232.05A177.9,177.9,0,0,0,145.28,196C95.35,162.32,41.9,164,20.94,165.86L20.7,144.8c4.94-.5,10.12-.85,15.52-1a225.37,225.37,0,0,1,42.17,2.69s-11.47-12-12.86-44.31H87.77s-3.47,35.1,36.15,57.7c0,0,31.73,11.81,60.45,38.93V132.05S165.81,75.39,90,61.14L94.9,40.63s48.94,3.13,89.47,49V37.85h20V146.3s27.8-32.33,46.92-42.41c0,0,23.64-15.29,23.64-47.61l21.2-1.74s4.52,3.47-5.56,34.06A137.91,137.91,0,0,1,307.69,84a143.38,143.38,0,0,1,59.76.83v22.63c-11.9-2.81-50.13-10.24-92.21,8.91-46.66,21.25-66.13,60.66-70.85,71V247.1s16-21.9,45.88-32.67a121.37,121.37,0,0,1,28.4-36.85c34.65-30.29,76.28-30.83,88.7-30.52l0,21.52a89.43,89.43,0,0,0-28.19,1c-31,6.15-49.74,27.35-56.2,35.45A164.82,164.82,0,0,1,307,203a168.32,168.32,0,0,1,60.33,10.51q0,11.6,0,23.21A127.27,127.27,0,0,0,306,224.81c-60.78,3.85-96.22,52.23-101.6,59.83v61.52S225.94,421.24,277,432c3.82,0,9.06.16,15.28.56,5.24.33,11.93.76,18.51,1.83a112.86,112.86,0,0,1,29.52,9.29,123.52,123.52,0,0,1,27,16.94q0,16.8.05,33.62a82.42,82.42,0,0,0-13.86-16.79c-19-17.57-41.33-21.44-51.46-22.51-3.06-.13-7.59-.39-13.06-.94a210.39,210.39,0,0,1-32.59-5.8c-26-7.52-50.28-46.42-53.07-50.95l.78,41.19a31.13,31.13,0,0,0,4,11.82,31.66,31.66,0,0,0,7.8,8.8c10.14,8.13,23.87,11.22,27.43,12,16.9,3.66,32.08,6.6,46,9,0,0,47,3.59,77.84,41.56v29.26H353.05v-3.84s2.09-33.78-77.33-47a118,118,0,0,1,6.92,15.52,122.88,122.88,0,0,1,6.76,51.31H268a81.77,81.77,0,0,0-3.55-35.07c-9-27-29.75-40.88-36.49-45,0,0-21.6-2.09-36.58-23.34,0,0-2.44,8.36-25.08,24.39a104,104,0,0,0-17.68,20.05c-15.56,23.09-17.91,46.83-18.19,59l-23.7,0A148.91,148.91,0,0,1,110,543.92a152.3,152.3,0,0,1,20.47-49.09s-63.75,2.09-75.94,65.49L34.66,548.13S49.3,475,133.59,473.93c0,0,51.91-5.22,50.51-57.13a104.27,104.27,0,0,1-28.42,23.88c-21.24,12-43.76,14.44-54.48,15.49-17.41,1.7-23.35-.52-36.35,4.44A71.16,71.16,0,0,0,40.78,476a72.79,72.79,0,0,0-20,36.56Q20.91,488.84,21,465.12Z" transform="translate(-0.14 -0.35)"/>
            <path class="cls-1" d="M627.37,199.51" transform="translate(-0.14 -0.35)"/>
            </svg>
              <svg viewBox="0 0 193 261" class="fill-emerald-900 w-10 h-14">
                <path d="M193,144v79c-20.23,11.93-40.4,24-60.79,35.64a9.85,9.85,0,0,1-8.24-.13c-39.6-22.7-79-45.69-118.55-68.53C2.16,188.1.73,185.74.74,182q.11-69.22,0-138.46c0-3.83,1.49-6.15,4.72-8Q33.65,19.35,61.71,3C65.43.8,68.63.65,72.4,2.89,91.32,14.1,110.41,25,129.23,36.4c2,1.23,3.8,4.73,3.83,7.2.25,20.15.12,40.31-.07,60.47,0,4,1.6,6.37,5,8.34,16,9.27,31.88,18.76,47.84,28.1C188.11,141.85,190.6,142.85,193,144ZM17.28,41.88c1.07.55,1.68.83,2.25,1.17,14.89,8.8,29.72,17.71,44.75,26.26,1.66.94,4.92.53,6.72-.5C85.44,60.56,99.71,52,114,43.53a24.24,24.24,0,0,0,2.71-2.21A12.25,12.25,0,0,0,115,39.78c-14.69-8.49-29.3-17.12-44.19-25.25-2.08-1.13-6-.73-8.2.49C48.68,22.77,35,31,21.18,39A47.77,47.77,0,0,0,17.28,41.88ZM12,103.12l45-26L12,51.13Zm0,19.5v52l44.54-26.2ZM118,112.5,73,86.6v52ZM77.93,77.13,123,103.58V51.1ZM16.2,183.78,61,210V157.87Zm122.86.15L184,210.18V157.89ZM17.53,112.66,62,138.57V86.69ZM123,193.41,78.42,219.47l44.58,26ZM77.59,148.46,122,174.29V122.53Zm56.41,45v51.81l44.9-25.86Zm44.53-45.45L134,122.39v51.76ZM115.8,183,73,158.16v51.45l42.8-24.84Z" />
              </svg>
            </div>
          </Link>
          {/*burger*/}
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          {/*center*/}
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link to="/">
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </a>
            </Link>
            <Link to="/ambassador">
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Become Ambassador
              </a>
            </Link>
            <Link to="/prizes">
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Prizes
            </a>
            </Link>
            <Link to="/guide">
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Competition Guidelines
              </a>
            </Link>
            <Link to="/judges">
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Judges
              </a>
            </Link>
            <Link to="/faq">
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                FAQ
              </a>
            </Link>
          </Popover.Group>
          {/*buttons*/}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="https://form.jotform.com/222827796048064" target="_blank"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700"
            >
              Watch the live finals
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {/*mobile pop*/}
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex flex-row items-center justify-between">
                <Link to="/">
                  <div className="flex flex-row">
                  <svg viewBox="0 0 388.15 587.41" class="fill-emerald-900 w-10 h-14 mr-5">
            <path class="cls-1" d="M302.3,21.35a65.26,65.26,0,0,1,65,65V501.76a65.26,65.26,0,0,1-65,65H86.14a65.26,65.26,0,0,1-65-65V86.35a65.26,65.26,0,0,1,65-65H302.3m0-21H86.14a86.25,86.25,0,0,0-86,86V501.76a86.25,86.25,0,0,0,86,86H302.3a86.25,86.25,0,0,0,86-86V86.35a86.25,86.25,0,0,0-86-86Z" transform="translate(-0.14 -0.35)"/>
            <path class="cls-1" d="M21,465.12a89,89,0,0,1,41.73-25.78c5.78-1.6,10-2.12,17-3,14.21-1.77,18.64-.88,27.45-1.69a99.42,99.42,0,0,0,40.16-12.91,79.22,79.22,0,0,0,23-19.06,76.75,76.75,0,0,0,14-26.77V323.39c-1.13-2.45-2.83-6-5.07-10.13-6.61-12.21-11-20.24-18.85-26.38a43.66,43.66,0,0,0-19.35-8.54c-21.75-3.46-38.79,13.42-41,15.71L85.78,280.87s5.31-12.14,38.24-23c0,0-22.26-19.26-79.69-16.33v-22.6s86.35-8.3,140,62.25V232.05A177.9,177.9,0,0,0,145.28,196C95.35,162.32,41.9,164,20.94,165.86L20.7,144.8c4.94-.5,10.12-.85,15.52-1a225.37,225.37,0,0,1,42.17,2.69s-11.47-12-12.86-44.31H87.77s-3.47,35.1,36.15,57.7c0,0,31.73,11.81,60.45,38.93V132.05S165.81,75.39,90,61.14L94.9,40.63s48.94,3.13,89.47,49V37.85h20V146.3s27.8-32.33,46.92-42.41c0,0,23.64-15.29,23.64-47.61l21.2-1.74s4.52,3.47-5.56,34.06A137.91,137.91,0,0,1,307.69,84a143.38,143.38,0,0,1,59.76.83v22.63c-11.9-2.81-50.13-10.24-92.21,8.91-46.66,21.25-66.13,60.66-70.85,71V247.1s16-21.9,45.88-32.67a121.37,121.37,0,0,1,28.4-36.85c34.65-30.29,76.28-30.83,88.7-30.52l0,21.52a89.43,89.43,0,0,0-28.19,1c-31,6.15-49.74,27.35-56.2,35.45A164.82,164.82,0,0,1,307,203a168.32,168.32,0,0,1,60.33,10.51q0,11.6,0,23.21A127.27,127.27,0,0,0,306,224.81c-60.78,3.85-96.22,52.23-101.6,59.83v61.52S225.94,421.24,277,432c3.82,0,9.06.16,15.28.56,5.24.33,11.93.76,18.51,1.83a112.86,112.86,0,0,1,29.52,9.29,123.52,123.52,0,0,1,27,16.94q0,16.8.05,33.62a82.42,82.42,0,0,0-13.86-16.79c-19-17.57-41.33-21.44-51.46-22.51-3.06-.13-7.59-.39-13.06-.94a210.39,210.39,0,0,1-32.59-5.8c-26-7.52-50.28-46.42-53.07-50.95l.78,41.19a31.13,31.13,0,0,0,4,11.82,31.66,31.66,0,0,0,7.8,8.8c10.14,8.13,23.87,11.22,27.43,12,16.9,3.66,32.08,6.6,46,9,0,0,47,3.59,77.84,41.56v29.26H353.05v-3.84s2.09-33.78-77.33-47a118,118,0,0,1,6.92,15.52,122.88,122.88,0,0,1,6.76,51.31H268a81.77,81.77,0,0,0-3.55-35.07c-9-27-29.75-40.88-36.49-45,0,0-21.6-2.09-36.58-23.34,0,0-2.44,8.36-25.08,24.39a104,104,0,0,0-17.68,20.05c-15.56,23.09-17.91,46.83-18.19,59l-23.7,0A148.91,148.91,0,0,1,110,543.92a152.3,152.3,0,0,1,20.47-49.09s-63.75,2.09-75.94,65.49L34.66,548.13S49.3,475,133.59,473.93c0,0,51.91-5.22,50.51-57.13a104.27,104.27,0,0,1-28.42,23.88c-21.24,12-43.76,14.44-54.48,15.49-17.41,1.7-23.35-.52-36.35,4.44A71.16,71.16,0,0,0,40.78,476a72.79,72.79,0,0,0-20,36.56Q20.91,488.84,21,465.12Z" transform="translate(-0.14 -0.35)"/>
            <path class="cls-1" d="M627.37,199.51" transform="translate(-0.14 -0.35)"/>
            </svg>
                    <svg
                      viewBox="0 0 193 261"
                      class="fill-emerald-900 w-10 h-14"
                    >
                      <path d="M193,144v79c-20.23,11.93-40.4,24-60.79,35.64a9.85,9.85,0,0,1-8.24-.13c-39.6-22.7-79-45.69-118.55-68.53C2.16,188.1.73,185.74.74,182q.11-69.22,0-138.46c0-3.83,1.49-6.15,4.72-8Q33.65,19.35,61.71,3C65.43.8,68.63.65,72.4,2.89,91.32,14.1,110.41,25,129.23,36.4c2,1.23,3.8,4.73,3.83,7.2.25,20.15.12,40.31-.07,60.47,0,4,1.6,6.37,5,8.34,16,9.27,31.88,18.76,47.84,28.1C188.11,141.85,190.6,142.85,193,144ZM17.28,41.88c1.07.55,1.68.83,2.25,1.17,14.89,8.8,29.72,17.71,44.75,26.26,1.66.94,4.92.53,6.72-.5C85.44,60.56,99.71,52,114,43.53a24.24,24.24,0,0,0,2.71-2.21A12.25,12.25,0,0,0,115,39.78c-14.69-8.49-29.3-17.12-44.19-25.25-2.08-1.13-6-.73-8.2.49C48.68,22.77,35,31,21.18,39A47.77,47.77,0,0,0,17.28,41.88ZM12,103.12l45-26L12,51.13Zm0,19.5v52l44.54-26.2ZM118,112.5,73,86.6v52ZM77.93,77.13,123,103.58V51.1ZM16.2,183.78,61,210V157.87Zm122.86.15L184,210.18V157.89ZM17.53,112.66,62,138.57V86.69ZM123,193.41,78.42,219.47l44.58,26ZM77.59,148.46,122,174.29V122.53Zm56.41,45v51.81l44.9-25.86Zm44.53-45.45L134,122.39v51.76ZM115.8,183,73,158.16v51.45l42.8-24.84Z" />
                    </svg>
                  </div>
                </Link>
                {/*close button*/}
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              {/*entries*/}
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link to="/">
                  <a
                    href="#"
                    className="text-3xl font-medium text-gray-900 hover:text-gray-700"
                  >
                    Home
                  </a>
                </Link>
                <Link to="/ambassador">
                  <a
                    href="#"
                    className="text-3xl font-medium text-gray-900 hover:text-gray-700"
                  >
                    Become Ambassador
                  </a>
                </Link>
                <Link to="/prizes">
                  <a
                    href="#"
                    className="text-3xl font-medium text-gray-900 hover:text-gray-700"
                  >
                    Prizes
                  </a>
                </Link>
                <Link to="/guide">
                  <a
                    href="#"
                    className="text-3xl font-medium text-gray-900 hover:text-gray-700"
                  >
                    Competition Guidelines
                  </a>
                </Link>
                <Link to="/judges">
                  <a
                    href="#"
                    className="text-3xl font-medium text-gray-900 hover:text-gray-700"
                  >
                    Judges
                  </a>
                </Link>
                <Link to="/faq">
                  <a
                    href="#"
                    className="text-3xl font-medium text-gray-900 hover:text-gray-700"
                  >
                    FAQ
                  </a>
                </Link>
              </div>
              {/*button*/}
              <div>
                <a
                  className="w-full pt-5 pb-5 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-3xl font-medium text-white bg-emerald-600 hover:bg-emerald-700"
                  href="https://form.jotform.com/222245707486056" target="_blank"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
