import Discover from "./components/Discover";
import Experience from "./components/Experience";
import HeroSlide from "./components/HeroSlide";
import Ipl from "./components/Ipl";
import Vehicels from "./components/Vehicels";


export default function Home() {
  return (
    <div>
      <HeroSlide />
      
      <Vehicels />
      <Experience />
      <Discover />
    </div>
  )
}