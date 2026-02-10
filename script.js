// Quote Master Pro - Main JavaScript File
// Complete quote database for all 15+ categories

const quoteDatabase = {
  motivation: [
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
      profession: "Former First Lady & Activist",
      rating: 5,
      tags: ["dreams", "future", "belief"],
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
      profession: "Humorist & Writer",
      rating: 4,
      tags: ["perseverance", "time", "action"],
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
      profession: "26th U.S. President",
      rating: 5,
      tags: ["belief", "confidence", "progress"],
    },
    {
      text: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs",
      profession: "Co-founder of Apple",
      rating: 5,
      tags: ["authenticity", "time", "purpose"],
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      profession: "Co-founder of Apple",
      rating: 5,
      tags: ["passion", "work", "excellence"],
    },
  ],
  discipline: [
    {
      text: "Discipline is choosing between what you want now and what you want most.",
      author: "Abraham Lincoln",
      profession: "16th U.S. President",
      rating: 5,
      tags: ["choices", "priorities", "self-control"],
    },
    {
      text: "We must all suffer one of two things: the pain of discipline or the pain of regret.",
      author: "Jim Rohn",
      profession: "Entrepreneur & Author",
      rating: 5,
      tags: ["sacrifice", "regret", "hard work"],
    },
    {
      text: "With self-discipline most anything is possible.",
      author: "Theodore Roosevelt",
      profession: "26th U.S. President",
      rating: 4,
      tags: ["possibility", "self-control", "achievement"],
    },
    {
      text: "Discipline is the bridge between goals and accomplishment.",
      author: "Jim Rohn",
      profession: "Entrepreneur & Author",
      rating: 5,
      tags: ["goals", "achievement", "progress"],
    },
    {
      text: "The first and greatest victory is to conquer yourself.",
      author: "Plato",
      profession: "Ancient Greek Philosopher",
      rating: 4,
      tags: ["self-mastery", "victory", "control"],
    },
  ],
  "hard-work": [
    {
      text: "I'm a great believer in luck, and I find the harder I work, the more I have of it.",
      author: "Thomas Jefferson",
      profession: "3rd U.S. President",
      rating: 5,
      tags: ["luck", "effort", "persistence"],
    },
    {
      text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
      author: "Colin Powell",
      profession: "Former U.S. Secretary of State",
      rating: 5,
      tags: ["success", "preparation", "learning"],
    },
    {
      text: "Hard work beats talent when talent doesn't work hard.",
      author: "Tim Notke",
      profession: "Basketball Coach",
      rating: 5,
      tags: ["talent", "effort", "dedication"],
    },
    {
      text: "The only place where success comes before work is in the dictionary.",
      author: "Vidal Sassoon",
      profession: "Hairstylist & Businessman",
      rating: 4,
      tags: ["success", "dictionary", "reality"],
    },
    {
      text: "Nothing ever comes to one that is worth having, except as a result of hard work.",
      author: "Booker T. Washington",
      profession: "Educator & Author",
      rating: 5,
      tags: ["value", "effort", "achievement"],
    },
  ],
  persistence: [
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
      profession: "Chinese Philosopher",
      rating: 5,
      tags: ["progress", "continuity", "determination"],
    },
    {
      text: "Energy and persistence conquer all things.",
      author: "Benjamin Franklin",
      profession: "Founding Father of the U.S.",
      rating: 4,
      tags: ["energy", "conquest", "determination"],
    },
    {
      text: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
      author: "Vince Lombardi",
      profession: "Football Coach",
      rating: 5,
      tags: ["willpower", "success", "determination"],
    },
    {
      text: "Persistence is very important. You should not give up unless you are forced to give up.",
      author: "Elon Musk",
      profession: "Entrepreneur & CEO",
      rating: 4,
      tags: ["determination", "resilience", "commitment"],
    },
    {
      text: "Great works are performed not by strength but by perseverance.",
      author: "Samuel Johnson",
      profession: "Writer & Lexicographer",
      rating: 5,
      tags: ["works", "strength", "perseverance"],
    },
  ],
  consistency: [
    {
      text: "Small, daily, seemingly insignificant improvements, when done consistently over time, yield staggering results.",
      author: "Rob Dial",
      profession: "Podcast Host & Entrepreneur",
      rating: 5,
      tags: ["improvement", "time", "results"],
    },
    {
      text: "Consistency is what transforms average into excellence.",
      author: "Anonymous",
      profession: "Unknown",
      rating: 4,
      tags: ["excellence", "transformation", "quality"],
    },
    {
      text: "The secret of your future is hidden in your daily routine.",
      author: "Mike Murdock",
      profession: "Author & Speaker",
      rating: 5,
      tags: ["routine", "future", "habits"],
    },
    {
      text: "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
      author: "Dwayne Johnson",
      profession: "Actor & Former Wrestler",
      rating: 5,
      tags: ["success", "hard work", "greatness"],
    },
    {
      text: "Consistency is the foundation of virtue.",
      author: "Francis Bacon",
      profession: "Philosopher & Statesman",
      rating: 4,
      tags: ["virtue", "foundation", "character"],
    },
  ],
  resilience: [
    {
      text: "Rock bottom became the solid foundation on which I rebuilt my life.",
      author: "J.K. Rowling",
      profession: "Author",
      rating: 5,
      tags: ["foundation", "rebuilding", "strength"],
    },
    {
      text: "The human capacity for burden is like bamboo – far more flexible than you'd ever believe.",
      author: "Jodi Picoult",
      profession: "Author",
      rating: 4,
      tags: ["flexibility", "strength", "capacity"],
    },
    {
      text: "It's not whether you get knocked down, it's whether you get up.",
      author: "Vince Lombardi",
      profession: "Football Coach",
      rating: 5,
      tags: ["recovery", "determination", "strength"],
    },
    {
      text: "The oak fought the wind and was broken, the willow bent when it must and survived.",
      author: "Robert Jordan",
      profession: "Author",
      rating: 5,
      tags: ["adaptation", "survival", "wisdom"],
    },
    {
      text: "Resilience is accepting your new reality, even if it's less good than the one you had before.",
      author: "Elizabeth Edwards",
      profession: "Attorney & Author",
      rating: 4,
      tags: ["acceptance", "reality", "adaptation"],
    },
  ],
  leadership: [
    {
      text: "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.",
      author: "Ronald Reagan",
      profession: "40th U.S. President",
      rating: 5,
      tags: ["influence", "teamwork", "achievement"],
    },
    {
      text: "Leadership is the capacity to translate vision into reality.",
      author: "Warren Bennis",
      profession: "Scholar & Author",
      rating: 4,
      tags: ["vision", "execution", "transformation"],
    },
    {
      text: "A leader is one who knows the way, goes the way, and shows the way.",
      author: "John C. Maxwell",
      profession: "Author & Speaker",
      rating: 5,
      tags: ["guidance", "example", "direction"],
    },
    {
      text: "The function of leadership is to produce more leaders, not more followers.",
      author: "Ralph Nader",
      profession: "Activist & Author",
      rating: 4,
      tags: ["empowerment", "development", "multiplication"],
    },
    {
      text: "Leadership is not about being in charge. It's about taking care of those in your charge.",
      author: "Simon Sinek",
      profession: "Author & Motivational Speaker",
      rating: 5,
      tags: ["care", "responsibility", "service"],
    },
  ],
  creativity: [
    {
      text: "Creativity is intelligence having fun.",
      author: "Albert Einstein",
      profession: "Physicist",
      rating: 5,
      tags: ["intelligence", "fun", "innovation"],
    },
    {
      text: "The chief enemy of creativity is 'good' sense.",
      author: "Pablo Picasso",
      profession: "Artist",
      rating: 4,
      tags: ["convention", "rules", "innovation"],
    },
    {
      text: "You can't use up creativity. The more you use, the more you have.",
      author: "Maya Angelou",
      profession: "Author & Poet",
      rating: 5,
      tags: ["abundance", "generosity", "expression"],
    },
    {
      text: "Creativity takes courage.",
      author: "Henri Matisse",
      profession: "Artist",
      rating: 4,
      tags: ["courage", "risk", "expression"],
    },
    {
      text: "To be creative means to be in love with life.",
      author: "Osho",
      profession: "Spiritual Teacher",
      rating: 4,
      tags: ["love", "life", "passion"],
    },
  ],
  success: [
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
      profession: "Former British Prime Minister",
      rating: 5,
      tags: ["courage", "continuity", "perspective"],
    },
    {
      text: "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau",
      profession: "Author & Philosopher",
      rating: 4,
      tags: ["focus", "activity", "achievement"],
    },
    {
      text: "The road to success and the road to failure are almost exactly the same.",
      author: "Colin R. Davis",
      profession: "Author",
      rating: 3,
      tags: ["journey", "similarity", "perspective"],
    },
    {
      text: "Success is walking from failure to failure with no loss of enthusiasm.",
      author: "Winston Churchill",
      profession: "Former British Prime Minister",
      rating: 5,
      tags: ["enthusiasm", "failure", "persistence"],
    },
    {
      text: "The secret of success is to do the common thing uncommonly well.",
      author: "John D. Rockefeller",
      profession: "Industrialist & Philanthropist",
      rating: 4,
      tags: ["excellence", "common", "uncommon"],
    },
  ],
  mindfulness: [
    {
      text: "The present moment is the only time over which we have dominion.",
      author: "Thich Nhat Hanh",
      profession: "Zen Master & Peace Activist",
      rating: 5,
      tags: ["present", "control", "moment"],
    },
    {
      text: "Mindfulness isn't difficult, we just need to remember to do it.",
      author: "Sharon Salzberg",
      profession: "Meditation Teacher",
      rating: 4,
      tags: ["simplicity", "remembering", "practice"],
    },
    {
      text: "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.",
      author: "Thich Nhat Hanh",
      profession: "Zen Master & Peace Activist",
      rating: 5,
      tags: ["feelings", "breathing", "anchor"],
    },
    {
      text: "The best way to capture moments is to pay attention. This is how we cultivate mindfulness.",
      author: "Jon Kabat-Zinn",
      profession: "Professor of Medicine",
      rating: 4,
      tags: ["attention", "moments", "cultivation"],
    },
    {
      text: "In today's rush, we all think too much—seek too much—want too much—and forget about the joy of just being.",
      author: "Eckhart Tolle",
      profession: "Spiritual Teacher & Author",
      rating: 5,
      tags: ["being", "joy", "simplicity"],
    },
  ],
  courage: [
    {
      text: "Courage is not the absence of fear, but rather the assessment that something else is more important than fear.",
      author: "Franklin D. Roosevelt",
      profession: "32nd U.S. President",
      rating: 5,
      tags: ["fear", "priorities", "assessment"],
    },
    {
      text: "Life shrinks or expands in proportion to one's courage.",
      author: "Anaïs Nin",
      profession: "Diarist & Essayist",
      rating: 5,
      tags: ["life", "expansion", "proportion"],
    },
    {
      text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
      author: "Lao Tzu",
      profession: "Ancient Chinese Philosopher",
      rating: 5,
      tags: ["love", "strength", "relationships"],
    },
    {
      text: "Courage is the first of human qualities because it is the quality which guarantees the others.",
      author: "Aristotle",
      profession: "Ancient Greek Philosopher",
      rating: 4,
      tags: ["qualities", "guarantee", "foundation"],
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
      profession: "Former British Prime Minister",
      rating: 5,
      tags: ["persistence", "continuity", "determination"],
    },
  ],
  focus: [
    {
      text: "The successful warrior is the average man, with laser-like focus.",
      author: "Bruce Lee",
      profession: "Martial Artist & Actor",
      rating: 5,
      tags: ["warrior", "average", "concentration"],
    },
    {
      text: "Focus is a matter of deciding what things you're not going to do.",
      author: "John Carmack",
      profession: "Programmer & Game Developer",
      rating: 4,
      tags: ["decisions", "priorities", "elimination"],
    },
    {
      text: "Concentrate all your thoughts upon the work at hand. The sun's rays do not burn until brought to a focus.",
      author: "Alexander Graham Bell",
      profession: "Inventor & Scientist",
      rating: 5,
      tags: ["concentration", "work", "energy"],
    },
    {
      text: "What you stay focused on will grow.",
      author: "Roy T. Bennett",
      profession: "Author",
      rating: 4,
      tags: ["growth", "attention", "expansion"],
    },
    {
      text: "The ability to focus is a competitive advantage in today's distracting world.",
      author: "Daniel Goleman",
      profession: "Psychologist & Author",
      rating: 5,
      tags: ["advantage", "distraction", "competition"],
    },
  ],
  gratitude: [
    {
      text: "Gratitude turns what we have into enough.",
      author: "Anonymous",
      profession: "Unknown",
      rating: 5,
      tags: ["contentment", "enough", "perspective"],
    },
    {
      text: "The root of joy is gratefulness.",
      author: "David Steindl-Rast",
      profession: "Benedictine Monk",
      rating: 4,
      tags: ["joy", "foundation", "appreciation"],
    },
    {
      text: "Gratitude is not only the greatest of virtues, but the parent of all others.",
      author: "Marcus Tullius Cicero",
      profession: "Roman Statesman & Philosopher",
      rating: 5,
      tags: ["virtues", "parent", "foundation"],
    },
    {
      text: "When you arise in the morning, think of what a precious privilege it is to be alive—to breathe, to think, to enjoy, to love.",
      author: "Marcus Aurelius",
      profession: "Roman Emperor & Philosopher",
      rating: 5,
      tags: ["morning", "privilege", "life"],
    },
    {
      text: "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.",
      author: "Melody Beattie",
      profession: "Author",
      rating: 4,
      tags: ["past", "present", "future"],
    },
  ],
  growth: [
    {
      text: "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson",
      profession: "Essayist & Poet",
      rating: 5,
      tags: ["destiny", "decision", "self-determination"],
    },
    {
      text: "Growth and comfort do not coexist.",
      author: "Ginni Rometty",
      profession: "Former IBM CEO",
      rating: 5,
      tags: ["comfort", "challenge", "development"],
    },
    {
      text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson",
      profession: "Essayist & Poet",
      rating: 5,
      tags: ["potential", "internal", "strength"],
    },
    {
      text: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu",
      profession: "Ancient Chinese Philosopher",
      rating: 5,
      tags: ["journey", "beginning", "progress"],
    },
    {
      text: "You are never too old to set another goal or to dream a new dream.",
      author: "C.S. Lewis",
      profession: "Author & Theologian",
      rating: 5,
      tags: ["age", "goals", "dreams"],
    },
  ],
  balance: [
    {
      text: "Happiness is not a matter of intensity but of balance, order, rhythm and harmony.",
      author: "Thomas Merton",
      profession: "Writer & Theologian",
      rating: 5,
      tags: ["happiness", "rhythm", "harmony"],
    },
    {
      text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      author: "Albert Einstein",
      profession: "Physicist",
      rating: 5,
      tags: ["movement", "progress", "equilibrium"],
    },
    {
      text: "The key to keeping your balance is knowing when you've lost it.",
      author: "Anonymous",
      profession: "Unknown",
      rating: 4,
      tags: ["awareness", "loss", "recovery"],
    },
    {
      text: "Balance is not something you find, it's something you create.",
      author: "Jana Kingsford",
      profession: "Author",
      rating: 4,
      tags: ["creation", "intention", "design"],
    },
    {
      text: "The best and safest thing is to keep a balance in your life, acknowledge the great powers around us and in us.",
      author: "Euripides",
      profession: "Ancient Greek Playwright",
      rating: 5,
      tags: ["safety", "acknowledgment", "powers"],
    },
  ],
};

// Categories configuration
const categories = [
  {
    id: "motivation",
    name: "Motivation",
    icon: "fas fa-rocket",
    color: "#3b82f6",
    count: 45,
    description: "Fuel your drive and ambition",
  },
  {
    id: "discipline",
    name: "Discipline",
    icon: "fas fa-dumbbell",
    color: "#10b981",
    count: 32,
    description: "Master self-control and consistency",
  },
  {
    id: "hard-work",
    name: "Hard Work",
    icon: "fas fa-hammer",
    color: "#f59e0b",
    count: 28,
    description: "Embrace the power of effort",
  },
  {
    id: "persistence",
    name: "Persistence",
    icon: "fas fa-tasks",
    color: "#8b5cf6",
    count: 36,
    description: "Keep going against all odds",
  },
  {
    id: "consistency",
    name: "Consistency",
    icon: "fas fa-calendar-check",
    color: "#ec4899",
    count: 29,
    description: "Small daily improvements compound",
  },
  {
    id: "resilience",
    name: "Resilience",
    icon: "fas fa-shield-alt",
    color: "#ef4444",
    count: 31,
    description: "Bounce back stronger",
  },
  {
    id: "leadership",
    name: "Leadership",
    icon: "fas fa-flag",
    color: "#06b6d4",
    count: 42,
    description: "Inspire and guide others",
  },
  {
    id: "creativity",
    name: "Creativity",
    icon: "fas fa-palette",
    color: "#8b5cf6",
    count: 38,
    description: "Unlock innovative thinking",
  },
  {
    id: "success",
    name: "Success",
    icon: "fas fa-trophy",
    color: "#f59e0b",
    count: 50,
    description: "Achieve your goals",
  },
  {
    id: "mindfulness",
    name: "Mindfulness",
    icon: "fas fa-brain",
    color: "#10b981",
    count: 27,
    description: "Stay present and aware",
  },
  {
    id: "courage",
    name: "Courage",
    icon: "fas fa-fist-raised",
    color: "#ef4444",
    count: 33,
    description: "Face fears with bravery",
  },
  {
    id: "focus",
    name: "Focus",
    icon: "fas fa-bullseye",
    color: "#3b82f6",
    count: 26,
    description: "Concentrate on what matters",
  },
  {
    id: "gratitude",
    name: "Gratitude",
    icon: "fas fa-hands-heart",
    color: "#ec4899",
    count: 30,
    description: "Appreciate life's blessings",
  },
  {
    id: "growth",
    name: "Growth",
    icon: "fas fa-seedling",
    color: "#10b981",
    count: 41,
    description: "Continuous self-improvement",
  },
  {
    id: "balance",
    name: "Balance",
    icon: "fas fa-balance-scale",
    color: "#8b5cf6",
    count: 24,
    description: "Harmony in all aspects of life",
  },
];

// Application State
const state = {
  currentCategory: "motivation",
  favorites: JSON.parse(localStorage.getItem("quoteMasterFavorites")) || [],
  theme: localStorage.getItem("quoteMasterTheme") || "light",
  displayedQuotes: 5,
  searchResults: [],
  isSearching: false,
};

// DOM Elements Cache
const elements = {
  // Theme
  html: document.documentElement,
  themeToggle: document.getElementById("theme-toggle"),

  // Navigation
  searchBtn: document.getElementById("search-btn"),
  randomBtn: document.getElementById("random-btn"),
  favoritesBtn: document.getElementById("favorites-btn"),
  favoritesCount: document.getElementById("favorites-count"),


  // Quote of the Day
  quoteOfDay: document.querySelector(".quote-of-day"),

  // Categories
  categoriesGrid: document.getElementById("categories-grid"),
  exploreAllBtn: document.getElementById("explore-all-btn"),

  // Quotes
  quotesGrid: document.getElementById("quotes-grid"),
  quotesTitle: document.getElementById("quotes-title"),
  quotesSubtitle: document.getElementById("quotes-subtitle"),
  loadMoreBtn: document.getElementById("load-more-btn"),

  // Search Modal
  searchModal: document.getElementById("search-modal"),
  searchInput: document.getElementById("search-input"),
  searchResults: document.getElementById("search-results"),
  closeSearchBtn: document.querySelector(".search-modal__close"),

  // Keyboard Shortcuts
  keyboardShortcuts: document.getElementById("keyboard-shortcuts"),

  // Footer
  randomQuoteLink: document.getElementById("random-quote-link"),
  favoritesLink: document.getElementById("favorites-link"),
  socialShareBtns: document.querySelectorAll(".social-share-btn"),
};

// Particle System
class ParticleSystem {
  constructor() {
    this.canvas = document.getElementById("particle-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.particleCount = 50;
    this.animationId = null;

    this.init();
  }

  init() {
    this.resizeCanvas();
    window.addEventListener("resize", () => this.resizeCanvas());
    this.createParticles();
    this.animate();
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        color:
          state.theme === "dark"
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(0, 0, 0, 0.05)",
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Boundary check
      if (particle.x > this.canvas.width) particle.x = 0;
      else if (particle.x < 0) particle.x = this.canvas.width;
      if (particle.y > this.canvas.height) particle.y = 0;
      else if (particle.y < 0) particle.y = this.canvas.height;

      // Draw particle
      this.ctx.fillStyle = particle.color;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
    });

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  updateTheme() {
    this.particles.forEach((particle) => {
      particle.color =
        state.theme === "dark"
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(0, 0, 0, 0.05)";
    });
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

// Core Application Functions
class QuoteMasterApp {
  constructor() {
    this.particleSystem = null;
    this.init();
  }

  init() {
    this.setupTheme();
    this.setupParticles();
    this.renderCategories();
    this.renderQuotes(state.currentCategory);
    this.setupEventListeners();
    this.updateFavoritesCount();
    this.setupIntersectionObserver();
    this.checkFirstVisit();
  }

  setupTheme() {
    const savedTheme = localStorage.getItem("quoteMasterTheme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    state.theme = savedTheme || (systemPrefersDark ? "dark" : "light");
    elements.html.setAttribute("data-theme", state.theme);
    elements.themeToggle.setAttribute("aria-pressed", state.theme === "dark");
  }

  setupParticles() {
    this.particleSystem = new ParticleSystem();
  }

  renderCategories() {
    elements.categoriesGrid.innerHTML = "";

    categories.forEach((category) => {
      const categoryCard = document.createElement("div");
      categoryCard.className = "category-card";
      categoryCard.setAttribute("role", "listitem");
      categoryCard.setAttribute("tabindex", "0");
      categoryCard.dataset.category = category.id;

      categoryCard.innerHTML = `
                <div class="category-card__icon" style="background: ${
                  category.color
                };">
                    <i class="${category.icon}" aria-hidden="true"></i>
                </div>
                <h3 class="category-card__title">${category.name}</h3>
                <p class="category-card__count">${
                  quoteDatabase[category.id]?.length || 0
                } quotes</p>
                <div class="category-card__preview">
                    <p>${category.description}</p>
                    <p class="category-card__hint">Click to explore quotes</p>
                </div>
            `;

      elements.categoriesGrid.appendChild(categoryCard);
    });
  }

  renderQuotes(categoryId) {
    state.currentCategory = categoryId;
    state.displayedQuotes = 5;
    state.isSearching = false;

    const category = categories.find((c) => c.id === categoryId);
    if (category) {
      elements.quotesTitle.textContent = `${category.name} Quotes`;
      elements.quotesSubtitle.textContent = category.description;
    }

    this.updateQuotesDisplay();
    this.scrollToQuotesSection();
  }

  updateQuotesDisplay() {
    elements.quotesGrid.innerHTML = "";

    const quotes = state.isSearching
      ? state.searchResults
      : quoteDatabase[state.currentCategory];

    if (!quotes || quotes.length === 0) {
      this.showNoQuotesMessage();
      elements.loadMoreBtn.style.display = "none";
      return;
    }

    const quotesToShow = quotes.slice(0, state.displayedQuotes);

    quotesToShow.forEach((quote, index) => {
      const quoteCard = this.createQuoteCard(quote, index);
      elements.quotesGrid.appendChild(quoteCard);
    });

    // Show/hide load more button
    elements.loadMoreBtn.style.display =
      state.displayedQuotes < quotes.length ? "block" : "none";

    // Animate cards
    setTimeout(() => {
      document.querySelectorAll(".quote-card").forEach((card, i) => {
        setTimeout(() => {
          card.classList.add("animate-in");
        }, i * 100);
      });
    }, 100);
  }

  createQuoteCard(quote, index) {
    const isFavorite = state.favorites.some((fav) => fav.text === quote.text);

    const card = document.createElement("article");
    card.className = "quote-card";
    card.setAttribute("role", "listitem");
    card.style.animationDelay = `${index * 0.1}s`;

    // Create rating stars
    const stars = Array(5)
      .fill()
      .map(
        (_, i) =>
          `<i class="fas fa-star rating-star ${
            i < quote.rating ? "" : "far"
          }" aria-hidden="true"></i>`
      )
      .join("");

    card.innerHTML = `
            <blockquote class="quote-card__text">
                ${quote.text}
            </blockquote>
            <p class="quote-card__author">— ${quote.author}, ${
      quote.profession
    }</p>
            <div class="quote-card__meta">
                <div class="quote-card__rating" aria-label="Rating: ${
                  quote.rating
                } out of 5 stars">
                    ${stars}
                </div>
            </div>
            <div class="quote-card__actions">
                <button class="btn btn--icon copy-btn" 
                        data-quote="${quote.text}" 
                        data-author="${quote.author}"
                        aria-label="Copy quote">
                    <i class="fas fa-copy" aria-hidden="true"></i>
                </button>
                <button class="btn btn--icon share-btn" 
                        data-quote="${quote.text}" 
                        data-author="${quote.author}"
                        aria-label="Share quote">
                    <i class="fas fa-share-alt" aria-hidden="true"></i>
                </button>
                <button class="btn btn--icon favorite-btn ${
                  isFavorite ? "active" : ""
                }" 
                        data-quote='${JSON.stringify(quote)}'
                        aria-label="${
                          isFavorite
                            ? "Remove from favorites"
                            : "Add to favorites"
                        }">
                    <i class="fas fa-heart" aria-hidden="true"></i>
                </button>
            </div>
        `;

    return card;
  }

  showNoQuotesMessage() {
    elements.quotesGrid.innerHTML = `
            <div class="no-quotes-message" style="grid-column: 1 / -1; text-align: center; padding: var(--space-xxl);">
                <i class="fas fa-quote-right" style="font-size: 3rem; color: var(--color-text-tertiary); margin-bottom: var(--space-md);"></i>
                <h3 style="margin-bottom: var(--space-sm);">No quotes found</h3>
                <p style="color: var(--color-text-secondary);">Try selecting a different category or searching for specific quotes.</p>
            </div>
        `;
  }

  scrollToQuotesSection() {
    document.getElementById("quotes-section").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  // Event Handlers
  setupEventListeners() {
    // Theme toggle
    elements.themeToggle.addEventListener("click", () => this.toggleTheme());

    // Category selection
    elements.categoriesGrid.addEventListener("click", (e) => {
      const categoryCard = e.target.closest(".category-card");
      if (categoryCard) {
        const categoryId = categoryCard.dataset.category;
        this.renderQuotes(categoryId);
      }
    });

    // Explore all button
    elements.exploreAllBtn.addEventListener("click", () => {
      document
        .getElementById("categories")
        .scrollIntoView({ behavior: "smooth" });
    });

    // Load more quotes
    elements.loadMoreBtn.addEventListener("click", () => {
      state.displayedQuotes += 5;
      this.updateQuotesDisplay();
    });

    // Search functionality
    elements.searchBtn.addEventListener("click", () => this.openSearch());
    elements.closeSearchBtn.addEventListener("click", () => this.closeSearch());
    elements.searchModal.addEventListener("click", (e) => {
      if (e.target.classList.contains("search-modal__backdrop")) {
        this.closeSearch();
      }
    });
    elements.searchInput.addEventListener("input", (e) =>
      this.performSearch(e.target.value)
    );

    // Random quote
    elements.randomBtn.addEventListener("click", () => this.showRandomQuote());
    elements.randomQuoteLink.addEventListener("click", (e) => {
      e.preventDefault();
      this.showRandomQuote();
    });

    // Favorites
    elements.favoritesBtn.addEventListener("click", () => this.showFavorites());
    elements.favoritesLink.addEventListener("click", (e) => {
      e.preventDefault();
      this.showFavorites();
    });

    // Social sharing
    elements.socialShareBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const platform = e.currentTarget.dataset.platform;
        this.shareOnSocialMedia(platform);
      });
    });

    // Quote actions (delegated)
    document.addEventListener("click", (e) => {
      if (e.target.closest(".copy-btn")) {
        const btn = e.target.closest(".copy-btn");
        this.copyToClipboard(btn.dataset.quote, btn.dataset.author);
      }

      if (e.target.closest(".share-btn")) {
        const btn = e.target.closest(".share-btn");
        this.shareQuote(btn.dataset.quote, btn.dataset.author);
      }

      if (e.target.closest(".favorite-btn")) {
        const btn = e.target.closest(".favorite-btn");
        const quote = JSON.parse(btn.dataset.quote);
        this.toggleFavorite(quote);
      }

      if (e.target.closest(".copy-quote-btn")) {
        const quoteText = document.querySelector(
          ".quote-of-day__text"
        ).textContent;
        const quoteAuthor = document.querySelector(
          ".quote-of-day__author"
        ).textContent;
        this.copyToClipboard(quoteText, quoteAuthor);
      }

      if (e.target.closest(".share-quote-btn")) {
        const quoteText = document.querySelector(
          ".quote-of-day__text"
        ).textContent;
        const quoteAuthor = document.querySelector(
          ".quote-of-day__author"
        ).textContent;
        this.shareQuote(quoteText, quoteAuthor);
      }

      if (e.target.closest(".favorite-quote-btn")) {
        const quoteText = document.querySelector(
          ".quote-of-day__text"
        ).textContent;
        const quoteAuthor = document.querySelector(
          ".quote-of-day__author"
        ).textContent;
        const quote = { text: quoteText, author: quoteAuthor };
        this.toggleFavorite(quote);
      }
    });

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) =>
      this.handleKeyboardShortcuts(e)
    );

    // Prevent form submission on Enter in search
    elements.searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
      }
    });
  }

  // Theme Management
  toggleTheme() {
    const newTheme = state.theme === "light" ? "dark" : "light";
    state.theme = newTheme;

    elements.html.setAttribute("data-theme", newTheme);
    elements.themeToggle.setAttribute("aria-pressed", newTheme === "dark");
    localStorage.setItem("quoteMasterTheme", newTheme);

    if (this.particleSystem) {
      this.particleSystem.updateTheme();
    }
  }

  // Search Functionality
  openSearch() {
    elements.searchModal.classList.add("active");
    elements.searchInput.focus();
    elements.searchBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  closeSearch() {
    elements.searchModal.classList.remove("active");
    elements.searchInput.value = "";
    elements.searchResults.innerHTML = "";
    state.isSearching = false;
    elements.searchBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  performSearch(query) {
    const trimmedQuery = query.trim().toLowerCase();

    if (trimmedQuery.length < 2) {
      elements.searchResults.innerHTML = "";
      return;
    }

    const results = [];

    // Search through all quotes
    Object.entries(quoteDatabase).forEach(([categoryId, quotes]) => {
      quotes.forEach((quote) => {
        const searchText = `${quote.text} ${quote.author} ${quote.profession} ${
          quote.tags?.join(" ") || ""
        }`.toLowerCase();

        if (searchText.includes(trimmedQuery)) {
          results.push({
            ...quote,
            category: categoryId,
            categoryName: categories.find((c) => c.id === categoryId)?.name,
          });
        }
      });
    });

    state.searchResults = results;
    state.isSearching = true;

    this.displaySearchResults(results);
  }

  displaySearchResults(results) {
    if (results.length === 0) {
      elements.searchResults.innerHTML = `
                <div class="search-no-results" style="text-align: center; padding: var(--space-xl); color: var(--color-text-secondary);">
                    <i class="fas fa-search" style="font-size: 2rem; margin-bottom: var(--space-sm); opacity: 0.5;"></i>
                    <p>No quotes found for your search</p>
                </div>
            `;
      return;
    }

    const resultsHtml = results
      .slice(0, 10)
      .map(
        (result) => `
            <div class="search-result-item" 
                 data-category="${result.category}"
                 tabindex="0"
                 role="button">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-xs);">
                    <strong style="color: var(--color-primary); font-size: 0.875rem;">
                        ${result.categoryName}
                    </strong>
                    <span style="font-size: 0.75rem; color: var(--color-text-tertiary);">
                        ${result.rating}/5
                    </span>
                </div>
                <p style="margin-bottom: var(--space-xs); font-size: 0.95rem;">${result.text}</p>
                <p style="font-size: 0.875rem; color: var(--color-text-secondary);">— ${result.author}</p>
            </div>
        `
      )
      .join("");

    elements.searchResults.innerHTML = resultsHtml;

    // Add click handlers to search results
    document.querySelectorAll(".search-result-item").forEach((item) => {
      item.addEventListener("click", () => {
        const category = item.dataset.category;
        this.renderQuotes(category);
        this.closeSearch();
      });

      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const category = item.dataset.category;
          this.renderQuotes(category);
          this.closeSearch();
        }
      });
    });
  }

  // Random Quote
  showRandomQuote() {
    const allQuotes = Object.values(quoteDatabase).flat();
    if (allQuotes.length === 0) return;

    const randomQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
    const randomCategory = Object.keys(quoteDatabase).find((key) =>
      quoteDatabase[key].some((q) => q.text === randomQuote.text)
    );

    this.createRandomQuoteModal(randomQuote, randomCategory);
  }

  createRandomQuoteModal(quote, categoryId) {
    const modal = document.createElement("div");
    modal.className = "random-quote-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-labelledby", "random-quote-title");

    const category = categories.find((c) => c.id === categoryId);

    modal.innerHTML = `
            <div class="random-quote-modal__backdrop"></div>
            <div class="random-quote-modal__content">
                <div class="random-quote-modal__header">
                    <div style="display: flex; align-items: center; gap: var(--space-sm);">
                        <div class="random-quote-modal__category" style="background: ${
                          category?.color || "#3b82f6"
                        }; color: white; padding: 4px 12px; border-radius: var(--radius-sm); font-size: 0.875rem;">
                            ${category?.name || "Random"}
                        </div>
                        <h3 id="random-quote-title" style="margin: 0;">Random Inspiration</h3>
                    </div>
                    <button class="random-quote-modal__close" aria-label="Close">
                        <i class="fas fa-times" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="random-quote-modal__body">
                    <div class="random-quote-modal__quote">
                        <i class="fas fa-quote-left" style="color: var(--color-primary); opacity: 0.3; font-size: 2rem; margin-right: var(--space-sm);"></i>
                        <blockquote style="font-size: 1.5rem; line-height: 1.4; margin: 0; font-style: italic;">
                            ${quote.text}
                        </blockquote>
                        <i class="fas fa-quote-right" style="color: var(--color-primary); opacity: 0.3; font-size: 2rem; margin-left: var(--space-sm); align-self: flex-end;"></i>
                    </div>
                    <p class="random-quote-modal__author" style="text-align: center; color: var(--color-text-secondary); margin-top: var(--space-lg);">
                        — ${quote.author}, ${quote.profession}
                    </p>
                </div>
                <div class="random-quote-modal__footer">
                    <div style="display: flex; gap: var(--space-sm); justify-content: center;">
                        <button class="btn btn--primary copy-random-quote" data-quote="${
                          quote.text
                        }" data-author="${quote.author}">
                            <i class="fas fa-copy" aria-hidden="true"></i> Copy
                        </button>
                        <button class="btn btn--secondary share-random-quote" data-quote="${
                          quote.text
                        }" data-author="${quote.author}">
                            <i class="fas fa-share-alt" aria-hidden="true"></i> Share
                        </button>
                        <button class="btn btn--secondary favorite-random-quote" data-quote='${JSON.stringify(
                          quote
                        )}'>
                            <i class="fas fa-heart" aria-hidden="true"></i> Favorite
                        </button>
                    </div>
                </div>
            </div>
        `;

    document.body.appendChild(modal);

    // Add styles
    const styles = `
            .random-quote-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: var(--z-modal);
                display: flex;
                justify-content: center;
                align-items: center;
                animation: fadeIn 0.3s ease;
            }
            .random-quote-modal__backdrop {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(8px);
            }
            .random-quote-modal__content {
                position: relative;
                background: var(--color-background);
                border-radius: var(--radius-xl);
                width: 90%;
                max-width: 600px;
                max-height: 90vh;
                overflow: auto;
                animation: scaleIn 0.3s ease;
                border: 1px solid var(--color-border);
                box-shadow: var(--shadow-xl);
            }
            .random-quote-modal__header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: var(--space-lg);
                border-bottom: 1px solid var(--color-border);
            }
            .random-quote-modal__body {
                padding: var(--space-xl);
            }
            .random-quote-modal__quote {
                display: flex;
                align-items: flex-start;
            }
            .random-quote-modal__footer {
                padding: var(--space-lg);
                border-top: 1px solid var(--color-border);
            }
            .random-quote-modal__close {
                background: none;
                border: none;
                font-size: 1.25rem;
                color: var(--color-text-secondary);
                cursor: pointer;
                padding: var(--space-xs);
                border-radius: var(--radius-sm);
                transition: all var(--transition-fast);
            }
            .random-quote-modal__close:hover {
                background: var(--color-surface);
                color: var(--color-text-primary);
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes scaleIn {
                from { transform: scale(0.9); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
        `;

    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    modal.appendChild(styleSheet);

    // Event listeners for modal
    const closeModal = () => {
      modal.style.opacity = "0";
      setTimeout(() => modal.remove(), 300);
    };

    modal
      .querySelector(".random-quote-modal__close")
      .addEventListener("click", closeModal);
    modal
      .querySelector(".random-quote-modal__backdrop")
      .addEventListener("click", closeModal);

    // Quote actions in modal
    modal.querySelector(".copy-random-quote").addEventListener("click", () => {
      const btn = modal.querySelector(".copy-random-quote");
      this.copyToClipboard(btn.dataset.quote, btn.dataset.author);
    });

    modal.querySelector(".share-random-quote").addEventListener("click", () => {
      const btn = modal.querySelector(".share-random-quote");
      this.shareQuote(btn.dataset.quote, btn.dataset.author);
    });

    modal
      .querySelector(".favorite-random-quote")
      .addEventListener("click", () => {
        const btn = modal.querySelector(".favorite-random-quote");
        const quote = JSON.parse(btn.dataset.quote);
        this.toggleFavorite(quote);
        btn.innerHTML =
          '<i class="fas fa-heart" aria-hidden="true"></i> Favorited!';
        btn.disabled = true;
      });

    // Keyboard navigation for modal
    modal.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });

    // Focus trap
    const focusableElements = modal.querySelectorAll("button");
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    modal.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            lastFocusable.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            firstFocusable.focus();
            e.preventDefault();
          }
        }
      }
    });

    // Focus first button
    setTimeout(() => firstFocusable.focus(), 100);
  }

  // Favorites Management
  toggleFavorite(quote) {
    const existingIndex = state.favorites.findIndex(
      (fav) => fav.text === quote.text
    );

    if (existingIndex > -1) {
      state.favorites.splice(existingIndex, 1);
    } else {
      state.favorites.push(quote);
    }

    localStorage.setItem(
      "quoteMasterFavorites",
      JSON.stringify(state.favorites)
    );
    this.updateFavoritesCount();

    // Update UI if on favorites view
    if (
      state.isSearching &&
      state.searchResults.some((q) => q.text === quote.text)
    ) {
      this.updateQuotesDisplay();
    }
  }

  updateFavoritesCount() {
    elements.favoritesCount.textContent = state.favorites.length;
    elements.favoritesCount.style.display =
      state.favorites.length > 0 ? "inline" : "none";
  }

  showFavorites() {
    if (state.favorites.length === 0) {
      this.showNotification("You haven't added any favorites yet!", "info");
      return;
    }

    state.isSearching = true;
    state.searchResults = state.favorites;
    state.displayedQuotes = state.favorites.length;

    elements.quotesTitle.textContent = "Your Favorite Quotes";
    elements.quotesSubtitle.textContent = `${state.favorites.length} quotes you've saved`;

    this.updateQuotesDisplay();
    this.scrollToQuotesSection();
  }

  // Share and Copy Functions
  async copyToClipboard(quoteText, author) {
    const textToCopy = `"${quoteText}" — ${author}`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      this.showNotification("Quote copied to clipboard!", "success");
    } catch (err) {
      console.error("Failed to copy:", err);
      this.showNotification("Failed to copy quote", "error");
    }
  }

  async shareQuote(quoteText, author) {
    const shareData = {
      title: "Inspirational Quote",
      text: `"${quoteText}" — ${author}`,
      url: window.location.href,
    };

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await this.copyToClipboard(quoteText, author);
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error("Share failed:", err);
      }
    }
  }

  shareOnSocialMedia(platform) {
    const currentUrl = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(
      "Check out these amazing inspirational quotes on Quote Master Pro!"
    );

    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${currentUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
      whatsapp: `https://wa.me/?text=${text}%20${currentUrl}`,
    };

    if (urls[platform]) {
      window.open(urls[platform], "_blank", "noopener,noreferrer");
    }
  }

  // Keyboard Shortcuts
  handleKeyboardShortcuts(e) {
    // Ignore if typing in input
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      return;
    }

    const key = e.key.toLowerCase();

    switch (key) {
      case "r":
        if (!e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          this.showRandomQuote();
        }
        break;

      case "s":
        if (!e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          this.openSearch();
        }
        break;

      case "/":
        if (!e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          this.openSearch();
        }
        break;

      case "escape":
        this.closeSearch();
        break;

      case "d":
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          this.toggleTheme();
        }
        break;
    }
  }

  // Utility Functions
  showNotification(message, type = "info") {
    // Remove existing notification
    const existingNotification = document.querySelector(".notification");
    if (existingNotification) {
      existingNotification.remove();
    }

    const notification = document.createElement("div");
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    notification.setAttribute("role", "alert");
    notification.setAttribute("aria-live", "polite");

    // Add styles
    notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${
              type === "success"
                ? "#10b981"
                : type === "error"
                ? "#ef4444"
                : "#3b82f6"
            };
            color: white;
            padding: 12px 24px;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-lg);
            z-index: var(--z-tooltip);
            animation: slideIn 0.3s ease, slideOut 0.3s ease 2.7s;
            max-width: 300px;
        `;

    document.body.appendChild(notification);

    // Remove after animation
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 3000);

    // Add animation keyframes
    const style = document.createElement("style");
    style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
    document.head.appendChild(style);
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe quote cards
    document.querySelectorAll(".quote-card").forEach((card) => {
      observer.observe(card);
    });
  }

  checkFirstVisit() {
    if (!localStorage.getItem("quoteMasterFirstVisit")) {
      localStorage.setItem("quoteMasterFirstVisit", "true");

      // Show welcome message after a delay
      setTimeout(() => {
        this.showNotification(
          "Welcome to Quote Master Pro! Press Ctrl+/ for keyboard shortcuts.",
          "info"
        );
      }, 2000);
    }
  }
}

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const app = new QuoteMasterApp();

  // Make app available globally for debugging
  window.quoteMasterApp = app;
});
