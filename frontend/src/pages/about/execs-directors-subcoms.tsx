import PortfolioDisplay from "@/components/About/PortfolioDisplay";
import ExecDisplay from "@/components/About/ExecDisplay";
import Layout from "@/components/Layout";
import PageBody from "@/components/PageBody";
import PageTitle from "@/components/PageTitle";
import { teamData } from "@/../public/data/years/2025";

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
            The CSESoc Executive and Director team for 2025:
          </p>
          <div className="flex justify-center items-center">
            <img src="/images/members/csesoc-2025.jpg" alt="CSESoc Team 2025" width={700} height={700} />
          </div>
        </div>

        {/* EXECS */}
        <ExecDisplay execs={teamData.execs} />

        <div className="border-t border-gray-300 my-10"></div>

        {/* PORTFOLIOS */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Directors & Subcommitees</h2>
            <p className="text-lg">
              Subcommittees are the teams led by Directors that run CSESoc and its events to the benefit of all UNSW Computing students. Click to see the directors of each team!
            </p>
          </div>

          <PortfolioDisplay portfolios={teamData.portfolios} />
          
        </div>
      </PageBody>
    </Layout>
  );
}

export default ExecsDirectorsSubcommitteesPage;
