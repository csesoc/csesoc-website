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

        <div className="grid grid-cols-2 gap-6">
            <div className="my-5 flex flex-col justify-center items-center text-center">
                <h2 className="text-xl font-bold mb-2">Careers</h2>
                <ul className="space-y-1">
                    <li>Eric Kang</li>
                    <li>Jasmine Xian</li>
                    <li>Max Lee</li>
                </ul>
            </div>

            <div className="my-5 flex flex-col justify-center items-center text-center">
                <h2 className="text-xl font-bold mb-2">Competitions</h2>
                <ul>
                    <li>Aliff Azlan</li>
                    <li>Haibing Wang</li>
                    <li>Diego Untalan</li>
                </ul>
            </div>

            <div className="my-5 flex flex-col justify-center items-center text-center">
                <h2 className="text-xl font-bold mb-2">Creative</h2>
                <ul>
                    <li>Anna Wang</li>
                    <li>Jordan Djamaan</li>
                    <li>Shabinda Sarkaria</li>
                </ul>
            </div>

            <div className="my-5 flex flex-col justify-center items-center text-center">
                <h2 className="text-xl font-bold mb-2">Education</h2>
                <ul>
                    <li>Alina Jin</li>
                    <li>JJ Roberts-White</li>
                    <li>Liam Smith</li>
                </ul>
            </div>

            <div className="my-5 flex flex-col justify-center items-center text-center">
                <h2 className="text-xl font-bold mb-2">Events</h2>
                <ul>
                    <li>Emma Nguyen</li>
                    <li>Jalaj Jain</li>
                    <li>Jenny Lee</li>
                </ul>
            </div>

            <div className="my-5 flex flex-col justify-center items-center text-center">
                <h2 className="text-xl font-bold mb-2">HR</h2>
                <ul>
                    <li>Aryan Chauhan</li>
                    <li>Edwin Tang</li>
                    <li>Jasmine Guan</li>
                </ul>
            </div>

            <div className="my-5 flex flex-col justify-center items-center text-center">
                <h2 className="text-xl font-bold mb-2">IT</h2>
                <ul>
                    <li>Derek Xu</li>
                    <li>Dominic Cheung</li>
                </ul>
            </div>

            <div className="my-5 flex flex-col justify-center items-center text-center">
                <h2 className="text-xl font-bold mb-2">Marketing</h2>
                <ul>
                    <li>Aaron Lee</li>
                    <li>Lisa Lin</li>
                    <li>Zitian Qin</li>
                </ul>
            </div>

            <div className="my-5 flex flex-col justify-center items-center text-center">
                <h2 className="text-xl font-bold mb-2">Media</h2>
                <ul>
                    <li>Dylan Hu</li>
                    <li>Gloria Xi</li>
                    <li>Leo Ng Maisnam</li>
                </ul>
            </div>

            <div className="my-5 flex flex-col justify-center items-center text-center">
                <h2 className="text-xl font-bold mb-2">Online</h2>
                <ul>
                    <li>Amy Tian</li>
                    <li>Brandon Tan</li>
                </ul>
            </div>

            <div className="my-5 flex flex-col justify-center items-center text-center">
                <h2 className="text-xl font-bold mb-2">Outreach</h2>
                <ul>
                    <li>Joyce He</li>
                    <li>Sapphire Wildie</li>
                </ul>
            </div>

            <div className="my-5 flex flex-col justify-center items-center text-center">
                <h2 className="text-xl font-bold mb-2">Socials</h2>
                <ul>
                    <li>Davis Lim</li>
                    <li>Jennifer Yu</li>
                    <li>Susie Xia</li>
                </ul>
            </div>

            <p className="text-xl bold my-5">
              Get to know them better <a href="https://media.csesoc.org.au/fyg24-meet-csesoc/" className="text-blue-500 hover:underline">here</a>!
            </p>
        </div>


        <div className="border-t border-gray-300 my-5"></div>

        {/* PORTFOLIOS */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Subcommitees</h2>
            <p className="text-lg">
              Subcommittees are the teams that run CSESoc and its events to the benefit of all UNSW Computing students.
            </p>
            </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Careers</h2>
            <p className="text-lg">
              Facilitates industry sponsor relations, as well as creating events focused on interpersonal
              development and networking.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Competitions</h2>
            <p className="text-lg">
              Organises a variety of contests to empower students beyond coursework and allow them meet
              others.
            </p>
          </div>

          <div>
              <h2 className="text-xl font-semibold mb-2">Creative</h2>
              <p className="text-lg">
                  Lays the groundwork for CSESoc’s aesthetic branding, providing an outlet for creative expression.
              </p>
          </div>

          <div>
              <h2 className="text-xl font-semibold mb-2">Education</h2>
              <p className="text-lg">
                  Teaches interesting technical skills to the community, whether that's through workshops, articles or programs.
              </p>
          </div>

          <div>
              <h2 className="text-xl font-semibold mb-2">Events</h2>
              <p className="text-lg">
                  Plan a diverse range of large-scale activities while focusing on creating an enjoyable and fun experiences for all participants!
              </p>
          </div>

          <div>
              <h2 className="text-xl font-semibold mb-2">HR</h2>
              <p className="text-lg">
                  Fosters the internal culture of the internal/external team - bringing people together, encouraging a supportive environment and most of all - memories.
              </p>
          </div>

          <div>
              <h2 className="text-xl font-semibold mb-2">IT</h2>
              <p className="text-lg">
                  Oversees the development of the CSESoc’s internal projects and infrastructure. Plays an active role in the technical aspects of our society.
              </p>
          </div>

          <div>
              <h2 className="text-xl font-semibold mb-2">Marketing</h2>
              <p className="text-lg">
                  Promotes CSESoc on our social media as well as create supplementary marketing material to engage our audience.
              </p>
          </div>

          <div>
              <h2 className="text-xl font-semibold mb-2">Media</h2>
              <p className="text-lg">
                  Focuses on creating content for our CSESoc community and beyond to capture our diverse student voice.
              </p>
          </div>

          <div>
              <h2 className="text-xl font-semibold mb-2">Online</h2>
              <p className="text-lg">
                  Expands CSESoc’s vibrant community into the virtual world. Includes running events online and managing our online spaces to make sure everyone feels welcomed in our community.
              </p>
          </div>

          <div>
              <h2 className="text-xl font-semibold mb-2">Outreach</h2>
              <p className="text-lg">
                  Creates inclusive and approachable events targeted towards overlooked and underrepresented students.
              </p>
          </div>

          <div>
              <h2 className="text-xl font-semibold mb-2">Socials</h2>
              <p className="text-lg">
                  Organises approachable events targeted towards building an inclusive and welcoming community, to help build long-lasting friendships!
              </p>
          </div>
        </div>
      </PageBody>
    </Layout>
  );
}

export default ExecsDirectorsSubcommitteesPage;