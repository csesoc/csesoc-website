import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import React, { useState, useEffect } from "react"
import Markdown from 'react-markdown'

type Info = {
    title : string
    author : string
    data : string
}

export default function Article( {articleName} : {articleName : string | string[] | undefined} ) {

    // gets article name from URL, show 'fetching article' until URL is fetched
    let articleUrl = "/articles/" + articleName
    if (articleName == undefined) {
        return (
            <div> fetching article... </div>
        )
    }

    // create variables markdown and infoStr, which hold data fetched from "/articles"
    // also create functions to update these constants
    const [markdown, setMarkdown] = useState("");
    const [infoStr, setInfo] = useState("");
    useEffect(() => {
        fetch(`${articleUrl}/content.md`)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }, []);
    useEffect(() => {
        fetch(`${articleUrl}/info.json`)
        .then((res) => res.text())
        .then((object) => setInfo(object));
    }, []);

    // console logs for debugging
    // console.log("URL: " + articleUrl)
    // console.log("MARKDOWN: " + markdown)
    // console.log("INFO: " + infoStr)

    // return loading until infoStr is fetched
    if (!infoStr) {
        return (
            <div> fetching article info... </div>
        )
    }

    // if article doesn't exist, return "article not found"
    if (infoStr.startsWith("<!DOCTYPE html>")) {
        return (
            <div> article not found... </div>
        )
    }

    // process infoStr into JSON object
    const infoObj = JSON.parse(infoStr)

    // react markdown styles
    const MarkdownLink = ({ children } : {children : string}) => (
        <a className="underline text-cyan-200">{children}</a>
    );
    const MarkdownHeading1 = ({ children } : {children : string}) => (
        <h1 className="text-5xl font-[1000]">{children}</h1>
    );
    const MarkdownHeading2 = ({ children } : {children : string}) => (
        <h2 className="text-4xl font-black">{children}</h2>
    );
    const MarkdownHeading3 = ({ children } : {children : string}) => (
        <h3 className="text-3xl font-extrabold">{children}</h3>
    );
    
    return (
        <article className="mt-[6px]">
            <header className="mb-[3vmin] w-[100vmin] justify-self-center">
                <div className="mb-[6vmin] w-[120vmin] justify-self-center justify-items-center">
                    <img className="w-[120vmin]" src={articleUrl + "/cover.png"}/>
                </div>
                {/* title, author, date */}
                <div className=""> 
                    <div className="mb-[16px]">
                        {infoObj.tags}
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
                <a className="font l:text-3xl text-xl whitespace-pre-wrap">
                    <ReactMarkdown
                        components = {{
                            a: MarkdownLink,
                            h1: MarkdownHeading1,
                            h2: MarkdownHeading2,
                            h3: MarkdownHeading3,
                        }}
                    >
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
