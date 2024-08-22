import AboutMeSection from "./components/AboutMeSection";
import HeaderComponent from "./components/HeaderComponent";
import IntoSection from "./components/IntoSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <main>
      <HeaderComponent/>
      <IntoSection/>
      <AboutMeSection/>
      <SkillsSection/>
    </main>
  );
}
