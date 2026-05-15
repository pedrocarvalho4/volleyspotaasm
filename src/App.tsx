import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Calendarios from "./pages/Calendarios";
import Pesquisar from "./pages/Pesquisar";
import JogosPorCampo from "./pages/JogosPorCampo";
import NotFound from "./pages/NotFound";
import { useLanguage } from "./hooks/useLanguage";

function App() {
  const currentPath = window.location.pathname;
  const { language, setLanguage, t } = useLanguage();

  const renderPage = () => {
    switch (currentPath) {
      case "/":
        return <Home t={t} />;

      case "/calendarios":
        return <Calendarios t={t} />;

      case "/pesquisar":
        return <Pesquisar t={t} />;

      case "/jogos-por-campo":
        return <JogosPorCampo t={t} />;

      default:
        return <NotFound t={t} />;
    }
  };

  return (
    <div className="app">
      <Navbar t={t} language={language} setLanguage={setLanguage} />

      <main className="main-content">{renderPage()}</main>

      <Footer t={t} />
    </div>
  );
}

export default App;
