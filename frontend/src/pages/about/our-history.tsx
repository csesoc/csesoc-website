import Layout from "@/components/Layout";
import PageBody from "@/components/PageBody";
import PageTitle from "@/components/PageTitle";

const OurHistoryPage = () => {
  // Years from 2020 to 2007
  const years: number[] = Array.from({ length: 14 }, (_, i) => 2020 - i);

  return (
    <Layout>
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

        {years.map((year: number) => (
          <div key={year} className="mb-4">
            <div className="flex flex-col items-center mb-5">
              <h2 className="text-2xl font-semibold mb-2">{year}</h2>
              <img src={`/images/csesoc-team-${year}.png`} alt={`CSESoc Team ${year}`} height={600} width={600}/>
            </div>
          </div>
        ))}
      </PageBody>
    </Layout>
  );
}

export default OurHistoryPage;
