import Layout from "@/components/Layout";

const Faqs = () => {
  return (
    <Layout>
      <section className="py-8 xl:px-24 sm:px-10 px-5" id="faqs">
        <div className="text-center my-10">
          <h1 className="font-bold text-6xl">FREQUENTLY ASKED QUESTIONS</h1>
        </div>

        <div>
          <p className="text-2xl my-5 font-semibold">
            What is CSESoc?
          </p>
          <p className="text-xl mb-10">
            CSESoc is a student-run society within the School of Computer Science and 
            Engineering. We organize various events such as BBQs, trivia nights, 
            and coding workshops for CSE students. For more details, visit 
            our <a href="/about" className="text-blue-500 hover:underline">About page</a>.
          </p>

          <p className="text-2xl my-5 font-semibold">
            How do I become a member?
          </p>
          <p className="text-xl mb-10">
            While you are enrolled in a CSE course or a CSE program, you 
            are automatically considered a member of the society and you 
            will automatically receive emails about our upcoming events.
            <br />
            If you are not enrolled at CSE, then you can still become a 
            member by emailing us at <a href="mailto:csesoc@csesoc.org.au" className="text-blue-500 hover:underline">csesoc@csesoc.org.au</a>.
          </p>

          <p className="text-2xl my-5 font-semibold">
            How do I become a sponsor?
          </p>
          <p className="text-xl mb-10">
            For information about how you can sponsor CSESoc, please see our sponsorship page.
            <br />
            For further enquiries and to discuss sponsorship opportunities, please 
            email <a href="mailto:sponsorship@csesoc.org.au" className="text-blue-500 hover:underline">sponsorship@csesoc.org.au</a>.
          </p>

          <p className="text-2xl my-5 font-semibold">
            How do I volunteer to help with events?
          </p>
          <p className="text-xl mb-10">
            Follow our Facebook page to stay up to date with volunteering opportunities! If 
            being a dedicated part of the CSESoc team interests you, also consider joining a 
            subcommittee. Subcommittee recruitment opens during T1 of each year.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Faqs;