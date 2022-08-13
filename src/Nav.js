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
            <div className="flex justify-start lg:flex-1">
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
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Prizes
            </a>
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
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700"
            >
              Register
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
              <div className="flex items-center justify-between">
                <Link to="/">
                  <div>
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
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Home
                  </a>
                </Link>
                <Link to="/ambassador">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Become Ambassador
                  </a>
                </Link>
                <Link to="/">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Prizes
                  </a>
                </Link>
                <Link to="/guide">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Competition Guidelines
                  </a>
                </Link>
                <Link to="/judges">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Judges
                  </a>
                </Link>
                <Link to="/faq">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    FAQ
                  </a>
                </Link>
              </div>
              {/*button*/}
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700"
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
