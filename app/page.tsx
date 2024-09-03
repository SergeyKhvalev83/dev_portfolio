"use client";
import Element, { useEffect } from "react";
import AboutMeSection from "./components/AboutMeSection";
import FooterSection from "./components/FooterSection";
import HeaderComponent from "./components/HeaderComponent";
import IntoSection from "./components/IntoSection";
import SkillsSection from "./components/SkillsSection";
import PortfolioSection from "./components/PortfolioSection";
import ExperienceSections from "./components/ExperienceSections";
import ContactsSection from "./components/ContactsSection";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((eachEl) => {
        eachEl.target.classList.toggle("visible", eachEl.isIntersecting);
      });
    });

    const elSkillsContainer: Element | null = document.querySelector(
      "div.skills-container"
    );

    if (elSkillsContainer) {
      observer.observe(elSkillsContainer);
    }

    //to animation work when we scrol up after component mounte
    const elSections: NodeListOf<HTMLElement> | null = document.querySelectorAll("section");

    if (elSections.length > 0) {
      elSections.forEach(eachSec => {
        observer.observe(eachSec)
      })
    }
  }, []);
  return (
    <>
      <main>
        <HeaderComponent />
        <IntoSection />
        <AboutMeSection />
        <SkillsSection />
        <PortfolioSection/>
        <ExperienceSections/>
        <ContactsSection/>
      </main>
      <FooterSection />
    </>
  );
}
