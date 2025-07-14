import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./components/dot-group";
import Landing from "./components/landing";
import LineGradient from "./components/line-gradient";
import MySkills from "./components/my-skills";
import Projects from "./components/projects";
import ContactMe from "./components/contact";
import AboutMe from "./components/about";
import Footer from "./components/footer";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="w-5/6 mx-auto tablet:h-full">
        {isAboveMediumScreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}

        <Landing setSelectedPage={setSelectedPage} />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto">
        <AboutMe />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto tablet:h-auto">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto">
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
};

export default App;
