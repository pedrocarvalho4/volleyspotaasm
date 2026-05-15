import { translations } from "../data/translations";

type FooterProps = {
  t: typeof translations.pt;
};

function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div>
        <strong>VolleySpot</strong>
        <p>{t.footer.description}</p>
      </div>

      <span>
        © {currentYear} VolleySpot — {t.footer.copyright}
      </span>
    </footer>
  );
}

export default Footer;
