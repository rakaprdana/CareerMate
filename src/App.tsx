import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConsultantPage } from "./components/pages/ConsultantPage";
import { LandingPage } from "./components/pages/LandingPage";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/room" element={<ConsultantPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
