import Navbar from './components/navbar/navbar';
import LandingPage from './components/landing-page/landingPage';
import LandingSec from './components/landing-page/landingSecPage';
import LandingThird from './components/landing-page/landingThird';
import LandingFour from './components/landing-page/landingFourth';
import LandingFivePage from './components/landing-page/landingFivePage';
import LandingSix from './components/landing-page/landingSixPage';
import LandingSevenPage from './components/landing-page/landingSevenPage';
import Footer from './components/landing-page/footer';

const Dashboard = () => {

    return (
        <>
            <Navbar />
            <div className="scroll-smooth">
                <div id="Dashboard"  >
                    <LandingPage/>
                </div>
                <div id="LandingSec"  >
                    <LandingSec />
                </div>
                <div id="LandingThird"  >
                    <LandingThird />
                </div>
                <div id="LandingFour"  >
                    <LandingFour />
                </div>
                <div id="LandingFivePage" >
                    <LandingFivePage />
                </div>
                <div id="LandingSix" >
                    <LandingSix />
                </div>
                <div id="LandingSevenPage">
                    <LandingSevenPage />
                </div>
                <div id="Footer">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
