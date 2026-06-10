/**
 * Navbar Component
 * Renders the navigation bar and handles active state + mobile toggle
 */

const NAV_ITEMS = [
  { route: 'intro',    label: 'Giới thiệu',  icon: '👤' },
  { route: 'projects', label: 'Dự án',        icon: '📂' },
  { route: 'summary',  label: 'Tổng kết',     icon: '📊' }
];

export function renderNavbar() {
  const navbar = document.getElementById('navbar');
  
  navbar.innerHTML = `
    <div class="navbar__inner">
      <a href="#/intro" class="navbar__logo" id="nav-logo">
        <span class="navbar__logo-mark">G</span>
        <span class="navbar__logo-text">Gia<span class="navbar__logo-accent">.Portfolio</span></span>
      </a>
      <div class="navbar__links" id="nav-links">
        <a href="#/intro" class="navbar__link" data-route="intro" id="nav-intro">Giới thiệu</a>
        
        <div class="navbar__dropdown" id="nav-projects-dropdown">
          <a href="#/projects" class="navbar__link navbar__link--dropdown" data-route="projects" id="nav-projects">
            Dự án <span class="navbar__caret">▼</span>
          </a>
          <div class="navbar__dropdown-content">
            <a href="#/projects/1" class="navbar__dropdown-link">Bài tập 1</a>
            <a href="#/projects/2" class="navbar__dropdown-link">Bài tập 2</a>
            <a href="#/projects/3" class="navbar__dropdown-link">Bài tập 3</a>
            <a href="#/projects/4" class="navbar__dropdown-link">Bài tập 4</a>
            <a href="#/projects/5" class="navbar__dropdown-link">Bài tập 5</a>
            <a href="#/projects/6" class="navbar__dropdown-link">Bài tập 6</a>
          </div>
        </div>
        
        <a href="#/summary" class="navbar__link" data-route="summary" id="nav-summary">Tổng kết</a>
      </div>
      <button class="navbar__toggle" id="nav-toggle" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  `;

  // Mobile toggle
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  const dropdown = document.getElementById('nav-projects-dropdown');
  const dropdownContent = dropdown.querySelector('.navbar__dropdown-content');
  const projectsLink = document.getElementById('nav-projects');
  
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
  });

  // Close mobile menu on normal link clicks
  links.querySelectorAll('.navbar__link:not(.navbar__link--dropdown)').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('open');
    });
  });

  // Close mobile menu when clicking any dropdown sub-link
  links.querySelectorAll('.navbar__dropdown-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('open');
      dropdownContent.classList.remove('open');
      projectsLink.classList.remove('dropdown-open');
    });
  });

  // Toggle projects dropdown on click/tap (touch devices & mobile)
  projectsLink.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdownContent.classList.toggle('open');
      projectsLink.classList.toggle('dropdown-open');
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdownContent.classList.remove('open');
      projectsLink.classList.remove('dropdown-open');
    }
  });

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 50);
    lastScroll = scrollY;
  });
}

/**
 * Update active state in navbar
 * @param {string} activeRoute - Current route name
 */
export function setActiveNav(activeRoute) {
  // Clear active state from all nav links and dropdown links
  document.querySelectorAll('.navbar__link').forEach(link => {
    link.classList.remove('active');
  });
  document.querySelectorAll('.navbar__dropdown-link').forEach(link => {
    link.classList.remove('active');
  });

  // Add active state to main link
  const mainLink = document.getElementById(`nav-${activeRoute}`);
  if (mainLink) {
    mainLink.classList.add('active');
  }

  // Highlight specific dropdown item if viewing a project detail page
  if (activeRoute === 'projects') {
    const hash = window.location.hash;
    const match = hash.match(/#\/projects\/(\d+)/);
    if (match) {
      const projectId = match[1];
      document.querySelectorAll('.navbar__dropdown-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.endsWith(`/projects/${projectId}`)) {
          link.classList.add('active');
        }
      });
    }
  }
}
