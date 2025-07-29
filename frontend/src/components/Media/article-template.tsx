import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import React, { useState, useEffect } from "react"

type Info = {
    title : string
    author : string
    data : string
}

export default function Article( {articleName} : {articleName : string | string[] | undefined} ) {

    // const fs = require("fs");
    let articleUrl = "/articles/" + articleName
    console.log("URL: " + articleUrl)

    if (articleName == undefined) {
        return (
            <div> fetching article... </div>
        )
    }

    // if (fs.existsSync(articleUrl)) {
    //     // Do something
    // }

    const [markdown, setMarkdown] = useState("");
    useEffect(() => {
        fetch(`${articleUrl}/content.md`)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }, []);

    console.log("MARKDOWN: " + markdown)

    // infoObj here is not a string, but of type Info. 
    const [infoObj, setInfo] = useState("");
    useEffect(() => {
        fetch(`${articleUrl}/info.json`)
        .then((res) => res.text())
        .then((text) => JSON.parse(`${text}`))
        .then((object) => setInfo(object));
    }, []);
    
    return (
        <article className="mt-[6px]">
            <header className="mb-[6vmin] w-[100vmin] justify-self-center">
                <div className="mb-[6vmin] w-[120vmin] justify-self-center">
                    <img src={articleUrl + "/cover.png"}/>
                </div>
                {/* title, author, date */}
                <div className=""> 
                    <div className="mb-[16px]">
                        Article
                    </div>
                    <h1 className="font-black xl:text-6xl text-xl">
                        {infoObj.title}
                    </h1>
                    <div className="mt-[24px] flex">
                        <div className="inline-flex">
                            <img src={articleUrl + "/author.jpg"} className="inline ml-[4px] mr-[14px] w-[56px] h-[56px] rounded-full"/>
                        </div>
                        <div className="inline-flex flex-col self-center">
                            <p className="font-bold self-start">
                                {infoObj.author}
                            </p>
                            <p className="self-end">
                                {infoObj.date}
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <section className="w-[100vmin] justify-self-center pb-[75px]">
                <a className="font l:text-3xl text-xl">
                    <ReactMarkdown>
                        {markdown}
                    </ReactMarkdown>
                </a>
            </section>
        </article>
    );
}

// ============================================================================


    // <section
    //   className="flex flex-col min-h-screen justify-between py-8 xl:px-24 md:px-10 px-5 relative overflow-hidden"
    //   id="article"
    // >
    //   <div className="flex justify-between items-end">
    //     <div>
    //       <div className="font-semibold">
    //         <h2 className="font-black 2xl:text-8xl lg:text-6xl text-4xl">Hello World!</h2>
    //       </div>
    //       <div className="font-semibold mt-10">
    //         <h2 className="font-bold 2xl:text-3xl text-xl">
    //           We are the principal representative body for{' '}
    //           <a href="https://www.unsw.edu.au/engineering/our-schools/computer-science-and-engineering"
    //              target = "_blank"
    //              className="text-[#3977F9] relative after:bg-current after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:duration-200"
    //           >
    //             UNSW computing | {articleName}
    //           </a>
    //           {' '}students.
    //             <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    //         </h2>
    //       </div>
    //     </div>
    //   </div>
    // </section>
