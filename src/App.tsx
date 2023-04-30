import "./App.css";
import Header from "./components/Header/Header";
import { MainPage } from "./pages/MainPage/MainPage";
import {Routes, Route} from "react-router-dom"
import { VacancyPage } from "./pages/VacancyPage/VacancyPage";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage";
import { EmptyPage } from "./pages/EmptyPage/EmptyPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/vacancies/:id" element={<VacancyPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/empty" element={<EmptyPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
