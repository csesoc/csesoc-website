
const ResourcesAndContacts = () => {
    return (
        <section className="py-8 px-24 min-h-screen">
             <div className="text-center my-10">
                <p className="text-[#3977F8] font-game text-xl">03</p>
                <h1 className="font-bold text-4xl">RESOURCES & CONTACTS</h1>
            </div>

            <div className="py-8 px-24">
                <div className="grid grid-cols-4 flex 1 gap-x-9 gap-y-5">
                    <a 
                        href="https://circles.csesoc.app/course-selector" 
                        target="_blank"
                        className="
                            col-span-4 p-5 border border-[#595F6D] rounded-lg hover:bg-gray-100 hover:bg-opacity-10
                        "
                    >
                        <h2 className="mt-5 text-3xl font-extrabold">Circles</h2>

                        <p className="mt-7 text-lg mb-5">A UNSW degree planner where you can explore and validate your degree structure.</p>
                    </a>

                    <a 
                        href="https://structs.sh/" 
                        target="_blank"
                        className="
                            col-span-1 p-5 border border-[#595F6D] rounded-lg hover:bg-gray-100 hover:bg-opacity-10
                        "
                    >
                        <h2 className="mt-1 text-3xl font-extrabold">Structs.sh</h2>

                        <p className="mt-7 text-lg mb-5">
                        An educational data structures and algorithms platform.
                        </p>
                    </a>

                    <a 
                        href="https://jobsboard.csesoc.unsw.edu.au/" 
                        target="_blank"
                        className="
                            col-span-1 p-5 border border-[#595F6D] rounded-lg hover:bg-gray-100 hover:bg-opacity-10
                        "
                    >
                        <h2 className="mt-1 text-3xl font-extrabold">Jobs Board</h2>

                        <p className="mt-7 text-lg mb-5">
                        A place where CSESoc students can look for relevant job opportunities.
                        </p>
                    </a>

                    <a 
                        href="https://notangles.csesoc.app/" 
                        target="_blank"
                        className="
                            col-span-1 p-5 border border-[#595F6D] rounded-lg hover:bg-gray-100 hover:bg-opacity-10
                        "
                    >
                        <h2 className="mt-1 text-3xl font-extrabold">Notangles</h2>

                        <p className="mt-7 text-lg mb-5">
                         Trimester timetabling tool - no more timetable tangles!
                        </p>
                    </a>

                    <a 
                        href="https://unilectives.csesoc.app/" 
                        target="_blank"
                        className="
                            col-span-1 p-5 border border-[#595F6D] rounded-lg hover:bg-gray-100 hover:bg-opacity-10
                        "
                    >
                        <h2 className="mt-1 text-3xl font-extrabold">Uni-lectives</h2>

                        <p className="mt-7 text-lg mb-5">
                        Read course electives to help you pick your electives or even write your own!
                        </p>
                    </a>

                    <a 
                        href="https://compclub.org/" 
                        target="_blank"
                        className="
                            col-span-2 p-5 border border-[#595F6D] rounded-lg hover:bg-gray-100 hover:bg-opacity-10
                        "
                    >
                        <h2 className="mt-1 text-3xl font-extrabold">CompClub</h2>

                        <p className="mt-7 text-lg mb-5">
                            Promoting computing to high school students
                        </p>
                    </a>

                    <a 
                        href="https://media.csesoc.org.au/" 
                        target="_blank"
                        className="
                            col-span-2 p-5 border border-[#595F6D] rounded-lg hover:bg-gray-100 hover:bg-opacity-10
                        "
                    >
                        <h2 className="mt-1 text-3xl font-extrabold">CSESoc Media</h2>

                        <p className="mt-7 text-lg mb-5">
                            All things content
                        </p>
                    </a>

                    <a 
                        href="https://media.csesoc.org.au/fyg-2023/" 
                        target="_blank"
                        className="
                            col-span-2 p-5 border border-[#595F6D] rounded-lg hover:bg-gray-100 hover:bg-opacity-10
                        "
                    >
                        <h2 className="mt-1 text-3xl font-extrabold">First Year Guide</h2>

                        <p className="mt-7 text-lg mb-5">
                            The ultimate guide to conquering your first year at CSE
                        </p>
                    </a>

                    <a 
                        href="https://media.csesoc.org.au/cse-enrol/" 
                        target="_blank"
                        className="
                            col-span-2 p-5 border border-[#595F6D] rounded-lg hover:bg-gray-100 hover:bg-opacity-10
                        "
                    >
                        <h2 className="mt-1 text-3xl font-extrabold">Enrolment Guide</h2>

                        <p className="mt-7 text-lg mb-5">
                            Learn how to get a headstart on uni
                        </p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ResourcesAndContacts;