import Nav from "../Nav";
import Footer from "../Footer";
import React from "react";

export default function FAQ() {
  return (
    <React.Fragment>
      <Nav />
      <div className="flex flex-row justify-center py-20 border-b border-gray-200">
        <div className="flex justify-center flex-col max-w-4xl font-Inter">
          <h4 className="text-emerald-600 font-bold text-center">FAQ</h4>
          <h2 className="font-extrabold text-4xl mt-4 text-center px-4">
            General
          </h2>

          <div className="text-xl mt-10 text-gray-500 font-normal leading-relaxed px-5">
            <p class="text-center text-gray-800 font-bold">What is YFAC?</p>
            <p>
              The Youth Financial Analysis Competition (YFAC) is an annual,
              online event that promotes financial literacy for teens. YFAC puts
              a greater emphasis on qualitative analysis than quantitative
              analysis so that participants of all skill levels may enter.
            </p>
            <br></br>
            <p>
              Participants are engaged in a mock financial analyst-client
              setting based on a selection of case studies we have designed. The
              case studies feature real-world companies.
            </p>
            <br></br>
            <p>Participants will be required to:</p>
            <br></br>

            <ul class="list-disc px-5">
              <li class="my-2">
                Identify strengths and weaknesses of a company
              </li>

              <li class="my-2">Be able to come up with an in-depth analysis</li>

              <li class="my-2">
                Compile spreadsheets with key data taken from a company's
                financial reports
              </li>

              <li class="my-2">Work individually or as a team</li>

              <li class="my-2">
                Submit their analyses in the form of pdf document.
              </li>
            </ul>
          </div>

          <div className="text-xl mt-10 text-gray-500 font-normal leading-relaxed px-5">
            <p class="text-center text-gray-800 font-bold">
              How much prior experience is required?
            </p>
            <p>
              No prior experience with financial analysis, economics, or
              business is required to participate. Participants are provided
              with a Case Brief that contains basic resources, as YFAC is
              designed to be both a competition and a learning opportunity.
            </p>
          </div>

          <div className="text-xl mt-10 text-gray-500 font-normal leading-relaxed px-5">
            <p class="text-center text-gray-800 font-bold">
              Who can participate in YFAC 2022?
            </p>
            <p>
              To qualify for YFAC 2022, participants must be aged 13-18 at the
              time of submission (Sep. 30th)
            </p>
          </div>

          <div className="text-xl mt-10 text-gray-500 font-normal leading-relaxed px-5">
            <p class="text-center text-gray-800 font-bold">
              What is the schedule for YFAC 2022?
            </p>
            <p>The following schedule is recommended for YFAC 2022:</p>
            <br></br>
            <p>
              <span class="font-medium text-gray-800">
                September 10th-30th:
              </span>{" "}
              Contest open. Participants may submit their analyses at any point
              between these two dates.
            </p>
            <br></br>
            <p>
              <span class="font-medium text-gray-800">October 7th:</span> Top 3
              finalists announced.
            </p>
            <br></br>
            <p>
              <span class="font-medium text-gray-800">October 14th:</span>{" "}
              Elevator pitch presentations by top 3 finalists. Ambassadors
              awarded, and winners announced.
            </p>
          </div>

          <div className="text-xl mt-10 text-gray-500 font-normal leading-relaxed px-5">
            <p class="text-center text-gray-800 font-bold">
              Where and how will the events take place?
            </p>
            <p>YFAC 2022 is 100% online.</p>
            <br></br>
            <p>
              The participants will send in their solutions via a pdf document,
              and the top 3 finalists will be invited to present to a live panel
              of judges.
            </p>
          </div>

          <h2 className="font-extrabold text-4xl mt-20 text-center px-4">
            Registration
          </h2>

          <div className="text-xl mt-10 text-gray-500 font-normal leading-relaxed px-5">
            <p class="text-center text-gray-800 font-bold">
              How much does it cost to enter?
            </p>
            <p>
              Entry to YFAC 2022 is completely free. There are no associated
              costs with the competition.
            </p>
          </div>

          <div className="text-xl mt-10 text-gray-500 font-normal leading-relaxed px-5">
            <p class="text-center text-gray-800 font-bold">
              Can I enter as an individual if I don't have a team?
            </p>
            <p>Yes. Participants may enter individually.</p>
          </div>

          <div className="text-xl mt-10 text-gray-500 font-normal leading-relaxed px-5">
            <p class="text-center text-gray-800 font-bold">
              How big do the teams have to be?
            </p>
            <p>Participants can apply individually, or in teams of 2-4.</p>
            <br></br>
            <p>
              There is no restriction on which regions each team member is from.
            </p>
          </div>

          <div className="text-xl mt-10 text-gray-500 font-normal leading-relaxed px-5">
            <p class="text-center text-gray-800 font-bold">
              Can more team members be added after initial registration?
            </p>
            <p>
              No. All team members must register together. After initial
              registration, additional team members cannot be added.
            </p>
          </div>

          <div className="text-xl mt-10 text-gray-500 font-normal leading-relaxed px-5">
            <p class="text-center text-gray-800 font-bold">
              How do I sign up under the name of my ambassador?
            </p>
            <p>
              At the bottom of the registration form, you should see a drop-down
              menu that allows you to select the name of your ambassador.
            </p>
          </div>
          <h2 className="font-extrabold text-4xl mt-20 text-center px-4">
            During the competition
          </h2>

          <div className="text-xl mt-10 text-gray-500 font-normal leading-relaxed px-5">
            <p class="text-center text-gray-800 font-bold">
              What is the submission process for YFAC 2022?
            </p>
            <p>
              Upon registration, participants will receive an email on the
              format of submissions and other submission requirements.
            </p>
          </div>

          <div className="text-xl mt-10 text-gray-500 font-normal leading-relaxed px-5">
            <p class="text-center text-gray-800 font-bold">
              How many different case study options are available?
            </p>
            <p>
              Participants can select one out of five case studies to analyse.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
