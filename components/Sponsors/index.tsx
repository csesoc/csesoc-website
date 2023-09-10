import React from 'react'

const Sponsors = () => {
    return (
        <section className="flex flex-col min-h-screen py-8 px-24">
            <div>
                <p>04</p>
                <h2>SUPPORT CSESOC</h2>
            </div>
            <div className="flex-1 grid grid-cols-10 grid-row-2 py-80 px-64">
                <div className="bg-blue-300 sponsors col-span-4 row-start-1 row-end-3"></div>
                <div className="bg-red-300 atlassian col-span-3 row-start-1 row-end-2"></div>
                <div className="bg-yellow-300 google col-span-3 row-start-1 row-end-2"></div>
                <div className="bg-pink-300 freelancer col-span-3 row-start-2 row-end-3"></div>
                <div className="bg-green-300 microsoft col-span-3 row-start-2 row-end-3"></div>
            </div>
        </section >
    )
}

export default Sponsors