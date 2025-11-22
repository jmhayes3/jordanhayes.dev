import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { ServicesPage } from "./pages/Services";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* Optional: catch-all */}
        <Route
          path="*"
          element={
            <div className="py-24 text-center text-sm text-slate-300">
              <p>Page not found.</p>
            </div>
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
