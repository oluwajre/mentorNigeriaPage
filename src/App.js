import './App.css';
import HeroSection from './LandingPage/heroSection';
import ApplicationFormSection from './LandingPage/applicationFormSection';
import ModuleSection from './LandingPage/moduleSection';
import FooterSection from './LandingPage/footerSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ApplicationFormSection />
      <ModuleSection />
      <FooterSection />
    </div>
  );
}

export default App;
