import React, { useState, useEffect } from 'react';
import Intro from '../../components/Intro/Intro';
import Skills from '../../components/Skills/Skills';
import Action from '../../components/Action/Action';
import About from '../../components/About/About';


const Home = () => {
    const initialMobile = window.innerWidth < 768 ? true : false;
    const [mobile, setMobile] = useState(initialMobile);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setMobile(true)
            } else {
                setMobile(false);
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <Intro />
            <Skills />
            {mobile ? <Action /> : null}
            <About />
        </div>
    );
}

export default Home;

// Testing dual boot commit
