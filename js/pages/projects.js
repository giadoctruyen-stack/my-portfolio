/**
 * Projects Page - Trang Dự án
 * Loads project data from JSON files and renders cards/detail views
 */

import { renderProjectCard, renderProjectDetail } from '../components/projectCard.js';

// Cache for loaded project data
let projectsCache = null;

/**
 * Load all project data from content.json files
 */
async function loadProjects() {
  if (projectsCache) return projectsCache;

  const projects = [];
  
  for (let i = 1; i <= 6; i++) {
    try {
      const response = await fetch(`projects/bai-tap-${i}/content.json?t=${Date.now()}`);
      if (response.ok) {
        const data = await response.json();
        projects.push(data);
      } else {
        // Create placeholder if file doesn't exist
        projects.push(createPlaceholder(i));
      }
    } catch (e) {
      projects.push(createPlaceholder(i));
    }
  }

  projectsCache = projects;
  return projects;
}

function createPlaceholder(id) {
  const placeholders = [
    { id: 1, title: 'Thao tác với tệp tin và thư mục', subtitle: 'Bài tập 1 - Mục 3.4', icon: '📁', description: 'Trình bày cấu trúc thư mục tối ưu và quy tắc đặt tên file, kỹ năng chụp ảnh màn hình.', tags: ['File System', 'Organization'], status: 'todo' },
    { id: 2, title: 'Tìm kiếm & đánh giá thông tin', subtitle: 'Bài tập 2 - Mục 3.4', icon: '🔍', description: 'Tìm kiếm, đánh giá tin cậy của nguồn thông tin, xây dựng bảng đánh giá nguồn tài liệu.', tags: ['Research', 'Evaluation'], status: 'todo' },
    { id: 3, title: 'Viết Prompt hiệu quả với AI', subtitle: 'Bài tập 2 - Mục 3.4', icon: '🤖', description: 'So sánh kết quả giữa Prompt đơn giản và Prompt chi tiết, phân tích chất lượng đầu ra AI.', tags: ['AI', 'Prompt Engineering'], status: 'todo' },
    { id: 4, title: 'Công cụ hợp tác trực tuyến', subtitle: 'Bài tập 3 - Mục 4.1', icon: '👥', description: 'Sử dụng công cụ quản lý dự án nhóm, thiết lập kênh giao tiếp và phối hợp hiệu quả.', tags: ['Collaboration', 'Teamwork'], status: 'todo' },
    { id: 5, title: 'Sáng tạo nội dung số với AI', subtitle: 'Bài tập 2 - Mục 5.4', icon: '🎨', description: 'Tạo sản phẩm nội dung số hoàn chỉnh (hình ảnh, video, bài viết) với sự hỗ trợ của AI.', tags: ['AI', 'Digital Content'], status: 'todo' },
    { id: 6, title: 'Sử dụng AI có trách nhiệm', subtitle: 'Bài tập 4 - Mục 4.1', icon: '⚖️', description: 'Nghiên cứu và trình bày về sử dụng AI có trách nhiệm trong học tập và nghiên cứu.', tags: ['AI Ethics', 'Research'], status: 'todo' }
  ];
  
  return placeholders.find(p => p.id === id) || { id, title: `Bài tập ${id}`, description: 'Chưa có nội dung', status: 'todo', tags: [] };
}

/**
 * Render the projects list page
 */
export async function renderProjectsPage() {
  const projects = await loadProjects();
  
  const cards = projects.map((project, index) => 
    renderProjectCard(project, index)
  ).join('');

  return `
    <section class="section">
      <div class="container">
        <div class="section__header reveal">
          <span class="section__label">Bài tập thành phần</span>
          <h2 class="section__title">Dự án của tôi</h2>
          <p class="section__description">
            Tổng hợp 6 bài tập thực hành trong quá trình học tập, từ kỹ năng cơ bản đến ứng dụng AI nâng cao.
          </p>
          <div class="divider"></div>
        </div>
        <div class="projects-bento-grid stagger-children" id="projects-grid">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

/**
 * Render a specific project's detail view
 */
export async function renderProjectDetailPage(projectId) {
  const projects = await loadProjects();
  const project = projects.find(p => p.id === parseInt(projectId));
  
  if (!project) {
    return `
      <section class="section">
        <div class="container">
          <p>Không tìm thấy bài tập này.</p>
          <a href="#/projects" class="btn btn--outline">← Quay lại</a>
        </div>
      </section>
    `;
  }

  return `
    <section class="section">
      <div class="container">
        ${renderProjectDetail(project)}
      </div>
    </section>
  `;
}

/**
 * Initialize project page interactions
 */
export function initProjectsPage(pageElement) {
  // Add click handlers to project cards
  pageElement.querySelectorAll('.project-card').forEach(card => {
    const handler = () => {
      const id = card.dataset.projectId;
      window.location.hash = `/projects/${id}`;
    };
    card.addEventListener('click', handler);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handler();
      }
    });
  });
}

/**
 * Initialize project detail page interactions
 */
export function initProjectDetailPage(pageElement) {
  const backBtn = pageElement.querySelector('#project-back');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.location.hash = '/projects';
    });
  }

  const tocLinks = pageElement.querySelectorAll('.toc-link');
  const headings = Array.from(pageElement.querySelectorAll('.project-content h2'));

  // Smooth scroll for Table of Contents links
  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      const targetElement = pageElement.querySelector(`#${targetId}`);
      if (targetElement) {
        // Calculate the absolute position relative to the document at the moment of click
        // This is 100% immune to image layout shifts and avoids the parent overflow:hidden scroll bug
        const rect = targetElement.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;
        const headerOffset = 85; // navbar height (70px) + cushion (15px)
        const offsetPosition = absoluteTop - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ScrollSpy: Cache heading positions in memory to avoid layout thrashing on scroll
  let headingTops = [];

  const calculateHeadingPositions = () => {
    headingTops = headings.map(heading => {
      const rect = heading.getBoundingClientRect();
      const absoluteTop = rect.top + window.scrollY;
      return { id: heading.getAttribute('id'), top: absoluteTop };
    });
  };

  // Run initial calculation after DOM is rendered
  requestAnimationFrame(() => {
    calculateHeadingPositions();
    handleScroll();
  });

  // Backup calculation after a short delay to ensure any layout calculations/transitions have finished
  setTimeout(() => {
    calculateHeadingPositions();
    handleScroll();
  }, 400);

  // Recalculate when window is resized (layout shifts)
  window.addEventListener('resize', calculateHeadingPositions);

  // Recalculate as images load asynchronously (prevents offset bugs)
  pageElement.querySelectorAll('.project-content img').forEach(img => {
    if (img.complete) {
      calculateHeadingPositions();
    } else {
      img.addEventListener('load', calculateHeadingPositions);
      img.addEventListener('error', calculateHeadingPositions);
    }
  });

  // ScrollSpy: highlight active link on scroll
  const handleScroll = () => {
    // If page is navigated away (no longer in DOM), clean up the listeners
    if (!document.body.contains(pageElement)) {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateHeadingPositions);
      return;
    }

    let activeId = null;
    const scrollPosition = window.scrollY + 95; // Trigger slightly before heading reaches sticky top (75px)

    for (const item of headingTops) {
      if (item.top <= scrollPosition) {
        activeId = item.id;
      } else {
        break;
      }
    }

    tocLinks.forEach(link => {
      const parentLi = link.closest('.project-toc__item');
      if (link.getAttribute('data-target') === activeId) {
        link.classList.add('project-toc__link--active');
        if (parentLi) parentLi.classList.add('project-toc__item--active');
      } else {
        link.classList.remove('project-toc__link--active');
        if (parentLi) parentLi.classList.remove('project-toc__item--active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  // Run once to initialize active states
  handleScroll();
}

/**
 * Force reload projects (useful after editing content.json)
 */
export function clearProjectsCache() {
  projectsCache = null;
}
