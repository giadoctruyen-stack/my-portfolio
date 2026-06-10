/**
 * Page Transition Manager - Clean Professional
 * Simple, fast transitions for light theme
 */

export default class PageTransition {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.isTransitioning = false;
  }

  async transition(html, pageId, afterRender = null) {
    if (this.isTransitioning) return;
    this.isTransitioning = true;

    const currentPage = this.container.querySelector('.page.active');
    
    // Fade out current page
    if (currentPage) {
      currentPage.style.transition = 'opacity 0.15s ease';
      currentPage.style.opacity = '0';
      await this.wait(150);
      currentPage.remove();
    }

    // Create and insert new page
    const newPage = document.createElement('div');
    newPage.className = 'page';
    newPage.id = `page-${pageId}`;
    newPage.innerHTML = html;
    newPage.style.opacity = '0';
    newPage.style.transition = 'opacity 0.15s ease';
    this.container.appendChild(newPage);
    
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Initialize page components
    if (afterRender) {
      afterRender(newPage);
    }
    
    // Force layout computation for transition
    void newPage.offsetHeight;
    
    newPage.classList.add('active');
    newPage.style.opacity = '1';

    this.isTransitioning = false;
  }

  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
