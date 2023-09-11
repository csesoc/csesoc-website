import React from 'react'

const Sponsors = () => {
    return (
        <section className="flex flex-col min-h-screen py-8 px-24 relative">
            <div>
                <p className="text-[#3977F8] font-game text-xl">04</p>
                <h2 className="font-bold text-7xl">SUPPORT CSESOC</h2>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <div style={{ backgroundImage: 'radial-gradient(50% 50% at 50% 50%, rgba(235, 1, 255, 0.6) 0%, rgba(121, 73, 255, 0.6) 48.96%, rgba(57, 119, 248, 0.6) 100%)' }} className="overflow-hidden rounded-[4rem] h-[35rem] w-[90rem] grid grid-cols-10 grid-row-2">
                    <div className="flex flex-col justify-center items-center col-span-4 row-start-1 row-end-3">
                        <div className="max-w-[19.5rem] flex flex-col justify-center items-center">
                            <h2 className="text-5xl font-black">Our sponsors</h2>
                            <p style={{ fontSize: '1.65rem', lineHeight: '2.1rem' }} className="my-16" >Check out our very cool sponsors.</p>
                            <button style={{ backgroundColor: '#FFFFFF', border: '1px solid #A7A6E5', color: '#3977F8' }} className="text-2xl rounded-xl w-[100%] h-16">View our sponsors</button>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'rgba(0, 71, 255, 0.33)' }} className="flex justify-center items-center col-span-3 row-start-1 row-end-2"><img src="assets/atlassian_logo.svg" alt="Atlassian logo" /></div>
                    <div style={{ backgroundColor: 'rgba(82, 130, 255, 0.47)' }} className="flex justify-center items-center col-span-3 row-start-1 row-end-2"><img src="assets/google_logo.svg" alt="Google logo" /></div>
                    <div style={{ backgroundColor: 'rgba(48, 93, 255, 0.2)' }} className="flex justify-center items-center col-span-3 row-start-2 row-end-3"><img src="assets/freelancer_logo.svg" alt="Freelancer logo" /></div>
                    <div style={{ backgroundColor: 'rgba(122, 137, 236, 0.27)' }} className="flex justify-center items-center col-span-3 row-start-2 row-end-3"><img src="assets/microsoft_logo.svg" alt="Microsoft logo" /></div>
                </div>
            </div>
            <div className="flex justify-between">
                <img src="assets/csesoc_logo_white.svg" alt="CSESoc Logo" />
                <div className="flex flex-col max-w-[14rem]">
                    <p className="mb-6">B03 CSE Building K17, UNSW csesoc@csesoc.org.au</p>
                    <p>© 2021 — CSESoc UNSW</p>
                </div>
            </div>
            <img src="assets/sponsors_backdrop.svg" alt="Sponsors backdrop" className="absolute bottom-0 left-0 w-screen -z-10" />
        </section >
    )
}

export default Sponsors