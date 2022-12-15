import React from 'react';
import Dropdown from '../components/Dropdown';
import Banner from '../components/HomeBanner';
import AProposDetails from '../assets/aProposOpen.json'
import banner from '../assets/aProposBannerDesktop.svg';



const Apropos = () => {
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
            <Banner specificClass="APropos__style " src={banner} />
            <ul className='dropdown__list'>
                {AProposDetails.map((theme, index) =>
                    <Dropdown
                        key={index}
                        title={theme.title}
                        text={
                            <p className='component dropdown__details-text'>{theme.text}</p>
                        } />
                )}
            </ul>
        </main>
    );
};

export default Apropos;