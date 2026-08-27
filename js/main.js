// ==========================================================================
// Logica Interactiva - Website Academic Conf. Dr. Ing. Lucian MATEI
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  renderCourses('all');
  renderBooks();
  renderPublications('all', '');
  renderProjects();
  renderTheses();
  initSearchAndFilters();
  initContactForm();
});

// ==========================================================================
// 1. Theme Toggle (Dark / Light Mode)
// ==========================================================================
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('lucianmatei_theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('lucianmatei_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle i');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

// ==========================================================================
// 2. Navigation & Mobile Menu
// ==========================================================================
function initNavigation() {
  const header = document.querySelector('.header');
  const mobileBtn = document.querySelector('.btn-menu-mobile');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    highlightActiveSection();
  });

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileBtn.querySelector('i');
      if (icon) {
        icon.className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const icon = mobileBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }
    });
  });
}

function highlightActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add('active');
    } else {
      navLink?.classList.remove('active');
    }
  });
}

// ==========================================================================
// 3. Render Courses & Discipline Didactice
// ==========================================================================
function renderCourses(filterLevel = 'all') {
  const container = document.getElementById('courses-container');
  if (!container) return;

  const filtered = filterLevel === 'all'
    ? ACADEMIC_DATA.courses
    : ACADEMIC_DATA.courses.filter(c => c.level === filterLevel);

  container.innerHTML = filtered.map(course => `
    <div class="course-card">
      <div>
        <div class="course-header">
          <span class="course-code">${course.code}</span>
          <span class="course-level level-${course.level}">${course.level === 'licenta' ? 'Licență' : 'Masterat'}</span>
        </div>
        <h3 class="course-title">${course.title}</h3>
        <div class="course-meta">
          <span><i class="fas fa-graduation-cap"></i> ${course.degree}</span>
          <span><i class="fas fa-calendar-alt"></i> ${course.year} • <strong>${course.role}</strong></span>
          <span><i class="fas fa-clock"></i> Curs: ${course.hours.curs}h | Lab: ${course.hours.lab}h ${course.hours.proiect ? `| Proiect: ${course.hours.proiect}h` : ''}</span>
        </div>
        <p class="course-desc">${course.description}</p>
        <div class="course-software">
          ${course.software.map(sw => `<span class="software-tag"><i class="fas fa-cube"></i> ${sw}</span>`).join('')}
        </div>
      </div>
      <div class="course-actions">
        <button class="btn-course-materials" onclick="openMaterialsModal('${course.id}')">
          <i class="fab fa-google-drive"></i> Materiale Didactice (Google Drive)
        </button>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// 4. Modal Materiale Didactice (Student Hub - Google Drive Integration)
// ==========================================================================
let currentCourseModal = null;
let currentTabType = 'courses';

function openMaterialsModal(courseId) {
  const course = ACADEMIC_DATA.courses.find(c => c.id === courseId);
  if (!course) return;

  currentCourseModal = course;
  currentTabType = 'courses';

  document.getElementById('modal-course-title').textContent = course.title;
  document.getElementById('modal-course-meta').textContent = `${course.code} • ${course.degree} • ${course.year}`;

  const driveMainBtn = document.getElementById('modal-main-drive-link');
  if (driveMainBtn) {
    driveMainBtn.href = course.driveFolder;
  }

  // Reset active tab button
  document.querySelectorAll('.modal-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-tab') === 'courses');
  });

  renderModalTabContent('courses');

  const overlay = document.getElementById('materials-modal');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMaterialsModal() {
  const overlay = document.getElementById('materials-modal');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
  currentCourseModal = null;
}

function renderModalTabContent(tabKey) {
  if (!currentCourseModal) return;
  const container = document.getElementById('modal-tab-content');
  const items = currentCourseModal.materials[tabKey] || [];

  if (items.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 2rem; color: var(--text-muted);">
        <i class="fas fa-folder-open" style="font-size: 2.5rem; margin-bottom: 0.75rem; display:block;"></i>
        Nu sunt fișiere încărcate pentru această categorie.
      </div>
    `;
    return;
  }

  const icons = {
    PDF: 'fa-file-pdf text-danger',
    ZIP: 'fa-file-archive text-warning',
    XLSX: 'fa-file-excel text-success',
    'DWG/DOCX': 'fa-file-alt text-primary'
  };

  container.innerHTML = `
    <div class="materials-list">
      ${items.map(item => `
        <div class="material-item">
          <div class="material-info">
            <i class="fas ${icons[item.type] || 'fa-file'} material-icon"></i>
            <div>
              <div class="material-title">${item.title}</div>
              <div class="material-meta">Format: <strong>${item.type}</strong> • Mărime: ${item.size}</div>
            </div>
          </div>
          <a href="${item.link}" target="_blank" rel="noopener" class="btn btn-sm btn-drive">
            <i class="fab fa-google-drive"></i> Descarcă de pe Drive
          </a>
        </div>
      `).join('')}
    </div>
  `;
}

// Modal event listeners
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    closeMaterialsModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMaterialsModal();
  }
});

// Modal tab clicking
document.querySelectorAll('.modal-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const tabKey = tab.getAttribute('data-tab');
    renderModalTabContent(tabKey);
  });
});

// ==========================================================================
// 5. Render Books & Treatises
// ==========================================================================
function renderBooks() {
  const container = document.getElementById('books-container');
  if (!container) return;

  container.innerHTML = ACADEMIC_DATA.books.map(b => `
    <div class="book-card">
      <div>
        <span class="book-badge">${b.type}</span>
        <h4 class="book-title">${b.title}</h4>
        <p class="book-authors"><strong>Autori:</strong> ${b.authors}</p>
        <div class="book-meta">
          <span><i class="fas fa-building"></i> ${b.publisher}, ${b.year}</span>
          <span><i class="fas fa-file-alt"></i> ${b.pages} pagini</span>
          ${b.isbn ? `<span><i class="fas fa-barcode"></i> ISBN: ${b.isbn}</span>` : ''}
          ${b.doi ? `<span><i class="fas fa-link"></i> DOI: ${b.doi}</span>` : ''}
        </div>
      </div>
      <div>
        <a href="${b.link}" target="_blank" rel="noopener" class="btn btn-sm btn-secondary" style="width: 100%;">
          <i class="fas fa-external-link-alt"></i> Detalii Publicație
        </a>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// 6. Render Publications with Search & Filter
// ==========================================================================
function renderPublications(category = 'all', searchQuery = '') {
  const container = document.getElementById('publications-container');
  if (!container) return;

  let filtered = ACADEMIC_DATA.publications;

  if (category !== 'all') {
    if (category === 'isi-if') {
      filtered = filtered.filter(p => p.category === 'isi' && p.hasImpactFactor);
    } else if (category === 'isi') {
      filtered = filtered.filter(p => p.category === 'isi');
    } else if (category === 'bdi') {
      filtered = filtered.filter(p => p.category === 'bdi');
    }
  }

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.authors.toLowerCase().includes(q) ||
      p.journal.toLowerCase().includes(q) ||
      (p.doi && p.doi.toLowerCase().includes(q))
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <i class="fas fa-search" style="font-size: 2.5rem; margin-bottom: 0.75rem; display:block;"></i>
        Nicio publicație nu corespunde filtrelor selectate.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div class="pub-card">
      <div class="pub-badges">
        <span class="${p.category === 'isi' ? 'badge-isi' : 'badge-bdi'}">
          ${p.category === 'isi' ? 'ISI Web of Science' : 'BDI / Scopus'}
        </span>
        ${p.hasImpactFactor ? `<span class="badge-if"><i class="fas fa-bolt"></i> Factor Impact: ${p.impactFactor}</span>` : ''}
        <span class="tag"><i class="fas fa-calendar"></i> ${p.year}</span>
      </div>
      <h4 class="pub-title">${p.title}</h4>
      <p class="pub-authors"><strong>Autori:</strong> ${p.authors}</p>
      <p class="pub-venue"><strong>Publicat în:</strong> ${p.journal} (${p.volume})</p>
      <div class="pub-footer">
        <span style="font-size: 0.8rem; color: var(--text-muted);">${p.doi ? `DOI: ${p.doi}` : 'Indexat ISI/BDI'}</span>
        <a href="${p.link}" target="_blank" rel="noopener" class="btn btn-sm btn-secondary">
          <i class="fas fa-external-link-alt"></i> Vezi Articolul
        </a>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// 7. Render Research Projects
// ==========================================================================
function renderProjects() {
  const featuredContainer = document.getElementById('featured-project-container');
  const gridContainer = document.getElementById('projects-grid-container');

  const featured = ACADEMIC_DATA.researchProjects[0]; // Casă plutitoare PCIDIF (9.6M)
  const otherProjects = ACADEMIC_DATA.researchProjects.slice(1);

  if (featuredContainer && featured) {
    featuredContainer.innerHTML = `
      <div class="featured-project">
        <span class="featured-project-badge"><i class="fas fa-award"></i> Proiect Fanion de Cercetare & Inovare (PCIDIF)</span>
        <h3 class="featured-project-title">${featured.title}</h3>
        <div class="featured-project-meta">
          <div class="project-meta-item">
            <span class="project-meta-label">Rol & Funcție</span>
            <span class="project-meta-value">${featured.role}</span>
          </div>
          <div class="project-meta-item">
            <span class="project-meta-label">Valoare Finanțare</span>
            <span class="project-meta-value" style="color: var(--accent-emerald); font-size: 1.1rem;">${featured.budget}</span>
          </div>
          <div class="project-meta-item">
            <span class="project-meta-label">Perioadă</span>
            <span class="project-meta-value">${featured.period}</span>
          </div>
          <div class="project-meta-item">
            <span class="project-meta-label">Parteneriat</span>
            <span class="project-meta-value">${featured.partner}</span>
          </div>
        </div>
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">${featured.description}</p>
      </div>
    `;
  }

  if (gridContainer) {
    gridContainer.innerHTML = otherProjects.map(proj => `
      <div class="project-card">
        <div>
          <div class="project-header">
            <span class="project-badge">${proj.badge}</span>
            <span class="project-role"><i class="fas fa-user-check"></i> ${proj.role}</span>
          </div>
          <h4 class="project-title">${proj.title}</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">
            <strong>Cod:</strong> ${proj.code} | <strong>Finanțare:</strong> ${proj.budget}
          </p>
          <p class="project-desc">${proj.description}</p>
        </div>
        <div style="font-size: 0.8rem; color: var(--text-muted); padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
          <i class="fas fa-handshake"></i> ${proj.partner}
        </div>
      </div>
    `).join('');
  }
}

// ==========================================================================
// 8. Render Thesis Topics & Guidance
// ==========================================================================
function renderTheses() {
  const container = document.getElementById('thesis-container');
  if (!container) return;

  container.innerHTML = ACADEMIC_DATA.thesisProposals.map(item => `
    <div class="thesis-card">
      <h3>
        <i class="fas ${item.type === 'licenta' ? 'fa-user-graduate' : 'fa-brain'}" style="color: var(--primary);"></i>
        ${item.degree}
      </h3>
      <div class="thesis-topics">
        ${item.topics.map(topic => `
          <div class="topic-item">
            <i class="fas fa-chevron-right topic-icon"></i>
            <span>${topic}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// 9. Search & Filter Handlers
// ==========================================================================
function initSearchAndFilters() {
  // Course filters
  const courseFilterBtns = document.querySelectorAll('.course-filter-btn');
  courseFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      courseFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const level = btn.getAttribute('data-filter');
      renderCourses(level);
    });
  });

  // Publication filters
  const pubFilterBtns = document.querySelectorAll('.pub-filter-btn');
  const searchInput = document.getElementById('pub-search');
  let currentCategory = 'all';

  pubFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pubFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderPublications(currentCategory, searchInput ? searchInput.value : '');
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderPublications(currentCategory, e.target.value);
    });
  }
}

// ==========================================================================
// 10. Contact Form Logic
// ==========================================================================
function initContactForm() {
  const form = document.getElementById('student-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const subject = document.getElementById('form-subject').value;
    const message = document.getElementById('form-message').value;

    const mailtoLink = `mailto:${ACADEMIC_DATA.profile.email}?subject=${encodeURIComponent('[Website Studenți] ' + subject + ' - ' + name)}&body=${encodeURIComponent('Nume: ' + name + '\nEmail: ' + email + '\n\nMesaj:\n' + message)}`;

    window.location.href = mailtoLink;

    alert(`Vă mulțumim, ${name}! S-a deschis clientul de email pentru a transmite mesajul către ${ACADEMIC_DATA.profile.email}.`);
    form.reset();
  });
}
