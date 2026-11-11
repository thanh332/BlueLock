
// ============================================
// BLUE LOCK – UNLEASH YOUR EGO
// ============================================

// MOBILE MENU

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.textContent = navigation.classList.contains("open") ? "✕" : "☰";
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.textContent = "☰";
  });
});

// ============================================
// PROJECT PHASES
// ============================================

const phases = [
  {
    icon: "🔒",
    name: "FIRST SELECTION",
    label: "PHASE 01",
    description:
      "Die Spieler treten in Teams gegeneinander an. Sie müssen ihre Fähigkeiten verbessern und gemeinsam gewinnen."
  },
  {
    icon: "⚽",
    name: "SECOND SELECTION",
    label: "PHASE 02",
    description:
      "Kleine Teams, direkte Duelle und immer stärkere Gegner. Individuelle Fähigkeiten werden entscheidend."
  },
  {
    icon: "🏆",
    name: "U-20 MATCH",
    label: "PHASE 03",
    description:
      "Die besten Spieler aus Blue Lock stellen sich der japanischen U-20-Nationalmannschaft."
  },
  {
    icon: "🌍",
    name: "NEO EGOIST LEAGUE",
    label: "PHASE 04",
    description:
      "Internationale Spielphilosophien, neue Rivalitäten und das Streben nach Weltklasse."
  }
];

const phaseGrid = document.getElementById("phaseGrid");

phases.forEach(phase => {
  const card = document.createElement("article");
  card.className = "phase-card";

  card.innerHTML = `
    <span>${phase.label}</span>
    <div class="phase-icon">${phase.icon}</div>
    <h3>${phase.name}</h3>
    <p>${phase.description}</p>
  `;

  phaseGrid.appendChild(card);
});

// ============================================
// BLUE LOCK CHARACTERS
// ============================================

const players = [
  {
    name: "Yoichi Isagi",
    number: "11",
    group: "Team Z",
    weapon: "Raumwahrnehmung & Direktschuss",
    icon: "🧩",
    color: "#176be9",
    text: "Ein intelligenter Stürmer, der das Spielfeld liest und immer wieder neue Lösungen findet."
  },
  {
    name: "Meguru Bachira",
    number: "8",
    group: "Team Z",
    weapon: "Dribbling",
    icon: "🐝",
    color: "#e3b33b",
    text: "Ein kreativer Spieler, der mit überraschenden Dribblings und ungewöhnlichen Bewegungen begeistert."
  },
  {
    name: "Hyoma Chigiri",
    number: "4",
    group: "Team Z",
    weapon: "Geschwindigkeit",
    icon: "⚡",
    color: "#e584aa",
    text: "Mit seiner unglaublichen Schnelligkeit kann Chigiri die gegnerische Abwehr überlaufen."
  },
  {
    name: "Rensuke Kunigami",
    number: "9",
    group: "Team Z",
    weapon: "Schusskraft",
    icon: "💥",
    color: "#e68e37",
    text: "Ein körperlich starker Angreifer mit einem kraftvollen linken Fuss."
  },
  {
    name: "Rin Itoshi",
    number: "10",
    group: "Rivals",
    weapon: "Präzision & Spielkontrolle",
    icon: "🎯",
    color: "#379e9f",
    text: "Ein extrem talentierter und ehrgeiziger Spieler, der seine Gegner genau analysiert."
  },
  {
    name: "Seishiro Nagi",
    number: "7",
    group: "Rivals",
    weapon: "Ballkontrolle",
    icon: "❄️",
    color: "#9dacc8",
    text: "Ein Fussballgenie mit aussergewöhnlicher Technik und einem beinahe perfekten ersten Ballkontakt."
  },
  {
    name: "Reo Mikage",
    number: "14",
    group: "Rivals",
    weapon: "Vielseitigkeit",
    icon: "💎",
    color: "#a974d4",
    text: "Ein vielseitiger Spieler, der sich schnell an unterschiedliche Situationen anpasst."
  },
  {
    name: "Shoei Barou",
    number: "13",
    group: "Rivals",
    weapon: "Power & Torabschluss",
    icon: "👑",
    color: "#c44f4f",
    text: "Ein dominanter Stürmer, der das Spiel auf seine eigene Weise kontrollieren möchte."
  },
  {
    name: "Jyubei Aryu",
    number: "2",
    group: "Rivals",
    weapon: "Reichweite & Kopfball",
    icon: "🦒",
    color: "#8e6e9e",
    text: "Ein auffälliger Spieler mit grosser Körperlänge und starker Präsenz in der Luft."
  },
  {
    name: "Ryusei Shidou",
    number: "99",
    group: "Rivals",
    weapon: "Instinktiver Abschluss",
    icon: "🔥",
    color: "#d779bb",
    text: "Ein explosiver Stürmer, der aus schwierigen Positionen spektakuläre Tore erzielen kann."
  },
  {
    name: "Sae Itoshi",
    number: "10",
    group: "Rivals",
    weapon: "Passspiel & Technik",
    icon: "🌹",
    color: "#c17583",
    text: "Ein aussergewöhnlich talentierter Mittelfeldspieler mit internationaler Erfahrung."
  },
  {
    name: "Oliver Aiku",
    number: "2",
    group: "Rivals",
    weapon: "Verteidigung & Übersicht",
    icon: "🛡️",
    color: "#618f8a",
    text: "Ein herausragender Verteidiger, der gegnerische Angriffe früh erkennt."
  }
];

function renderPlayers(filter = "all") {
  const grid = document.getElementById("playerGrid");
  grid.innerHTML = "";

  const filtered = players.filter(player => {
    return filter === "all" || player.group === filter;
  });

  filtered.forEach(player => {
    const card = document.createElement("article");
    card.className = "player-card";

    card.innerHTML = `
      <div class="player-art"
           data-number="${player.number}"
           style="--player-color:${player.color}">
        <span>${player.icon}</span>
      </div>

      <div class="player-info">
        <small>${player.group.toUpperCase()} · #${player.number}</small>
        <h3>${player.name}</h3>
        <strong>WEAPON: ${player.weapon}</strong>
        <p>${player.text}</p>
      </div>
    `;

    grid.appendChild(card);
  });
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => {
      b.classList.remove("active");
    });

    button.classList.add("active");
    renderPlayers(button.dataset.filter);
  });
});

renderPlayers();

// ============================================
// ANIME
// ============================================

const anime = [
  {
    title: "BLUE LOCK",
    year: "2022–2023",
    type: "SEASON 01",
    icon: "🔒",
    description:
      "Isagi wird Teil des Blue-Lock-Projekts und beginnt seine Reise zum besten Stürmer."
  },
  {
    title: "VS. U-20 JAPAN",
    year: "2024",
    type: "SEASON 02",
    icon: "🏆",
    description:
      "Die besten Blue-Lock-Spieler treten gegen die japanische U-20-Nationalmannschaft an."
  },
  {
    title: "EPISODE NAGI",
    year: "2024",
    type: "MOVIE",
    icon: "❄️",
    description:
      "Eine neue Perspektive auf die Geschichte, diesmal mit Seishiro Nagi im Mittelpunkt."
  }
];

anime.forEach(item => {
  const card = document.createElement("article");
  card.className = "anime-card";

  card.innerHTML = `
    <small>${item.type} / ${item.year}</small>
    <div class="anime-icon">${item.icon}</div>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
  `;

  document.getElementById("animeGrid").appendChild(card);
});

// ============================================
// FOOTBALL POSITIONS
// ============================================

const footballPositions = {
  st: {
    icon: "🎯",
    name: "STÜRMER",
    text: "Der Stürmer spielt nahe am gegnerischen Tor. Seine wichtigsten Aufgaben sind Tore erzielen, Chancen schaffen und gegnerische Verteidiger unter Druck setzen. Beispiel: Isagi."
  },
  wing: {
    icon: "⚡",
    name: "FLÜGELSPIELER",
    text: "Flügelspieler spielen auf der linken oder rechten Seite. Sie nutzen ihre Geschwindigkeit, ziehen nach innen oder spielen Flanken in den Strafraum."
  },
  cam: {
    icon: "🧠",
    name: "OFFENSIVES MITTELFELD",
    text: "Offensive Mittelfeldspieler verbinden das Mittelfeld mit dem Angriff. Sie schaffen Torchancen und spielen entscheidende Pässe."
  },
  cm: {
    icon: "🔄",
    name: "ZENTRALES MITTELFELD",
    text: "Zentrale Mittelfeldspieler organisieren das Spiel, verteilen den Ball und unterstützen sowohl die Offensive als auch die Defensive."
  },
  def: {
    icon: "🛡️",
    name: "VERTEIDIGER",
    text: "Verteidiger schützen das eigene Tor. Innenverteidiger sichern das Zentrum, Aussenverteidiger decken die Seiten und unterstützen oft den Angriff."
  },
  gk: {
    icon: "🧤",
    name: "TORWART",
    text: "Der Torwart verhindert Gegentore. Innerhalb des eigenen Strafraums darf er den Ball unter bestimmten Bedingungen mit den Händen spielen."
  }
};

document.querySelectorAll(".field-player").forEach(button => {
  button.addEventListener("click", () => {
    const position = footballPositions[button.dataset.role];

    document.getElementById("positionInfo").innerHTML = `
      <div class="info-icon">${position.icon}</div>
      <span class="blue-label">PLAYER POSITION</span>
      <h3>${position.name}</h3>
      <p>${position.text}</p>
    `;

    document.querySelectorAll(".field-player").forEach(b => {
      b.classList.remove("active");
    });

    button.classList.add("active");
  });
});

// ============================================
// FOOTBALL SKILLS
// ============================================

const skills = [
  {
    icon: "⚽",
    name: "DRIBBLING",
    category: "BALL CONTROL",
    text: "Den Ball eng am Fuss führen, Gegner täuschen und freie Räume nutzen. Bachira ist ein gutes Anime-Beispiel."
  },
  {
    icon: "🎯",
    name: "SHOOTING",
    category: "FINISHING",
    text: "Ein präziser und kraftvoller Schuss kann ein Spiel entscheiden. Technik, Timing und Körperhaltung sind wichtig."
  },
  {
    icon: "👀",
    name: "VISION",
    category: "GAME INTELLIGENCE",
    text: "Mit guter Übersicht erkennst du freie Räume, Mitspieler und mögliche Laufwege. Isagi nutzt diese Fähigkeit besonders stark."
  },
  {
    icon: "⚡",
    name: "SPEED",
    category: "PHYSICAL",
    text: "Schnelligkeit hilft bei Sprints, Kontern und Laufduellen. Chigiri ist für seine Geschwindigkeit bekannt."
  },
  {
    icon: "🤝",
    name: "PASSING",
    category: "TEAMPLAY",
    text: "Präzise Pässe und gutes Timing helfen dabei, Torchancen herauszuspielen und das Spiel zu kontrollieren."
  },
  {
    icon: "🛡️",
    name: "DEFENDING",
    category: "DEFENCE",
    text: "Gutes Stellungsspiel, Zweikampfverhalten und Antizipation helfen, gefährliche Angriffe zu stoppen."
  }
];

skills.forEach(skill => {
  const card = document.createElement("article");
  card.className = "skill-card";

  card.innerHTML = `
    <small>${skill.category}</small>
    <div><span>${skill.icon}</span></div>
    <h3>${skill.name}</h3>
    <p>${skill.text}</p>
  `;

  document.getElementById("skillGrid").appendChild(card);
});

// ============================================
// FOOTBALL RULES
// ============================================

const rules = [
  {
    title: "SPIELZEIT",
    text: "Ein reguläres Fussballspiel dauert zweimal 45 Minuten. Dazu kommen gegebenenfalls Nachspielzeit und bei bestimmten K.-o.-Spielen Verlängerung."
  },
  {
    title: "SPIELERZAHL",
    text: "Im klassischen Fussball spielen maximal elf Spieler pro Mannschaft, darunter ein Torwart."
  },
  {
    title: "ABSEITS",
    text: "Abseits ist nicht allein die Position: Ein Spieler wird erst bestraft, wenn er aus einer Abseitsposition aktiv ins Spiel eingreift. Für die Position zählt unter anderem die Lage beim Abspiel eines Mitspielers."
  },
  {
    title: "FOULS",
    text: "Unerlaubte Zweikämpfe wie rücksichtsloses Treten oder Stossen können zu Freistössen, Strafstössen und Karten führen."
  },
  {
    title: "ELFMETER",
    text: "Ein Strafstoss wird aus elf Metern Entfernung ausgeführt, beispielsweise nach einem mit direktem Freistoss zu ahndenden Vergehen innerhalb des eigenen Strafraums."
  },
  {
    title: "TOR",
    text: "Ein Tor zählt, wenn der gesamte Ball die Torlinie zwischen den Pfosten und unter der Latte vollständig überschritten hat und kein Regelverstoss vorliegt."
  }
];

rules.forEach((rule, index) => {
  const card = document.createElement("article");
  card.className = "rule-row";

  card.innerHTML = `
    <strong>0${index + 1}</strong>
    <h3>${rule.title}</h3>
    <p>${rule.text}</p>
  `;

  document.getElementById("rulesList").appendChild(card);
});

// ============================================
// PENALTY CHALLENGE
// ============================================

let shots = 0;
let goals = 0;
let shooting = false;
let shotTimer = null;

const keeper = document.getElementById("goalkeeper");
const shotBall = document.getElementById("shotBall");
const gameMessage = document.getElementById("gameMessage");

const directions = ["left", "center", "right"];

const keeperPositions = {
  left: "15%",
  center: "50%",
  right: "85%"
};

function shoot(direction) {
  if (shooting || shots >= 5) return;

  shooting = true;
  shots++;

  document.getElementById("shots").textContent = `${shots}/5`;

  const keeperDirection =
    directions[Math.floor(Math.random() * directions.length)];

  // Tor, wenn der Torwart die andere Richtung wählt.
  const scored = direction !== keeperDirection;

  document.querySelectorAll(".shot").forEach(button => {
    button.disabled = true;
  });

  keeper.style.left = "50%";
  shotBall.style.transition = "none";
  shotBall.style.left = "50%";
  shotBall.style.bottom = "-45px";

  // Animation zurücksetzen.
  void shotBall.offsetWidth;

  shotBall.style.transition = "left .5s, bottom .5s";
  keeper.style.left = keeperPositions[keeperDirection];
  shotBall.style.left = keeperPositions[direction];
  shotBall.style.bottom = "70px";

  gameMessage.textContent = "⚽ SHOT IN PROGRESS!";

  shotTimer = setTimeout(() => {
    if (scored) {
      goals++;
      gameMessage.textContent = "🔥 GOOOOOAL! AMAZING SHOT!";
      showToast("GOAL! ⚽");
    } else {
      gameMessage.textContent = "🧤 SAVED! THE GOALKEEPER GOT IT!";
    }

    document.getElementById("goals").textContent = goals;
    shooting = false;

    if (shots === 5) {
      gameMessage.textContent =
        `FULL TIME! Du hast ${goals} von 5 Elfmetern verwandelt!`;
    } else {
      document.querySelectorAll(".shot").forEach(button => {
        button.disabled = false;
      });
    }
  }, 650);
}

document.querySelectorAll(".shot").forEach(button => {
  button.addEventListener("click", () => {
    shoot(button.dataset.direction);
  });
});

document.getElementById("gameReset").addEventListener("click", () => {
  clearTimeout(shotTimer);

  shots = 0;
  goals = 0;
  shooting = false;

  document.getElementById("shots").textContent = "0/5";
  document.getElementById("goals").textContent = "0";

  keeper.style.left = "50%";
  shotBall.style.transition = "none";
  shotBall.style.left = "50%";
  shotBall.style.bottom = "-45px";

  gameMessage.textContent = "Wähle eine Schussrichtung!";

  document.querySelectorAll(".shot").forEach(button => {
    button.disabled = false;
  });
});

// ============================================
// EGOIST PERSONALITY TEST
// ============================================

const egoQuestions = [
  {
    question: "Was ist deine grösste Stärke?",
    answers: [
      ["Ich erkenne Chancen, bevor andere sie sehen.", "isagi"],
      ["Ich dribble kreativ und überrasche Gegner.", "bachira"],
      ["Ich bin schnell und explosiv.", "chigiri"],
      ["Ich kontrolliere schwierige Bälle mühelos.", "nagi"]
    ]
  },
  {
    question: "Du stehst vor einem wichtigen Spiel. Was tust du?",
    answers: [
      ["Ich analysiere meinen Gegner.", "isagi"],
      ["Ich denke mir verrückte Tricks aus.", "bachira"],
      ["Ich trainiere meine Sprints.", "chigiri"],
      ["Ich vertraue auf mein Talent.", "nagi"]
    ]
  },
  {
    question: "Welche Spielweise macht dir am meisten Spass?",
    answers: [
      ["Taktisch und clever.", "isagi"],
      ["Kreativ und unberechenbar.", "bachira"],
      ["Schnell und direkt.", "chigiri"],
      ["Technisch und entspannt.", "nagi"]
    ]
  },
  {
    question: "Wie erzielst du dein Traumtor?",
    answers: [
      ["Durch perfekte Positionierung.", "isagi"],
      ["Mit einem genialen Dribbling.", "bachira"],
      ["Nach einem unglaublichen Sprint.", "chigiri"],
      ["Durch eine spektakuläre Ballannahme.", "nagi"]
    ]
  }
];

const egoProfiles = {
  isagi: {
    name: "YOICHI ISAGI 🧩",
    text: "Du bist ein Stratege! Du erkennst Chancen, analysierst Situationen und entwickelst deinen eigenen Spielstil."
  },
  bachira: {
    name: "MEGURU BACHIRA 🐝",
    text: "Du bist kreativ und spontan! Dein Fussball lebt von Fantasie, Tricks und überraschenden Ideen."
  },
  chigiri: {
    name: "HYOMA CHIGIRI ⚡",
    text: "Du bist schnell und ehrgeizig! Du nutzt deine Energie, um Hindernisse zu überwinden."
  },
  nagi: {
    name: "SEISHIRO NAGI ❄️",
    text: "Du hast ein Gefühl für Technik! Du bleibst ruhig und findest auch in schwierigen Situationen eine elegante Lösung."
  }
};

let egoIndex = 0;
let egoScores = {};

function resetEgoScores() {
  egoScores = { isagi: 0, bachira: 0, chigiri: 0, nagi: 0 };
}

function showEgoQuestion() {
  const q = egoQuestions[egoIndex];

  document.getElementById("egoCount").textContent =
    `QUESTION ${String(egoIndex + 1).padStart(2, "0")} / 04`;

  document.getElementById("egoQuestion").textContent = q.question;

  const answers = document.getElementById("egoAnswers");
  answers.innerHTML = "";

  q.answers.forEach(([text, type]) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.textContent = text;

    button.addEventListener("click", () => {
      egoScores[type]++;
      egoIndex++;

      if (egoIndex < egoQuestions.length) {
        showEgoQuestion();
      } else {
        finishEgoTest();
      }
    });

    answers.appendChild(button);
  });
}

function finishEgoTest() {
  const maxScore = Math.max(...Object.values(egoScores));

  const winners = Object.keys(egoScores).filter(type => {
    return egoScores[type] === maxScore;
  });

  const winner = winners[Math.floor(Math.random() * winners.length)];
  const profile = egoProfiles[winner];

  document.getElementById("egoCount").textContent = "YOUR EGO PROFILE";
  document.getElementById("egoQuestion").textContent = "YOUR STRIKER DNA";
  document.getElementById("egoAnswers").innerHTML = "";

  document.getElementById("egoResult").innerHTML = `
    <h3>${profile.name}</h3>
    <p>${profile.text}</p>
  `;

  document.getElementById("egoRestart").hidden = false;
  showToast("YOUR EGO HAS AWAKENED! ⚽");
}

document.getElementById("egoRestart").addEventListener("click", () => {
  egoIndex = 0;
  resetEgoScores();

  document.getElementById("egoResult").innerHTML = "";
  document.getElementById("egoRestart").hidden = true;

  showEgoQuestion();
});

resetEgoScores();
showEgoQuestion();

// ============================================
// BLUE LOCK QUIZ
// ============================================

const quizQuestions = [
  {
    question: "Wer ist die Hauptfigur von Blue Lock?",
    answers: ["Rin Itoshi", "Yoichi Isagi", "Seishiro Nagi", "Shoei Barou"],
    correct: 1
  },
  {
    question: "Wie viele Stürmer werden ursprünglich für Blue Lock ausgewählt?",
    answers: ["100", "200", "300", "500"],
    correct: 2
  },
  {
    question: "Wer leitet das Blue-Lock-Projekt?",
    answers: ["Jinpachi Ego", "Sae Itoshi", "Noel Noa", "Oliver Aiku"],
    correct: 0
  },
  {
    question: "Welche Stärke besitzt Meguru Bachira?",
    answers: ["Dribbling", "Torwartspiel", "Kopfballabwehr", "Einwürfe"],
    correct: 0
  },
  {
    question: "Was ist Chigiris besondere Stärke?",
    answers: ["Sprungkraft", "Geschwindigkeit", "Torwartreflexe", "Kopfballspiel"],
    correct: 1
  },
  {
    question: "Wie viele Spieler stehen normalerweise pro Team auf dem Fussballfeld?",
    answers: ["9", "10", "11", "12"],
    correct: 2
  },
  {
    question: "Wie lange dauert ein reguläres Fussballspiel ohne Nachspielzeit?",
    answers: ["60 Minuten", "80 Minuten", "90 Minuten", "100 Minuten"],
    correct: 2
  },
  {
    question: "Welche Fähigkeit zeichnet Seishiro Nagi besonders aus?",
    answers: ["Ballkontrolle", "Grätschen", "Torwartspiel", "Einwürfe"],
    correct: 0
  },
  {
    question: "Wie weit ist der Elfmeterpunkt von der Torlinie entfernt?",
    answers: ["9 Meter", "10 Meter", "11 Meter", "12 Meter"],
    correct: 2
  },
  {
    question: "Wie heisst der Blue-Lock-Film von 2024?",
    answers: ["Episode Isagi", "Episode Nagi", "Blue Lock Zero", "Final Match"],
    correct: 1
  }
];

let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let quizFinished = false;

const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizNext = document.getElementById("quizNext");

function showQuizQuestion() {
  quizAnswered = false;
  quizFinished = false;

  const q = quizQuestions[quizIndex];

  document.getElementById("quizCount").textContent =
    `${String(quizIndex + 1).padStart(2, "0")} / ${quizQuestions.length}`;

  document.getElementById("quizProgress").style.width =
    `${quizIndex / quizQuestions.length * 100}%`;

  quizQuestion.textContent = q.question;
  quizOptions.innerHTML = "";

  document.getElementById("quizFeedback").textContent = "";
  quizNext.hidden = true;

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.className = "quiz-answer";
    button.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;

    button.addEventListener("click", () => {
      checkQuizAnswer(index);
    });

    quizOptions.appendChild(button);
  });
}

function checkQuizAnswer(index) {
  if (quizAnswered) return;
  quizAnswered = true;

  const q = quizQuestions[quizIndex];

  quizOptions.querySelectorAll("button").forEach((button, i) => {
    button.disabled = true;

    if (i === q.correct) {
      button.classList.add("correct");
    }

    if (i === index && index !== q.correct) {
      button.classList.add("wrong");
    }
  });

  if (index === q.correct) {
    quizScore++;
    document.getElementById("quizFeedback").textContent =
      "🔥 CORRECT! GREAT STRIKER INSTINCT!";
  } else {
    document.getElementById("quizFeedback").textContent =
      `Richtig ist: ${q.answers[q.correct]}`;
  }

  quizNext.textContent =
    quizIndex === quizQuestions.length - 1
      ? "SHOW RESULTS →"
      : "NEXT QUESTION →";

  quizNext.hidden = false;
}

function finishQuiz() {
  quizFinished = true;

  document.getElementById("quizCount").textContent = "QUIZ COMPLETE";
  document.getElementById("quizProgress").style.width = "100%";

  quizQuestion.textContent =
    `${quizScore} / ${quizQuestions.length} POINTS`;

  quizOptions.innerHTML = "";

  let message = "KEEP TRAINING! 💪";

  if (quizScore >= 5) message = "GOOD JOB! YOU'RE IMPROVING! ⚽";
  if (quizScore >= 8) message = "AMAZING! TRUE BLUE LOCK FAN! 🔥";
  if (quizScore === 10) message = "PERFECT! THE ULTIMATE EGOIST! 🏆";

  document.getElementById("quizFeedback").textContent = message;

  quizNext.textContent = "PLAY AGAIN ↻";
  quizNext.hidden = false;
}

quizNext.addEventListener("click", () => {
  if (quizFinished) {
    quizIndex = 0;
    quizScore = 0;
    showQuizQuestion();
    return;
  }

  if (quizIndex === quizQuestions.length - 1) {
    finishQuiz();
  } else {
    quizIndex++;
    showQuizQuestion();
  }
});

showQuizQuestion();

// ============================================
// TOAST NOTIFICATIONS
// ============================================

let toastTimeout;

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.style.display = "block";

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.style.display = "none";
  }, 2200);
}

// ============================================
// SCROLL ANIMATION
// ============================================

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".section-heading, .story-layout, .game-panel").forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";

    observer.observe(element);
  });
}
