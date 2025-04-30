import Main from "./main";
import Work from "./Work";
import Testimonials from "./Testimonials";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import { BackgroundBeamsWithCollision  } from '@/components/ui/background-beams-with-collision';

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="space-y-20">
        <Main />
        <About />
        <Work/>
        <Testimonials />
        
      </main>
      <Footer />
    </>
  )
}
