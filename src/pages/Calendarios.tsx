import { useMemo, useState } from "react";
import { translations } from "../data/translations";

type CalendariosProps = {
  t: typeof translations.pt;
};

type CalendarCategory = {
  id: string;
  label: string;
  url: string;
};

function Calendarios({ t }: CalendariosProps) {
  const calendarCategories: CalendarCategory[] = useMemo(
    () => [
      {
        id: "sub14-fem",
        label: t.calendars.categories.sub14Fem,
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6BWRWRF5TR-9ldB8J9u0wFG6LOoFUaS_WkpKHUYDtNJC0wgMDg4d20Y6wVZ84795P5038u3PQyIp3/pubhtml?gid=0&single=true",
      },
      {
        id: "sub15-fem",
        label: t.calendars.categories.sub15Fem,
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6BWRWRF5TR-9ldB8J9u0wFG6LOoFUaS_WkpKHUYDtNJC0wgMDg4d20Y6wVZ84795P5038u3PQyIp3/pubhtml?gid=1721051075&single=true",
      },
      {
        id: "sub16-fem",
        label: t.calendars.categories.sub16Fem,
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6BWRWRF5TR-9ldB8J9u0wFG6LOoFUaS_WkpKHUYDtNJC0wgMDg4d20Y6wVZ84795P5038u3PQyIp3/pubhtml?gid=119289724&single=true",
      },
      {
        id: "sub21-fem",
        label: t.calendars.categories.sub21Fem,
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6BWRWRF5TR-9ldB8J9u0wFG6LOoFUaS_WkpKHUYDtNJC0wgMDg4d20Y6wVZ84795P5038u3PQyIp3/pubhtml?gid=1200191212&single=true",
      },
      {
        id: "sub16-masc",
        label: t.calendars.categories.sub16Masc,
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6BWRWRF5TR-9ldB8J9u0wFG6LOoFUaS_WkpKHUYDtNJC0wgMDg4d20Y6wVZ84795P5038u3PQyIp3/pubhtml?gid=125967639&single=true",
      },
      {
        id: "sub21-masc",
        label: t.calendars.categories.sub21Masc,
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6BWRWRF5TR-9ldB8J9u0wFG6LOoFUaS_WkpKHUYDtNJC0wgMDg4d20Y6wVZ84795P5038u3PQyIp3/pubhtml?gid=788805659&single=true",
      },
    ],
    [t],
  );

  const [selectedCategoryId, setSelectedCategoryId] = useState(
    calendarCategories[0].id,
  );

  const selectedCategory = calendarCategories.find(
    (category) => category.id === selectedCategoryId,
  );

  return (
    <section className="page-section">
      <div className="page-header">
        <span className="section-kicker">{t.calendars.eyebrow}</span>

        <h2>{t.calendars.title}</h2>

        <p>{t.calendars.description}</p>
      </div>

      <div className="content-block calendars-block">
        <div className="calendar-tabs">
          {calendarCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={
                selectedCategoryId === category.id
                  ? "primary-button calendar-category-button"
                  : "secondary-button calendar-category-button"
              }
              onClick={() => setSelectedCategoryId(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {selectedCategory && (
          <div className="calendar-frame-wrapper">
            <div className="calendar-frame-header">
              <h3>{selectedCategory.label}</h3>
            </div>

            <iframe
              title={`${t.calendars.frameTitle} ${selectedCategory.label}`}
              src={selectedCategory.url}
              className="calendar-frame"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Calendarios;
