// 'use server'

import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Article from '@/components/Media/article-template';
// import Page from '@/components/Media/article-template';
// import getServerSideProps from '@/components/Media/article-template';

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import React, { useState, useEffect, Suspense } from "react"

export default function ArticlePage( { params } : { params: { articleName : string } }) {

    const router = useRouter()
    const articleName = router.query.articleName

    return (
        <section className="flex flex-col min-h-screen justify-between py-8 xl:px-24 md:px-10 px-5 relative overflow-hidden">
            <Navbar />
            <Article articleName={articleName}/>
            <Footer />
        </section>
    );
}