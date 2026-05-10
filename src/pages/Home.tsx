import HeroSection from "../components/home/HeroSection";
import CommunityStatsSection from "../components/home/CommunityStatsSection";
import ProjectsSection from "../components/home/ProjectsSection";
import IntroSection from "../components/home/IntroSection";
import GallerySection from "../components/home/GallerySection";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <CommunityStatsSection />
        <ProjectsSection />
        <IntroSection />
        <GallerySection />
      </main>

      <Footer />
    </div>
  );
}

