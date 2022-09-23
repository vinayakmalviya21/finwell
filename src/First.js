import React from 'react'
import Hero from './components/hero/Hero';
import About from './components/about/about';
import Blog from './components/cards/card2';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Playstore from './components/app/Playstore';
import Footer from './components/footer/footer';

export default function first() {
    return (
        <div>
            <Hero />
            <About />
            <Blog/>
            <Services/>
            <Playstore/>
            <Contact />
            <Footer />
        </div>
    )
}
