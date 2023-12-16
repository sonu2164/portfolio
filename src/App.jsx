import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import Hero2 from './components/Hero2'
import WhatDone from './components/WhatDone';


function App() {


  return (

    <BrowserRouter>

      <div className='relative z-0 bg-primary m-0'>

        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>

          <Navbar />

          <Hero />
        </div>
        <About />


        <WhatDone className="m-10" />
        <Tech />
        <div className='m-4'>
          <Works />
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App
