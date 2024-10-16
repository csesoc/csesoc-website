import PortfolioDisplay from "@/components/About/PortfolioDisplay";
import Layout from "@/components/Layout";
import PageBody from "@/components/PageBody";
import PageTitle from "@/components/PageTitle";

const ExecsDirectorsSubcommitteesPage = () => {
  return (
    <Layout>
      <PageTitle title="EXECS, DIRECTORS & SUBCOMMITTEES" />
      <PageBody>
        {/* CSESOC TEAM */}
        <div>
          <p className="text-xl my-5">
            The Executives and Directors are responsible for organising the society to make sure that things get done. 
            Execs are elected annually by CSE students at the end of the preceding year and Directors are selected by Execs.
          </p>
          <p className="text-xl my-5">
            The CSESoc Executive and Director team for 2024 is:
          </p>
          <div className="flex justify-center items-center">
            <img src="/images/csesoc-team-2024.jpeg" alt="CSESoc Team 2024" width={700} height={700} />
          </div>
        </div>

        <div className="my-5 text-center">
            <h2 className="text-xl font-bold mb-2">Execs</h2>
            <div className="flex justify-center">
                <ul className="mx-4">
                    <li>Elizabeth Zhu Chan - Co-President</li>
                    <li>Lesley Lu - Co-President</li>
                    <li>Ivan Chan - Secretary</li>
                    <li>Justin Son - Treasurer</li>
                    <li>Sophie Khov - Arc Delegate</li>
                    <li>Catherine Kim - Grievance, Equity, Diversity and Inclusion Officer</li>
                    <li>Amy Liu - Vice President (Internals)</li>
                    <li>Nicole Jiang - Vice President (Externals)</li>
                    <li>Matthew Lim - Vice President (Technicals)</li>
                </ul>
            </div>
        </div>

        <div className="border-t border-gray-300 my-5"></div>

        {/* PORTFOLIOS */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Subcommitees</h2>
            <p className="text-lg">
              Subcommittees are the teams led by Directors that run CSESoc and its events to the benefit of all UNSW Computing students. Click to see the members of each!
            </p>
          </div>

          <PortfolioDisplay />

          <p className="text-xl bold my-5">
            Get to know them better <a href="https://media.csesoc.org.au/fyg24-meet-csesoc/" className="text-blue-500 hover:underline">here</a>!
          </p>
        </div>
      </PageBody>
    </Layout>
  );
}

export default ExecsDirectorsSubcommitteesPage;