import React from 'react';
import Collapse from '../../components/collapse/Collapse';
import Banner from '../../components/banner/Banner';
import aboutDetails from '../../assets/aboutDetails.json'
import banner from '../../components/banner/aboutBannerDesktop.svg';



const About = () => {
    // const [isDesktop, setIsDesktop] = useState();
    // const [resized, setResized] = useState();


    // // window.addEventListener("resize", () => {
    // //     window.matchMedia("(min-width: 768px)").matches ? setIsDesktop(true) : setIsDesktop(false);
    // // });

    // window.addEventListener("resize", () => {
    //     setResized(true);
    //     console.log(resized);
    // });


    // useEffect(() => {
    //     setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
    //     console.log("setIsDesktop")
    //     setResized(false);
    //     console.log("desktop?" + window.matchMedia("(min-width: 768px)").matches);
    // }, [resized])

    return (
        <main>
            <Banner specificClass="about__style " src={banner} />
            <section className='collapse__about-section'>
                {aboutDetails.map((theme, index) =>
                    <Collapse
                        key={index}
                        title={theme.title}
                        text={
                            <p className='about collapse__details-text'>{theme.text}</p>
                        }
                        className=""
                    />
                )}
            </section>
        </main>
    );
};

export default About;