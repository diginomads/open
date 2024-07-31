import Image from "next/image";
import HeroSection from './components/HeroSection';
import TabNavigation from "./components/TabNavigation";
import TabTableNavigation from "./components/TabTableNavigation";
import TabTabNavTwo from "./components/TabTabNavTwo";
import TeamSection from "./components/TeamSection";
import OpenSourceFriends from "./components/OpenSourceFriends";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";
// import MapChart from "./components/MapChart";
import GrowthGraph from "./components/GrowthGraph";
// import TotalBookingCard from "./components/TotalBookingCard";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-white">
        <HeroSection />
        <TabNavigation />
        <TabTableNavigation />
        <TabTabNavTwo />
        {/* <MapChart /> */}
        <GrowthGraph /> 
        {/* <TotalBookingCard /> */}
        <TeamSection />
        <OpenSourceFriends />
        <BookingSection />
        <Footer />
      </div>
    </div>
  );
}
