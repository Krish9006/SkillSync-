// app/page.js
import Hero from "./components/Hero";
import DiagnosticsSection from "./components/DiagnosticsSection";
import SolutionSection from "./components/SolutionSection";
import TeamFinderPreview from "./components/TeamFinderPreview";
import FoundersLog from "./components/FoundersLog";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DiagnosticsSection />
      <SolutionSection />
      <TeamFinderPreview />
      <FoundersLog />
    </>
  );
}