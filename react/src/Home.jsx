import React from 'react'
import Header from './shared/Header'
import "./index.css"
import { LanguageProvider } from './LanguageContext'
import Head from './shared/Head'
import Content from './Content'
import Footer from './shared/Footer'
import Button from './shared/Button'

const Home = () => {
    return (
        <div>
            <LanguageProvider >
                <Head></Head>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
                <Button></Button>
            </LanguageProvider>
        </div>
    )
}

export default Home