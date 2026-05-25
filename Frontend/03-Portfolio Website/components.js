function loadHeader() {
  const header = `
    <header>
      <div class="logo">
        <img src=""D:\Random BS\Roadmap.sh Projects\Assets\logo.jpg"" alt="Logo">
      </div>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="studies.html">Studies</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
      <button class="theme-toggle" onclick="toggleTheme()">
        <svg id="sun_icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
        <svg id="moon_icon" style="display:none;" xmlns="http://www.w3.org/2000/svg" 
             width="24" height="24" viewBox="0 0 24 24" fill="none" 
             stroke="currentColor" stroke-width="2" stroke-linecap="round" 
             stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      </button>
    </header>`;
  document.body.insertAdjacentHTML('afterbegin', header);
}

function loadFooter() {
  const footer = `
    <footer>
      <p>&copy; 2026 France Jacob B. Escopete. All rights reserved.</p>
    </footer>`;
  document.body.insertAdjacentHTML('beforeend', footer);
}

loadHeader();
loadFooter();

function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('nav ul li a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

setActiveNavLink();