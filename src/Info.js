export default function Info() {
  return (
    <div className="flex flex-row justify-center mt-20">
      <div className="flex justify-center items-center flex-col max-w-4xl font-Inter">
        <h4 className="text-emerald-600 font-bold">INTRODUCING</h4>
        <h2 className="font-extrabold text-4xl mt-4 px-4">What is the YFAC?</h2>
        <div className="text-xl mt-10 text-gray-500 font-normal leading-relaxed px-5">
          <p>
            Financial Analysis Competitions challenge participants to build the
            best financial model and presentation based on a case study. These
            intense events are usually only open to university students. The
            YFAC is the first of its kind to be open for{" "}
            <span className="text-black font-semibold">
              high-school students (age 13-18)
            </span>
            .
          </p>
          <br></br>
          <p>
            YFAC's goal is to promote financial literacy among teens all over
            the world. Students are challenged to complete tasks undertaken by
            <span className="text-black font-semibold">
              {" "}
              real investment firms
            </span>
            ! YFAC participants will pick up crucial analysis skills that give
            them an edge in university applications and the workforce. All
            corporations, big or small, need people with valuation skills, so
            the YFAC is the perfect opportunity for ambitious teens to get a
            head-start in any industry!
          </p>
          <br></br>
          <p>
            What's fantastic about YFAC 2022 is that it is{" "}
            <span className="text-black font-semibold">completely online</span>.
            Students, regardless of geographical location, need only to have an
            internet connection to participate.
          </p>
        </div>
        <h2 className="font-extrabold text-4xl mt-20 px-4">More Information</h2>
        <div className="text-xl mt-10 text-gray-500 font-normal leading-relaxed px-5">
          <p>
            Working individually or in teams, students gain real-world
            experience as they assume the roles of{" "}
            <span className="text-black font-semibold">research analysts</span>{" "}
            preparing reports for their 'clients'. Participants are judged on
            their ability to{" "}
            <span className="text-rose-500 font-semibold">
              break down a company
            </span>
            ,{" "}
            <span className="text-sky-500 font-semibold">
              write a research report
            </span>
            ,{" "}
            <span className="text-amber-500 font-semibold">
              and present their recommendations
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
