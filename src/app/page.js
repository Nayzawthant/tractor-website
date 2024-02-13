import Discover from "./components/Discover";
import Experience from "./components/Experience";
import HeroSlide from "./components/HeroSlide";

import Latest from "./components/Latest";

import Vehicels from "./components/Vehicels";


export default function Home() {
  return (
    <div>
      <HeroSlide />
      <Latest />
      <Experience />
      <Vehicels />
      
      <Discover />
    </div>
  )
}