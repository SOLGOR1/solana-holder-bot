import Header from '../components/Header';
import Benefits from '../components/Benefits';
import Guide from '../components/Guide';
import HowItWorks from '../components/HowItWorks';
import Screenshots from '../components/Screenshots';
import Banner from '../components/Banner';
import Testimonials from '../components/Testimonials';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* <Benefits /> */}
        {/* <Guide /> */}
        {/* <HowItWorks /> */}
        {/* <Screenshots /> */}
        {/* <Banner /> */}
        {/* <Testimonials /> */}
        {/* <FAQs /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}