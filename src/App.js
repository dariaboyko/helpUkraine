import MainPage from "./pages/MainPage";
import UkrainianPage from "./pages/UkrainianPage";
import ForeignerPage from "./pages/ForeignerPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/forUkrainians" element={<UkrainianPage />} />
      <Route path="/forForeigners" element={<ForeignerPage />} />
    </Routes>
  );
}

export default App;
