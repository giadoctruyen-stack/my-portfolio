/**
 * Project Card Component
 * Handles rendering individual project cards and opening project details
 */

/**
 * Render a project card
 * @param {Object} project - Project data from content.json
 * @param {number} index - Index for animation stagger
 * @returns {string} HTML string
 */
export function renderProjectCard(project, index) {
  const statusMap = {
    done: { label: 'Hoàn thành', class: 'done' },
    wip:  { label: 'Đang làm', class: 'wip' },
    todo: { label: 'Chưa bắt đầu', class: 'todo' }
  };
  
  const status = statusMap[project.status] || statusMap.todo;
  const tags = (project.tags || []).map(t => 
    `<span class="project-card__tag">${t}</span>`
  ).join('');

  // Line-art Outline SVG icons matching each exercise
  const svgIcons = {
    1: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
    2: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    3: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4M8 16h.01M16 16h.01M9 11V9h6v2"></path></svg>`,
    4: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    5: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path><path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"></path><path d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z"></path><path d="M6 14C6.55228 14 7 13.5523 7 13C7 12.4477 6.55228 12 6 12C5.44772 12 5 12.4477 5 13C5 13.5523 5.44772 14 6 14Z"></path><path d="M9 19C9.55228 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17C8.44772 17 8 17.4477 8 18C8 18.5523 8.44772 19 9 19Z"></path><path d="M15 19C15.5523 19 16 18.5523 16 18C16 17.4477 15.5523 17 15 17C14.4477 17 14 17.4477 14 18C14 18.5523 14.4477 19 15 19Z"></path><path d="M18 14C18.5523 14 19 13.5523 19 13C19 12.4477 18.5523 12 18 12C17.4477 12 17 12.4477 17 13C17 13.5523 17.4477 14 18 14Z"></path><path d="M16 9C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8C15 8.55228 15.4477 9 16 9Z"></path></svg>`,
    6: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><line x1="12" y1="2" x2="12" y2="22"></line><line x1="5" y1="9" x2="19" y2="9"></line><path d="M5 9c0 4 3 6 7 6s7-2 7-6"></path><path d="M2 22h20"></path></svg>`
  };

  const iconSvg = svgIcons[project.id] || `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`;

  return `
    <div class="project-card project-card-bento-${project.id} reveal" 
         data-project-id="${project.id}" 
         style="transition-delay: ${index * 0.05}s"
         id="project-card-${project.id}"
         tabindex="0"
         role="button"
         aria-label="Xem chi tiết ${project.title}">
      
      <div class="project-card__inner">
        <div class="project-card__header">
          <span class="project-card__bento-badge">Bài tập ${project.id}</span>
          <span class="project-card__status-badge project-card__status-badge--${status.class}">
            ${status.label}
          </span>
        </div>

        <div class="project-card__body">
          <div class="project-card__icon-container">
            ${iconSvg}
          </div>
          <div class="project-card__main-info">
            <h3 class="project-card__title">${project.title}</h3>
            <p class="project-card__subtitle">${project.subtitle || ''}</p>
          </div>
        </div>

        <div class="project-card__content">
          <p class="project-card__description">${project.description}</p>
          <div class="project-card__tags">${tags}</div>
        </div>

        <div class="project-card__footer">
          <span class="project-card__btn-link">
            Mở bài tập <span>→</span>
          </span>
        </div>
      </div>
    </div>
  `;
}

/**
 * Render project detail content from sections array
 * @param {Object} project - Full project data with sections
 * @returns {string} HTML string
 */
export function renderProjectDetail(project) {
  const defaultPdfs = {
    1: 'baitap1to6/bai1_cns.pdf',
    2: 'baitap1to6/25020066_bai2_hoangtrungdung.pdf',
    3: 'baitap1to6/25020066_bai3_hoangtrungdung.pdf',
    4: 'baitap1to6/bai4_cns.docx',
    5: 'baitap1to6/25020066_bai5_haongtrungdung.pdf',
    6: 'baitap1to6/bai6_Báo cáo_ Sử dụng AI có trách nhiệm trong học thuật.pdf'
  };

  const pdfPath = project.pdfFile || defaultPdfs[project.id];
  const isPdf = pdfPath && pdfPath.toLowerCase().endsWith('.pdf');

  const tags = (project.tags || []).map(t => 
    `<span class="tag">${t}</span>`
  ).join('');

  let contentHtml = '';
  
  if (project.displayMode === 'embedded' && project.embedSrc) {
    // Full embed mode
    contentHtml = `
      <div class="embed-container">
        <iframe src="projects/bai-tap-${project.id}/${project.embedSrc}" 
                height="${project.embedHeight || '500px'}"
                title="${project.title}"></iframe>
      </div>
    `;
  } else if (project.sections && project.sections.length > 0) {
    // Parse sections from JSON
    contentHtml = project.sections.map(section => {
      switch (section.type) {
        case 'heading':
          const level = section.level || 2;
          return `<h${level}>${section.content}</h${level}>`;
        
        case 'text':
          return `<p>${section.content}</p>`;
        
        case 'list':
          const listTag = section.ordered ? 'ol' : 'ul';
          const items = section.items.map(item => `<li>${item}</li>`).join('');
          return `<${listTag}>${items}</${listTag}>`;
        
        case 'image':
          const imgSrc = section.src.startsWith('http') 
            ? section.src 
            : `projects/bai-tap-${project.id}/${section.src}`;
          const caption = section.caption 
            ? `<p class="image-caption">${section.caption}</p>` 
            : '';
          return `<img src="${imgSrc}" alt="${section.caption || ''}" loading="lazy">${caption}`;
        
        case 'code':
          return `<pre><code>${escapeHtml(section.content)}</code></pre>`;
        
        case 'embed':
          const embedSrc = section.src.startsWith('http')
            ? section.src
            : `projects/bai-tap-${project.id}/${section.src}`;
          return `
            <div class="embed-container">
              <iframe src="${embedSrc}" 
                      height="${section.height || '400px'}"
                      title="Demo"></iframe>
            </div>
          `;

        case 'table':
          const headersHtml = (section.headers || []).map(h => `<th>${h}</th>`).join('');
          const rowsHtml = (section.rows || []).map(row => 
            `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`
          ).join('');
          return `
            <div class="table-container">
              <table class="project-table">
                <thead><tr>${headersHtml}</tr></thead>
                <tbody>${rowsHtml}</tbody>
              </table>
            </div>
          `;

        case 'divider':
          return '<hr style="border: none; border-top: 1px solid var(--border-subtle); margin: var(--space-8) 0;">';
        
        default:
          return '';
      }
    }).join('\n');
  } else {
    contentHtml = `
      <div style="text-align: center; padding: var(--space-12) 0; color: var(--text-muted);">
        <p style="font-size: var(--text-4xl); margin-bottom: var(--space-4);">📝</p>
        <p>Nội dung bài tập chưa được thêm.</p>
        <p style="font-size: var(--text-sm); margin-top: var(--space-2);">
          Hãy chỉnh sửa file <code>projects/bai-tap-${project.id}/content.json</code> để thêm nội dung.
        </p>
      </div>
    `;
  }

  return `
    <div class="project-detail">
      <button class="project-detail__back" id="project-back">
        ← Quay lại danh sách
      </button>
      <div class="project-detail__header">
        <div class="project-detail__meta">
          <span class="tag">Bài tập ${project.id}</span>
          ${tags}
        </div>
        <h1 class="project-detail__title">${project.title}</h1>
        <p class="project-detail__description">${project.description}</p>
        ${project.driveLink ? `
        <a href="${project.driveLink}" target="_blank" rel="noopener noreferrer" 
           class="btn btn--primary" style="margin-top: var(--space-6); display: inline-flex;">
          📄 Xem sản phẩm đầy đủ (Google Drive)
        </a>
        ` : ''}
      </div>
      <div class="project-content">
        ${contentHtml}
      </div>

      <!-- Embedded Document Viewer -->
      ${pdfPath ? `
        <div class="project-detail__pdf-section" style="margin-top: var(--space-12);">
          <h3 style="font-size: var(--text-lg); font-weight: 900; margin-bottom: var(--space-4); text-transform: uppercase; border-bottom: 2px solid #000; padding-bottom: var(--space-2); display: inline-block;">
            📄 Xem tài liệu chi tiết
          </h3>
          
          ${isPdf ? `
            <div class="pdf-container" style="border: 2px solid #000; border-radius: var(--radius-lg); overflow: hidden; background: #fff; box-shadow: 4px 4px 0px #000; height: 650px;">
              <iframe src="${pdfPath}" width="100%" height="100%" style="border: none;"></iframe>
            </div>
          ` : `
            <div class="pdf-container-placeholder" style="border: 2px solid #000; border-radius: var(--radius-lg); padding: var(--space-8); background: #fff; box-shadow: 4px 4px 0px #000; text-align: center;">
              <p style="font-size: var(--text-base); color: var(--text-secondary); margin-bottom: var(--space-4);">
                Tài liệu hiện tại ở định dạng Word (<strong>.docx</strong>). Hãy đổi tên hoặc xuất sang định dạng <strong>.pdf</strong> và liên kết để xem trực tiếp tại đây.
              </p>
              <a href="${pdfPath}" download class="btn btn--outline" style="display: inline-flex; justify-content: center;">
                📥 Tải xuống tệp Word (.docx)
              </a>
            </div>
          `}
        </div>
      ` : ''}
    </div>
  `;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
