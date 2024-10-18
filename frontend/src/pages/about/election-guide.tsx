import Layout from "@/components/Layout";
import PageBody from "@/components/PageBody";
import PageTitle from "@/components/PageTitle";

const ElectionGuidePage = () => {
  return (
    <Layout>
      <PageTitle title="ELECTION GUIDE" />
      <PageBody>
        <div>
          <p className="text-lg my-5">
            Before considering any executive position for CSESoc, it 
            is highly recommended that you read the constitution beforehand:
            <br />
            <a href="https://github.com/csesoc/constitution/blob/master/README.md" className="text-blue-500 hover:underline">https://github.com/csesoc/constitution/blob/master/README.md</a>
          </p>

          <p className="text-lg my-5">
            The constitution clearly outlines the roles, responsibilities and
            expectations of executives. Should you be elected, a thorough 
            understanding of this document will be required so best to read it now!
          </p>

          <p className="text-lg my-5">
            In order to run for a position in the CSESoc Elections, you will need  
            to either nominate yourself for a position or be nominated by someone else.
          </p>

          <div className="text-lg my-5">
            <p>
              Once nominations are open, you will be able to submit your nomination by 
              emailing <a href="mailto:copresidents@csesoc.org.au" className="text-blue-500 hover:underline">copresidents@csesoc.org.au</a> with:
            </p>
            <ul className="list-disc ml-6">
              <li>Your full name and zID, or the full name and zID of the person you are nominating</li>
              <li>The position you or the person you are nominating is going for</li>
              <li>A link to a website, page, or document where people can find out more about you (optional)</li>
              <li>
                CC either the person you are nominating, or a person who will second your nomination of yourself 
                (if you are nominating yourself, the person who is seconding you has to reply to your email seconding 
                your nomination. If you're nominating someone else, that person has to reply to the email confirming 
                their nomination). Be sure to use a zID email!
              </li>
            </ul>
          </div>

          <p className="text-lg my-5">
            If you're planning on running for multiple positions, then make sure you include your preference 
            for positions.
          </p>

          <p className="text-lg my-5"> 
            Please remember that to run for an executive position, you have to be a full member of CSESoc when 
            you nominate yourself. This means that you  should be doing a degree affiliated with the School of 
            CSE (and if  you're transferring, you have already accepted your transfer at the time  of nomination).
          </p>

          <p className="text-lg my-5">
            If you would like to create a website, you can find some helpful templates here: <a href="https://html5up.net/" className="text-blue-500 hover:underline">https://html5up.net/</a>. 
            <br />
            Another simple option is Google sites: <a href="https://sites.google.com/" className="text-blue-500 hover:underline">https://sites.google.com/</a>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold my-10">
            Details you might consider including on your website or document
          </h2>
          
          <div>
            <h3 className="text-xl font-semibold my-5">
              Overview of yourself
            </h3>
            <ul className="list-disc ml-6 text-lg">
              <li>Name</li>
              <li>Position you are running for</li>
              <li>Degree + stage</li>
              <li>Anything else that paints a good picture of who you are for members that haven’t met you!</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold my-5">
              Experience
            </h3>
            <p className="text-lg my-5">
              <span className="font-bold">Note</span>: it is strongly encouraged that 
              applicants for the executive have previously held an executive or directorship 
              position within CSESoc.
            </p>
            <ul className="list-disc ml-6 text-lg">
              <li>Previous involvement and achievements within CSESoc, the CSE community, as well as UNSW more broadly.</li>
              <li>Leadership experience</li>
              <li>
                Any other relevant volunteering or work situations where you feel 
                you’ve exemplified or developed the skills required for the role
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold my-5">
              Policies / vision
            </h3>
            <ul className="list-disc ml-6 text-lg">
              <li>What you'd like to achieve next year as part of your role</li>
              <li>Aspects of the society you value most, what will you uphold?</li>
              <li>Aspects of the society you would like to improve</li>
            </ul>
          </div>
        </div>
      </PageBody>
    </Layout>
  );
};

export default ElectionGuidePage;