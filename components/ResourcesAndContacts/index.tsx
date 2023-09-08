
const ResourcesAndContacts = () => {
    return (
        <section className="py-8 px-24 min-h-screen">
             <div className="text-center my-10">
                <p className="text-[#3977F8] font-game text-xl">03</p>
                <h1 className="font-bold text-4xl">RESOURCES & CONTACTS</h1>
            </div>

            <div className="py-8 px-24">
                <div className="grid grid-cols-4 flex 1 gap-x-9 gap-y-5">
                    <div className="col-span-4 p-5 border border-[#595F6D] flex-1 rounded-lg ">
                        <h2 className="mt-5 text-3xl font-extrabold">Circles</h2>

                        <p className="mt-7 text-lg mb-5">A UNSW degree planner where you can explore and validate your degree structure.</p>
                    </div>

                    <div className="col-span-1 p-5 border border-[#595F6D] rounded-lg">
                        <h2 className="mt-1 text-3xl font-extrabold">Structs.sh</h2>

                        <p className="mt-7 text-lg mb-5">
                        An educational data structures and algorithms platform.
                        </p>
                    </div>

                    <div className="col-span-1 p-5 border border-[#595F6D] rounded-lg">
                        <h2 className="mt-1 text-3xl font-extrabold">Jobs Board</h2>

                        <p className="mt-7 text-lg mb-5">
                        A place where CSESoc students can look for relevant job opportunities.
                        </p>
                    </div>

                    <div className="col-span-1 p-5 border border-[#595F6D] rounded-lg">
                        <h2 className="mt-1 text-3xl font-extrabold">Notangles</h2>

                        <p className="mt-7 text-lg mb-5">
                         Trimester timetabling tool - no more timetable tangles!
                        </p>
                    </div>

                    <div className="col-span-1 p-5 border border-[#595F6D] rounded-lg">
                        <h2 className="mt-1 text-3xl font-extrabold">Uni-lectives</h2>

                        <p className="mt-7 text-lg mb-5">
                        Read course electives to help you pick your electives or even write your own!
                        </p>
                    </div>

                    <div className="col-span-2 p-5 border border-[#595F6D] rounded-lg">
                        <h2 className="mt-1 text-3xl font-extrabold">CompClub</h2>

                        <p className="mt-7 text-lg mb-5">
                            Promoting computing to high school students
                        </p>
                    </div>

                    <div className="col-span-2 p-5 border border-[#595F6D] rounded-lg">
                        <h2 className="mt-1 text-3xl font-extrabold">CSESoc Media</h2>

                        <p className="mt-7 text-lg mb-5">
                            All things content
                        </p>
                    </div>

                    <div className="col-span-2 p-5 border border-[#595F6D] rounded-lg">
                        <h2 className="mt-1 text-3xl font-extrabold">First Year Guide</h2>

                        <p className="mt-7 text-lg mb-5">
                            The ultimate guide to conquering your first year at CSE
                        </p>
                    </div>

                    <div className="col-span-2 p-5 border border-[#595F6D] rounded-lg">
                        <h2 className="mt-1 text-3xl font-extrabold">Enhrolment Guide</h2>

                        <p className="mt-7 text-lg mb-5">
                            Learn how to get a headstart on uni
                        </p>
                    </div>

                    
                </div>

            </div>
        </section>
    )
}

export default ResourcesAndContacts;