export type Language = "pt" | "en" | "es";

export const translations = {
  pt: {
    nav: {
      home: "Início",
      calendars: "Calendários",
      gamesByField: "Jogos por Campo",
      search: "Pesquisar",
    },

    home: {
      eyebrow: "VolleySpot 2026",
      title: "Torneio VolleySpot",
      description:
        "Consulta calendários, jogos e resultados do torneio de voleibol VolleySpot — Competição em Festa.",
      calendarsButton: "Ver calendários",
      searchButton: "Pesquisar equipa",

      sectionKicker: "Calendários & Resultados",
      sectionTitle: "Informação rápida para equipas, atletas e adeptos",
      sectionDescription:
        "Esta página serve como ponto rápido de consulta para horários, campos, jogos e resultados das várias fases da competição.",

      nextGamesTitle: "Próximos jogos",
      nextGamesDescription: "Consulta os próximos jogos do torneio.",
      nextGamesButton: "Ver calendário",

      gamesByFieldTitle: "Jogos por campo",
      gamesByFieldDescription: "Consulta os jogos separados por campo.",
      gamesByFieldButton: "Ver campos",
    },

    calendars: {
      eyebrow: "Calendários",
      title: "Próximos jogos",
      description:
        "Consulta os próximos jogos do torneio, organizados por horário e campo.",
      loading: "A carregar jogos...",
      error: "Erro ao carregar os jogos.",
      empty: "Sem próximos jogos disponíveis.",
    },

    gamesByField: {
      eyebrow: "Campos",
      title: "Jogos por campo",
      description:
        "Seleciona um campo para consultar os respetivos jogos, horários, equipas e resultados.",
      selectField: "Selecionar campo",
      field: "Campo",
      showingField: "A mostrar jogos do campo",
      chooseField: "Escolhe um campo para veres os jogos.",
      emptyBeforeSelect: "Seleciona um campo para carregar os jogos.",
      empty: "Sem jogos para este campo.",
      loading: "A carregar jogos...",
      error: "Erro ao carregar os jogos.",
    },

    search: {
      eyebrow: "Pesquisar",
      title: "Pesquisar jogos",
      description: "Filtra por equipa, escalão ou tipo de competição.",
      teamLabel: "Equipa",
      teamPlaceholder: "Nome da equipa",
      typeLabel: "Tipo",
      allTypes: "Todos",
      button: "Filtrar",
      clear: "Limpar",
      initialMessage: "Introduz filtros para pesquisar.",
      empty: "Sem resultados para os filtros aplicados.",
      loading: "A carregar jogos...",
      error: "Erro ao carregar jogos.",
    },

    table: {
      number: "N.º",
      day: "Dia",
      time: "Hora",
      field: "Campo",
      teamA: "Equipa A",
      teamB: "Equipa B",
    },

    footer: {
      description:
        "Um torneio único que combina voleibol, competição e convívio.",
      copyright: "Associação Académica de São Mamede",
    },

    notFound: {
      title: "Página não encontrada",
      description:
        "A página que tentaste abrir não existe ou ainda não foi criada.",
      button: "Voltar ao início",
    },
  },

  en: {
    nav: {
      home: "Home",
      calendars: "Schedules",
      gamesByField: "Games by Court",
      search: "Search",
    },

    home: {
      eyebrow: "VolleySpot 2026",
      title: "VolleySpot Tournament",
      description:
        "Check schedules, games and results for the VolleySpot volleyball tournament — Competition in Celebration.",
      calendarsButton: "View schedules",
      searchButton: "Search team",

      sectionKicker: "Schedules & Results",
      sectionTitle: "Quick information for teams, athletes and supporters",
      sectionDescription:
        "This page is a quick access point for times, courts, games and results from the different stages of the competition.",

      nextGamesTitle: "Upcoming games",
      nextGamesDescription: "Check the next games of the tournament.",
      nextGamesButton: "View schedule",

      gamesByFieldTitle: "Games by court",
      gamesByFieldDescription: "Check games separated by court.",
      gamesByFieldButton: "View courts",
    },

    calendars: {
      eyebrow: "Schedules",
      title: "Upcoming games",
      description:
        "Check the upcoming games of the tournament, organized by time and court.",
      loading: "Loading games...",
      error: "Error loading games.",
      empty: "No upcoming games available.",
    },

    gamesByField: {
      eyebrow: "Courts",
      title: "Games by court",
      description:
        "Select a court to check its games, times, teams and results.",
      selectField: "Select court",
      field: "Court",
      showingField: "Showing games from court",
      chooseField: "Choose a court to view its games.",
      emptyBeforeSelect: "Select a court to load the games.",
      empty: "No games for this court.",
      loading: "Loading games...",
      error: "Error loading games.",
    },

    search: {
      eyebrow: "Search",
      title: "Search games",
      description: "Filter by team, age group or competition type.",
      teamLabel: "Team",
      teamPlaceholder: "Team name",
      typeLabel: "Type",
      allTypes: "All",
      button: "Filter",
      clear: "Clear",
      initialMessage: "Enter filters to search.",
      empty: "No results for the selected filters.",
      loading: "Loading games...",
      error: "Error loading games.",
    },

    table: {
      number: "No.",
      day: "Day",
      time: "Time",
      field: "Court",
      teamA: "Team A",
      teamB: "Team B",
    },

    footer: {
      description:
        "A unique tournament combining volleyball, competition and community.",
      copyright: "Associação Académica de São Mamede",
    },

    notFound: {
      title: "Page not found",
      description:
        "The page you tried to open does not exist or has not been created yet.",
      button: "Back to home",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      calendars: "Calendarios",
      gamesByField: "Juegos por Pista",
      search: "Buscar",
    },

    home: {
      eyebrow: "VolleySpot 2026",
      title: "Torneo VolleySpot",
      description:
        "Consulta calendarios, partidos y resultados del torneo de voleibol VolleySpot — Competición en Fiesta.",
      calendarsButton: "Ver calendarios",
      searchButton: "Buscar equipo",

      sectionKicker: "Calendarios y Resultados",
      sectionTitle: "Información rápida para equipos, atletas y aficionados",
      sectionDescription:
        "Esta página sirve como punto rápido de consulta para horarios, pistas, partidos y resultados de las distintas fases de la competición.",

      nextGamesTitle: "Próximos partidos",
      nextGamesDescription: "Consulta los próximos partidos del torneo.",
      nextGamesButton: "Ver calendario",

      gamesByFieldTitle: "Juegos por pista",
      gamesByFieldDescription: "Consulta los partidos separados por pista.",
      gamesByFieldButton: "Ver pistas",
    },

    calendars: {
      eyebrow: "Calendarios",
      title: "Próximos partidos",
      description:
        "Consulta los próximos partidos del torneo, organizados por horario y pista.",
      loading: "Cargando partidos...",
      error: "Error al cargar los partidos.",
      empty: "No hay próximos partidos disponibles.",
    },

    gamesByField: {
      eyebrow: "Pistas",
      title: "Juegos por pista",
      description:
        "Selecciona una pista para consultar sus partidos, horarios, equipos y resultados.",
      selectField: "Seleccionar pista",
      field: "Pista",
      showingField: "Mostrando partidos de la pista",
      chooseField: "Elige una pista para ver los partidos.",
      emptyBeforeSelect: "Selecciona una pista para cargar los partidos.",
      empty: "No hay partidos para esta pista.",
      loading: "Cargando partidos...",
      error: "Error al cargar los partidos.",
    },

    search: {
      eyebrow: "Buscar",
      title: "Buscar partidos",
      description: "Filtra por equipo, categoría o tipo de competición.",
      teamLabel: "Equipo",
      teamPlaceholder: "Nombre del equipo",
      typeLabel: "Tipo",
      allTypes: "Todos",
      button: "Filtrar",
      clear: "Limpiar",
      initialMessage: "Introduce filtros para buscar.",
      empty: "No hay resultados para los filtros aplicados.",
      loading: "Cargando partidos...",
      error: "Error al cargar los partidos.",
    },

    table: {
      number: "N.º",
      day: "Día",
      time: "Hora",
      field: "Pista",
      teamA: "Equipo A",
      teamB: "Equipo B",
    },

    footer: {
      description:
        "Un torneo único que combina voleibol, competición y convivencia.",
      copyright: "Associação Académica de São Mamede",
    },

    notFound: {
      title: "Página no encontrada",
      description:
        "La página que intentaste abrir no existe o aún no se ha creado.",
      button: "Volver al inicio",
    },
  },
};
