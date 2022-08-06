import Nav from "../Nav";
import Footer from "../Footer";
import React from "react";

export default function Guide() {
  return (
    <React.Fragment>
      <Nav />
      <div className="flex flex-row justify-center py-20 border-b border-gray-200">
        <div className="flex justify-center flex-col max-w-4xl font-Inter">
          <h4 className="text-emerald-600 font-bold text-center">Guidelines</h4>
          <h2 className="font-extrabold text-4xl mt-4 text-center px-4">
            Rules
          </h2>
          <div className="text-xl mt-10 text-gray-500 font-normal leading-relaxed px-5">
            <p class="font-medium text-gray-800">
              Participants must be between 13-18 years of age at the time of
              submission.{" "}
            </p>
            <br></br>

            <ul class="list-disc px-5">
              <li class="my-2">
                The deadline for submission is September 30th 23:59 UTC +08:00.
              </li>

              <li class="my-2">
                Participants may enter individually or in teams of up to 4.
              </li>

              <li class="my-2">
                Participants shortlisted for the elevator pitch should prepare a
                PowerPoint presentation that summarises their report. This must
                not exceed 10 minutes.
              </li>

              <li class="my-2">
                This is an open competition, meaning that participants may
                consult materials outside of the case to aid them in their
                analysis. Such materials may include online courses, textbooks,
                online resources, or Excel templates. If you do use any outside
                resources, you must reference them at some point in your
                deliverables.
              </li>

              <li class="my-2">
                You are not permitted to have someone outside your team directly
                help you put together your submission. Your deliverables should
                be a product of your personal analysis and work, and cannot be
                plagiarised or be someone else's work. Submissions that breach
                this rule will not be accepted.
              </li>
            </ul>
          </div>
          <h2 className="font-extrabold text-4xl mt-20 text-center px-4">
            Judging criteria
          </h2>
          <div className="text-xl mt-10 text-gray-500 font-normal leading-relaxed px-5">
            <p class="font-medium text-gray-800">
              Investment rationale and strategy: clear investment rationale and
              strategy is supported by case materials.
            </p>
            <br></br>

            <ul class="list-disc px-5">
              <li class="my-2">
                Drivers and assumptions: clarity and quality of model, including
                assumptions, logic, market sizing, and drivers.
              </li>

              <li class="my-2">
                Formatting: Accurate use of best practices and easy to follow
                aesthetic model/pitchbook.{" "}
                <span className="text-black font-semibold">
                  Are you utilising a clear and accurate excel format?
                </span>
              </li>

              <li class="my-2">
                Investment presentation slide deck: Is effectively structured,
                showcasing key takeaways and high quality recommendations and
                includes the presentation of outputs namely charts and graphs.
              </li>

              <li class="my-2">
                Presentation recording: Is clear and dynamic, communicates the
                main insights from the presentation deck and model in a
                professional manner.
              </li>
            </ul>
          </div>
          <h2 className="font-extrabold text-4xl mt-20 text-center px-4">
            Registration guide
          </h2>
          <div className="text-xl mt-10 text-gray-500 font-normal leading-relaxed px-5">
            <p class="font-medium text-gray-800">
              Participants register individually or in teams of 2-4
            </p>
            <br></br>

            <ul class="list-disc px-5">
              <li class="my-2">
                A team leader should be elected to fill out the registration
                form on behalf of other members,
              </li>

              <li class="my-2">
                Members cannot be added after the initial registration form is
                complete.
              </li>
            </ul>
            <br></br>

            <p class="font-medium text-gray-800">To register, you will need</p>
            <br></br>

            <ul class="list-disc px-5">
              <li class="my-2">
                Participants' full details (no school emails)
              </li>

              <li class="my-2">Parental consent if you are under 18</li>
            </ul>
            <br></br>
            <p class="font-medium text-gray-800">Instructions</p>
            <br></br>

            <ul class="list-disc px-5">
              <li class="my-2">(Optional) Read the FAQs</li>
              <li class="my-2">
                Click the Register button on the top right corner of the
                website,
              </li>
              <li class="my-2">Fill out the form,</li>
              <li class="my-2">Registration complete,</li>
              <li class="my-2">Wait for your case brief on September 10th.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
