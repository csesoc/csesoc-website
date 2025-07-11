import Layout from "@/components/Layout";
import PageBody from "@/components/PageBody";
import PageTitle from "@/components/PageTitle";
import TabTitle from 'next/head'

const ConstitutionPage = () => {
  return (
    <Layout>
      <TabTitle>
        <title>Constitution | CSESoc UNSW</title>
      </TabTitle>
      <PageTitle title="CONSTITUTION" />
      <PageBody>
        <div>
          <p className="text-xl my-5">
            Since the end of 2013, the constitution has been hosted on Github. The constitution by which CSESoc runs can be found here:
          </p>
          <ul className="list-disc ml-6">
            <li className="text-xl">
              <a href="https://github.com/csesoc/constitution/blob/master/README.md" className="text-blue-500 underline">
                Current constitution
              </a>
            </li>
          </ul>

          <p className="text-xl my-5">Previous iterations of the constitution can be found here:</p>
          <ul className="list-disc ml-6">
            <li className="text-xl">
              <a href="https://cgi.cse.unsw.edu.au/~csesoc/constitution-archive/constitution-2012.pdf" className="text-blue-500 underline">
                2012 Constitution
              </a>
              - Version 2.3, adopted 04/10/2011
            </li>
            <li className="text-xl">
              <a href="https://cgi.cse.unsw.edu.au/~csesoc/constitution-archive/constitution-2011.pdf" className="text-blue-500 underline">
                2011 Constitution
              </a>
              - Version 2.2, adopted 30/09/2010
            </li>
            <li className="text-xl">
              <a href="https://cgi.cse.unsw.edu.au/~csesoc/constitution-archive/constitution-2010.pdf" className="text-blue-500 underline">
                2010 Constitution
              </a>
              - Version 2.1, adopted 07/10/2009
            </li>
            <li className="text-xl">
              <a href="https://cgi.cse.unsw.edu.au/~csesoc/constitution-archive/constitution-2009.pdf" className="text-blue-500 underline">
                2009 Constitution
              </a>
              - Version 2.0, adopted 14/10/2008
            </li>
          </ul>
        </div>
      </PageBody>
  </Layout>
  );
}

export default ConstitutionPage;
