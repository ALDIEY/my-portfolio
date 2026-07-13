import { useEffect, useState, useRef } from "react";
import PipelineNav from "./components/PipelineNav";
import Hero from "./components/Hero";
import Build from "./components/Build";
import Test from "./components/Test";
import Deploy from "./components/Deploy";
import Monitor from "./components/Monitor";
import Release from "./components/Release";
import { STAGES } from "./data";

function App() {
  const [active, setActive] = useState(STAGES[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    STAGES.forEach((stage) => {
      const el = document.getElementById(stage.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <PipelineNav active={active} />
      <main>
        <Hero />
        <Build />
        <Test />
        <Deploy />
        <Monitor />
        <Release />
      </main>
    </div>
  );
}

export default App;
