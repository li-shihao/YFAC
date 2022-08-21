import Nav from "../Nav";
import Footer from "../Footer";
import React from "react";

export default function Ambassador() {
  return (
    <React.Fragment>
      <Nav />
      <div className="flex flex-row justify-center py-20 border-b border-gray-200">
        <div className="flex justify-center flex-col max-w-4xl font-Inter">
          <h4 className="text-emerald-600 font-bold text-center">
            AMBASSADOR PROGRAM
          </h4>
          <div className="flex justify-center">
                <a
                  className="justify-center w-2/3 lg:w-1/4 mt-7 mb-5 pt-5 pb-5 flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-3xl lg:text-xl font-medium text-white bg-emerald-600 hover:bg-emerald-700"
                  href="https://form.jotform.com/222246463589060" target="_blank"
                >
                  Sign up here!
                </a>
          </div>
          <h2 className="font-extrabold text-4xl mt-4 text-center px-4">
            We are looking for outgoing, passionate people to promote the YFAC
          </h2>
          <div className="lg:text-xl text-3xl mt-10 text-gray-500 font-normal leading-relaxed px-5">
            <p>
              The YFAC is an international competition, so we are looking for
              Ambassadors to promote the competition in different schools,
              cities, and countries. YFAC Ambassadors will receive awards to
              honor their contributions, and the Ambassador who gets the most
              number of people to register for the YFAC will win a S$100 cash
              prize.
            </p>
            <br></br>
            <p>
              Note: Ambassadors may also participate in the competition itself.
            </p>
          </div>
          <h2 className="font-extrabold text-4xl mt-20 text-center px-4">
            Ambassador awards and prizes
          </h2>
          <div className="text-3xl lg:text-xl mt-10 text-gray-500 font-normal leading-relaxed px-5">
            <p>
              Gold Award & S$100 Cash Prize: Awarded to the Ambassador who has
              the greatest number of participants registered.{" "}
            </p>
            <br></br>
            <p>
              Silver Award & Certificate: Awarded to 2 Ambassadors with the
              second and third greatest number of participants registered.{" "}
            </p>
            <br></br>
            <p>
              Bronze Award & Certificate: Awarded to ambassadors with at least
              15 participants registered.{" "}
            </p>
            <br></br>
            <p>
              Note: We are counting the number of registered participants, not
              teams. That means if you have 4 people registering together under
              a team, we will count 4 people towards your name. However,
              participants that do not submit an entry to the YFAC, whether
              individually or under a team, will not count towards your
              Ambassador count.
            </p>
          </div>
          <h2 className="font-extrabold text-4xl mt-20 text-center px-4">
            Ambassador requirements
          </h2>
          <div className="text-3xl lg:text-xl mt-10 text-gray-500 font-normal leading-relaxed px-5">
            <p>Ambassadors have to be between 13 and 18 years.</p>
            <br></br>
            Ambassadors will need to attend the virtual YFAC finals to receive
            their awards and certificates.
            <br></br>
            <br></br>
            <p>
              To become an ambassador, simply fill out{" "}
              <a
                className="underline decoration-solid hover:decoration-wavy font-extrabold text-sky-500"
                href="https://form.jotform.com/222246463589060"
                target="_blank"
              >
                this form
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
