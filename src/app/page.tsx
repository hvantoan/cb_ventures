"use client";
import "aos/dist/aos.css";
import roadmapData from '@/libs/data/roadmap.json'
import pricingsData from '@/libs/data/pricing.json'
import articlesData from '@/libs/data/sampleCards.json'
import visionData from '@/libs/data/visions.json'
import friends from '@/libs/data/friends.json'
import { Advisers, Articles, Features, Hero, Partner, Pricing, Roadmap, Trading, Vision } from '@/app/_components'
import Aos from 'aos'
import { useEffect } from 'react';
const Landing = () => {

    const { roadmaps, roadDone, pricings, articles, visions, advisers } = {
        roadmaps: roadmapData.data,
        roadDone: 3,
        //  Pricing card
        pricings: JSON.parse(JSON.stringify(pricingsData)),
        articles: JSON.parse(JSON.stringify(articlesData.BlogCardData)),
        visions: visionData,
        advisers: JSON.parse(JSON.stringify(friends)),
    }

    useEffect(() => {
        Aos.init({
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        });

    }, [])

    return (
        <>
            <Hero />
            <Partner />
            <Trading />
            <Features />
            <Vision data={visions} />
            <Roadmap data={roadmaps} roadDone={roadDone} />
            <Pricing data={pricings} />
            <Advisers data={advisers} />
            <Articles data={articles} />
        </>
    )
}
export default Landing;