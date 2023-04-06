import React from "react";
import BeforeHeader from "../Component/BeforeHeader";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import FirstSection from "../Component/Home/FirstSection";
import ThirdSection from "../Component/Home/ThirdSection";
import FinalSection from "../Component/Home/FinalSection";
import RowAndColumnSpacing from "../Component/Home/SecondSection";

const Home = () => {
    return (
        <div>
            <BeforeHeader />
            <Header />
            <FirstSection />
            <RowAndColumnSpacing />
            <ThirdSection/>
            <FinalSection/>
            <Footer />
        </div>
    )

}

export default Home;