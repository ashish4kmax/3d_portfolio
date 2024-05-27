import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='relative'>
          <video
            autoPlay
            loop
            muted
            className='absolute inset-0 w-full h-full object-cover'
          >
            <source src="/herobag.mp4" type="video/mp4" />
          </video>
          <div className='relative z-10'>
            <Navbar />
            <Hero />
          </div>
          <div className='absolute inset-0 bg-black opacity-50 z-0'></div> {/* Optional overlay for better text contrast */}
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
