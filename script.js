let currentLang = localStorage.getItem('lang') || 'uz';

function togglePhase(id) {
  const el = document.getElementById(id);
  el.classList.toggle('open');
}

function toggleLesson(el) {
  el.classList.toggle('done');
  updateProgress();
}

function updateProgress() {
  const all = document.querySelectorAll('.lesson').length;
  const done = document.querySelectorAll('.lesson.done').length;
  const pct = Math.round((done / all) * 100);
  document.getElementById('mainProgress').style.width = pct + '%';
  
  const t = translations[currentLang];
  document.getElementById('progressText').textContent = done + ' ' + t.progressText;
  document.getElementById('progressPct').textContent = pct + t.progressPercent;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  
  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
  
  // Update all text content
  updatePageContent();
  updateProgress();
}


function updatePageContent() {
  const t = translations[currentLang];
  
  // Header
  const h1 = document.querySelector('h1');
  h1.innerHTML = 'Excel<br>' + t.title.split('Excel')[1];
  document.querySelector('.hero p').textContent = t.subtitle;
  
  // Stats
  const stats = document.querySelectorAll('.stat-label');
  stats[0].textContent = t.stat1;
  stats[1].textContent = t.stat2;
  stats[2].textContent = t.stat3;
  stats[3].textContent = t.stat4;
  
  // Progress section
  document.querySelector('.section-label').textContent = t.progress;
  updateProgress();
  
  // Phase 1
  document.querySelector('#phase1 .phase-title').textContent = t.phase1Title;
  document.querySelector('#phase1 .phase-sub').textContent = t.phase1Sub;
  document.querySelector('#phase1 .phase-duration').textContent = t.phase1Duration;
  
  // Lessons Phase 1
  const phase1Lessons = document.querySelectorAll('#phase1 .lesson');
  if (phase1Lessons[0]) {
    phase1Lessons[0].querySelector('.lesson-name').textContent = t.lesson1;
    phase1Lessons[0].querySelector('.lesson-desc').textContent = t.lesson1Desc;
    const tags1 = phase1Lessons[0].querySelectorAll('.tag');
    tags1[0].textContent = t.lesson1Tag1;
    tags1[1].textContent = t.lesson1Tag2;
  }
  if (phase1Lessons[1]) {
    phase1Lessons[1].querySelector('.lesson-name').textContent = t.lesson2;
    phase1Lessons[1].querySelector('.lesson-desc').textContent = t.lesson2Desc;
    const tags2 = phase1Lessons[1].querySelectorAll('.tag');
    tags2[0].textContent = t.lesson2Tag1;
    tags2[1].textContent = t.lesson2Tag2;
  }
  if (phase1Lessons[2]) {
    phase1Lessons[2].querySelector('.lesson-name').textContent = t.lesson3;
    phase1Lessons[2].querySelector('.lesson-desc').textContent = t.lesson3Desc;
    const tags3 = phase1Lessons[2].querySelectorAll('.tag');
    tags3[0].textContent = t.lesson3Tag1;
    tags3[1].textContent = t.lesson3Tag2;
  }
  if (phase1Lessons[3]) {
    phase1Lessons[3].querySelector('.lesson-name').textContent = t.lesson4;
    phase1Lessons[3].querySelector('.lesson-desc').textContent = t.lesson4Desc;
    const tags4 = phase1Lessons[3].querySelectorAll('.tag');
    tags4[0].textContent = t.lesson4Tag1;
    tags4[1].textContent = t.lesson4Tag2;
  }
  if (phase1Lessons[4]) {
    phase1Lessons[4].querySelector('.lesson-name').textContent = t.lesson5;
    phase1Lessons[4].querySelector('.lesson-desc').textContent = t.lesson5Desc;
    const tags5 = phase1Lessons[4].querySelectorAll('.tag');
    tags5[0].textContent = t.lesson5Tag1;
    tags5[1].textContent = t.lesson5Tag2;
  }
  
  // Tip box
  const tipBox = document.querySelector('#phase1 .tip-box');
  if (tipBox) {
    tipBox.textContent = t.tip1;
  }
  
  // Other phases
  document.querySelector('#phase2 .phase-title').textContent = t.phase2Title;
  document.querySelector('#phase2 .phase-sub').textContent = t.phase2Sub;
  document.querySelector('#phase2 .phase-duration').textContent = t.phase2Duration;
  
  document.querySelector('#phase3 .phase-title').textContent = t.phase3Title;
  document.querySelector('#phase3 .phase-sub').textContent = t.phase3Sub;
  document.querySelector('#phase3 .phase-duration').textContent = t.phase3Duration;
  
  document.querySelector('#phase4 .phase-title').textContent = t.phase4Title;
  document.querySelector('#phase4 .phase-sub').textContent = t.phase4Sub;
  document.querySelector('#phase4 .phase-duration').textContent = t.phase4Duration;
  
  document.querySelector('#phase5 .phase-title').textContent = t.phase5Title;
  document.querySelector('#phase5 .phase-sub').textContent = t.phase5Sub;
  document.querySelector('#phase5 .phase-duration').textContent = t.phase5Duration;
  
  // Footer
  const footerNote = document.querySelector('.footer-note p:first-child');
  if (footerNote) {
    footerNote.innerHTML = `${t.footerText} <span>28+</span> ${t.footerEnd}`;
  }
}

// Initialize theme and language on page load
window.addEventListener('DOMContentLoaded', () => {
  // Set initial theme
  if (currentTheme === 'light') {
    document.body.classList.add('light');
    document.querySelector('.theme-toggle').textContent = '🌙';
  } else {
    document.querySelector('.theme-toggle').textContent = '☀️';
  }
  
  // Set initial language button active state
  document.querySelector(`[data-lang="${currentLang}"]`).classList.add('active');
  
  // Initialize content
  updatePageContent();
  
  // Animate progress bar on load
  setTimeout(() => updateProgress(), 300);
});

