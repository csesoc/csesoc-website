import Layout from "@/components/Layout";
import PageBody from "@/components/PageBody";
import PageTitle from "@/components/PageTitle";
import TabTitle from 'next/head'
import { useState } from "react";

const MIN_YEAR = 2007;
const MAX_YEAR = 2020;
const DEFAULT_YEAR = 2020;

const OurHistoryPage = () => {
  const [year, setYear] = useState(DEFAULT_YEAR);
  const [shouldDisplayTip, setShouldDisplayTip] = useState(true);

  return (
    <Layout>
      <TabTitle>
        <title>Our History | CseSoc UNSW</title>
      </TabTitle>

      <PageTitle title="OUR HISTORY" />
      <PageBody>
        <div>
          <p className="text-xl my-5">
            CSESoc was formed in October 2006 from the old CompSoc and SESoc societies. 
            CompSoc helped represent the interest of students studying  Computer Engineering, 
            Computer Science and postgraduate courses, while  SESoc was the representative body 
            for Software Engineering students. Both societies provided technical and social 
            support to their members. In the best interest of everyone, the societies merged to 
            provide a better experience to all CSE students.
          </p>
          <p className="text-xl my-5">
            CSESoc now represents students enrolled in Computer Science, Computer Engineering, 
            Software Engineering, Bioinformatics Engineering, or a post‐graduate program 
            administered by CSE (research or coursework).
          </p>
          <p className="text-xl my-5">
            Even today CSESoc continues to be an integral part of the student experience. 
            Many students make the most of their time at university by  joining a working 
            group in first year to get a taste of the society. If you are enthusiastic and 
            interested you can nominate yourself or be  nominated for a position in the Exec 
            at the end of the year.
          </p>
          <p className="text-xl my-5">
            Being part of a society is a great way to meet new people and gain extra skills 
            that employers look for in the industry.
          </p>
        </div>

        <div className="border-t border-gray-300 my-5"></div>

        <div className="flex flex-col items-center mt-5">
          <h2 className="text-4xl font-semibold mb-5">{year}</h2>

          <input 
            id="history-year-slider"
            type="range"
            min={MIN_YEAR}
            max={MAX_YEAR}
            defaultValue={DEFAULT_YEAR}
            step={1}
            className="w-full h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer"
            onChange={(e) => {
              setYear(parseInt(e.target.value))
              setShouldDisplayTip(false)
            }}
          />
          <div className="flex flex-row w-full justify-between mt-1">
            <p>{MIN_YEAR}</p>
            <p>{MAX_YEAR}</p>
          </div>

          {shouldDisplayTip && (
            <p className="mt-5">Use the slider to see the teams from past years!</p>
          )}

          <div key={year} className="h-[600px] w-[600px] mt-10">
            <img src={`/images/csesoc-team-${year}.png`} alt={`CSESoc Team ${year}`}/>
          </div>
        </div>
      </PageBody>
    </Layout>
  );
}

export default OurHistoryPage;
