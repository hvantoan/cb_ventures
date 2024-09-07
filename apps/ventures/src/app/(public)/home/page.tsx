'use client';

import Aos from 'aos';
import { useEffect } from 'react';

import { Advisers, Articles, Features, Hero, Partner, Trading, Vision } from '@/app/(public)/_components';
import friends from '@/data/friends.json';
import articlesData from '@/data/sampleCards.json';
import visionData from '@/data/visions.json';

import 'aos/dist/aos.css';

const Landing = () => {
  const { articles, visions, advisers } = {
    articles: JSON.parse(JSON.stringify(articlesData.BlogCardData)),
    visions: visionData,
    advisers: JSON.parse(JSON.stringify(friends))
  };

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
      anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <main>
      <Hero />
      <Partner />
      <Trading />
      <Features />
      <Vision data={visions} />
      <Advisers data={advisers} />
      <Articles data={articles} />
    </main>
  );
};

export default Landing;
