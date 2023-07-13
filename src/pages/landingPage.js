import './landing.css';
import FeaturesSection from '../landingPageComp/FeaturesSection';
import Footer from '../landingPageComp/Footer';
import HeroSection from '../landingPageComp/HeroSection';
import Navbar from '../landingPageComp/Navbar';

const Landing = () => {
	return (
		<div className='App'>
			<Navbar />
			<HeroSection />
			<FeaturesSection />
			<Footer />
		</div>
	);
}

export default Landing;