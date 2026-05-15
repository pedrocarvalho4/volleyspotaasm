import type { Language } from "../data/translations";
import type { translations } from "../data/translations";

type NavbarProps = {
  t: typeof translations.pt;
  language: Language;
  setLanguage: (language: Language) => void;
};

function Navbar({ t, language, setLanguage }: NavbarProps) {
  return (
    <header className="navbar">
      <a href="/" className="navbar-brand">
        <img
          src="/volleyspot-logo.png"
          alt="VolleySpot"
          className="navbar-logo-img"
        />
      </a>

      <nav className="navbar-links">
        <a href="/">{t.nav.home}</a>
        <a href="/calendarios">{t.nav.calendars}</a>
        <a href="/jogos-por-campo">{t.nav.gamesByField}</a>
        <a href="/pesquisar">{t.nav.search}</a>
      </nav>

      <div className="language-switcher" aria-label="Selecionar idioma">
        <button
          type="button"
          className={language === "pt" ? "active" : ""}
          onClick={() => setLanguage("pt")}
        >
          PT
        </button>

        <button
          type="button"
          className={language === "en" ? "active" : ""}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>

        <button
          type="button"
          className={language === "es" ? "active" : ""}
          onClick={() => setLanguage("es")}
        >
          ES
        </button>
      </div>
    </header>
  );
}

export default Navbar;
