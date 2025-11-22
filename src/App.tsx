import React from "react";
import { ServicesSection } from "./components/ServicesSection";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Your hero / nav here */}
      <main>
        {/* ...hero... */}
        <ServicesSection />
        {/* ...other sections... */}
      </main>
      {/* footer */}
    </div>
  );
};

export default App;
