import JournalHeader from "../components/journal/JournalHeader";
import JournalEntries from "../components/journal/JournalEntries";
import Footer from "../components/layout/Footer";

export default function Journal() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-surface py-20">
      {/* Background doodles like homepage */}
      <svg className="absolute top-40 right-[-5%] w-64 h-64 text-brand-purple-light opacity-5 transform rotate-45" viewBox="0 0 100 100" fill="currentColor">
         <polygon points="50,0 100,50 50,100 0,50" />
      </svg>
      <svg className="absolute bottom-40 left-[-5%] w-80 h-80 text-brand-orange opacity-5 transform -rotate-12" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="50" r="50" />
      </svg>

      <main className="flex-grow container mx-auto px-6 relative z-10">
        <JournalHeader />
        <JournalEntries />
      </main>
      <Footer />
    </div>
  );
}
