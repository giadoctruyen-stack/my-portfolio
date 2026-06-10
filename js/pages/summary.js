/**
 * Summary Page - Trang Tổng kết
 *
 * ╔══════════════════════════════════════════════════╗
 * ║  NỘI DUNG TỔNG KẾT HỌC PHẦN VNU1001             ║
 * ║  Đã được đồng bộ theo phản biện cá nhân         ║
 * ╚══════════════════════════════════════════════════╝
 */

const SUMMARY_DATA = {
  // Thống kê
  stats: [
    { value: '6',  label: 'Bài tập dự án' },
    { value: '3', label: 'Năng lực số cốt lõi' },
    { value: '100%', label: 'Liêm chính học thuật' },
    { value: '∞',  label: 'Động lực phát triển' }
  ],

  // Kỹ năng đạt được
  skillsAcquired: [
    { name: 'Quản trị tài nguyên & Hợp tác đám mây', level: 90 },
    { name: 'Tư duy nghiên cứu & Lọc thông tin', level: 85 },
    { name: 'Kỹ nghệ tương tác AI (Prompt Eng.)', level: 90 },
    { name: 'Trách nhiệm học thuật (Zero Trust)', level: 95 },
    { name: 'Giải quyết bài toán kỹ thuật', level: 80 }
  ]
};

export function renderSummaryPage() {
  return `
    <!-- Summary Hero -->
    <section class="summary-hero">
      <div class="container">
        <h1 class="summary-hero__title reveal">
          <span class="text-gradient">Tổng kết hành trình</span>
        </h1>
        <p class="summary-hero__subtitle reveal">
          Hành trình học tập và phát triển năng lực số tại UET - Học phần VNU1001
        </p>
        <div class="divider reveal"></div>
      </div>
    </section>

    <!-- Stats -->
    <section class="section section--alt" id="stats-section">
      <div class="container">
        <div class="stats-grid stagger-children">
          ${SUMMARY_DATA.stats.map(stat => `
            <div class="card stat-card reveal">
              <div class="stat-card__value">${stat.value}</div>
              <div class="stat-card__label">${stat.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Section I: Trải nghiệm & Cảm nhận cá nhân -->
    <section class="section" id="reflection-journey">
      <div class="container container--narrow">
        <div class="section__header reveal">
          <span class="section__label">Phần I</span>
          <h2 class="section__title">Trải nghiệm & Cảm nhận cá nhân</h2>
          <div class="divider"></div>
        </div>
        
        <div class="card reflection-quote reveal">
          <p class="reflection-quote__text">
            <strong>Bước ngoặt tư duy:</strong> Học phần VNU1001 không chỉ là một môn học điều kiện, mà đã tái định nghĩa hoàn toàn cách em tiếp cận công nghệ.
          </p>
          <p class="reflection-quote__text">
            <strong>Hành trình số hóa:</strong> Việc tự tay biên tập Portfolio từ các thao tác hệ thống tệp tin cơ bản đến điều phối dự án từ xa và ứng dụng AI tạo sinh giúp em có cơ hội tự phản biện, hệ thống hóa tri thức và nhìn thấy rõ nét sự trưởng thành của bản thân.
          </p>
        </div>
      </div>
    </section>

    <!-- Section II: Kiến thức & Kỹ năng cốt lõi -->
    <section class="section section--alt" id="skills-section">
      <div class="container">
        <div class="section__header reveal">
          <span class="section__label">Phần II</span>
          <h2 class="section__title">3 Nhóm năng lực số cốt lõi đã làm chủ</h2>
          <div class="divider"></div>
        </div>

        <div class="experience-grid stagger-children" style="margin-bottom: var(--space-12);">
          <!-- Competency 1 -->
          <div class="card experience-card reveal">
            <div class="experience-card__icon">🤝</div>
            <h3 class="experience-card__title">1. Quản trị không gian số & Hợp tác đám mây</h3>
            <p class="experience-card__text">
              Thành thạo kỹ thuật phân cấp thư mục logic, đặt tên CamelCase kết hợp Snake_case để bảo toàn tệp khi đồng bộ. Làm chủ công cụ Trello (Labels phân cấp độ ưu tiên, Checklist điều phối task) và quy trình Suggesting trên Google Docs để tối ưu năng suất nhóm 10 người từ xa.
            </p>
          </div>

          <!-- Competency 2 -->
          <div class="card experience-card reveal">
            <div class="experience-card__icon">🔍</div>
            <h3 class="experience-card__title">2. Bộ lọc thông tin học thuật & Tư duy phản biện</h3>
            <p class="experience-card__text">
              Sử dụng thành thạo các toán tử nâng cao (<code>site:</code>, <code>filetype:</code>, <code>AND/OR</code>, <code>""</code>) để khai thác kho học liệu lớn (IEEE Xplore, VNU-Lic). Thiết lập ma trận phân loại tài liệu dựa trên chỉ số trích dẫn, Impact Factor để tìm ra nguồn tin chuẩn xác làm móng nghiên cứu.
            </p>
          </div>

          <!-- Competency 3 -->
          <div class="card experience-card reveal">
            <div class="experience-card__icon">🧠</div>
            <h3 class="experience-card__title">3. Kỹ nghệ tương tác AI & Trách nhiệm học thuật</h3>
            <p class="experience-card__text">
              Áp dụng nhuần nhuyễn kỹ thuật Prompt Engineering nâng cao (Role-playing, Chain-of-Thought, Few-shot) giúp tăng chất lượng đầu ra của LLM lên gấp 3-5 lần. Biến AI thành "đối tác tư duy" để giải quyết bài toán phức tạp (Tính đóng gói Java, Deadlock hệ điều hành) một cách minh bạch, liêm chính.
            </p>
          </div>
        </div>

        <!-- Progress Bars -->
        <div class="card reveal" style="max-width: 800px; margin: 0 auto;">
          <h3 style="text-align: center; margin-bottom: var(--space-6); color: var(--text-heading); font-size: var(--text-xl);">
            Đánh giá mức độ làm chủ năng lực số
          </h3>
          <div class="skills-progress">
            ${SUMMARY_DATA.skillsAcquired.map(skill => `
              <div class="skill-progress-item">
                <span class="skill-progress-item__label">${skill.name}</span>
                <div class="skill-progress-item__bar">
                  <div class="progress">
                    <div class="progress__bar" data-width="${skill.level}%"></div>
                  </div>
                </div>
                <span class="skill-progress-item__value">${skill.level}%</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- Section III: Điểm tâm đắc & Thách thức -->
    <section class="section" id="positives-challenges">
      <div class="container">
        <div class="section__header reveal">
          <span class="section__label">Phần III</span>
          <h2 class="section__title">Điểm tâm đắc và Thách thức đã vượt qua</h2>
          <div class="divider"></div>
        </div>

        <div class="grid grid--2 stagger-children">
          <!-- Positive -->
          <div class="card feedback-card positive reveal">
            <div class="feedback-badge badge--positive">💡 Điểm tâm đắc nhất</div>
            <h3 class="feedback-card__title">Chuyển đổi vị thế làm chủ công nghệ</h3>
            <p class="feedback-card__text">
              Chuyển đổi vị thế từ người dùng thụ động sang Nhà quản trị công nghệ chủ động nhờ mô hình tương tác kết hợp năng lực con người (Human-in-the-loop). Tự tay can thiệp bố cục, gọt giũa typography để sửa lỗi font tiếng Việt và biên tập lại câu từ của máy để ấn phẩm mang đậm dấu ấn cá nhân.
            </p>
          </div>

          <!-- Challenge -->
          <div class="card feedback-card challenge reveal">
            <div class="feedback-badge badge--challenge">⚠️ Thách thức & Giải pháp</div>
            <h3 class="feedback-card__title">Đối phó với ảo giác AI</h3>
            <p class="feedback-card__text">
              Rủi ro từ hiện tượng ảo giác (hallucination) của AI khi tự bịa đặt số liệu, trích dẫn giả mạo. Em đã đối phó bằng nguyên tắc "Hoài nghi thuật toán - Zero Trust", luôn kiểm chứng chéo và đối chiếu nghiêm túc mọi kết quả với giáo trình gốc trước khi đưa vào bài làm.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section IV: Trưởng thành nhận thức & Định hướng tương lai -->
    <section class="section section--alt" id="growth-future">
      <div class="container">
        <div class="section__header reveal">
          <span class="section__label">Phần IV</span>
          <h2 class="section__title">Trưởng thành nhận thức & Định hướng tương lai</h2>
          <div class="divider"></div>
        </div>

        <div class="card reveal" style="margin-bottom: var(--space-8); background: var(--bg-surface);">
          <h3 style="margin-bottom: var(--space-3); color: var(--text-heading); font-size: var(--text-xl);">Nhận thức về Liêm chính học thuật</h3>
          <p style="line-height: var(--leading-relaxed); color: var(--text-secondary); text-align: justify; max-width: 100%;">
            Đối với một sinh viên ngành Công nghệ Thông tin tại UET, bảo vệ tính Liêm chính học thuật là nguyên tắc đạo đức cốt lõi giúp định hình tác phong của một kỹ sư chân chính trong kỷ nguyên số. Em nhận thức sâu sắc ranh giới nghiêm ngặt giữa việc khai thác AI làm một "đối tác tư duy" hợp lý để giải thích nguyên lý hay hỗ trợ debug thuật toán, với hành vi gian lận dưới hình thức "viết hộ kỹ thuật số". Bằng cách kiên quyết nói không với copy-paste thụ động, luôn chủ động kiểm chứng chéo dữ liệu từ máy với giáo trình gốc và lồng ghép lăng kính phản biện cá nhân, em cam kết loại bỏ triệt để hội chứng "lười tư duy thứ cấp" để bảo vệ năng lực tư duy máy tính độc lập và giá trị thực học của bản thân.
          </p>
        </div>

        <h3 class="reveal" style="text-align: center; margin-bottom: var(--space-6); color: var(--text-heading); font-size: var(--text-xl);">Kế hoạch hành động tại UET</h3>
        <div class="future-cards stagger-children">
          <!-- Plan 1 -->
          <div class="card future-card reveal">
            <div class="future-card__icon">💻</div>
            <h3 class="future-card__title">Trong lập trình</h3>
            <p class="future-card__desc">
              Áp dụng nguyên tắc "Đối tác tư duy, không phải thực thể viết hộ". Tự nghiên cứu logic nền tảng trước khi dùng AI để hỗ trợ debug, tối ưu thuật toán hoặc giải thích mẫu thiết kế (Design Patterns) môn OOP Java.
            </p>
          </div>

          <!-- Plan 2 -->
          <div class="card future-card reveal">
            <div class="future-card__icon">🤝</div>
            <h3 class="future-card__title">Trong quản lý</h3>
            <p class="future-card__desc">
              Duy trì cấu trúc thư mục Google Drive đa cấp kết hợp Trello Checklist cho mọi bài tập lớn và dự án mã nguồn mở trên GitHub.
            </p>
          </div>

          <!-- Plan 3 -->
          <div class="card future-card reveal">
            <div class="future-card__icon">🔒</div>
            <h3 class="future-card__title">Bảo mật thông tin</h3>
            <p class="future-card__desc">
              Tuân thủ nghiêm ngặt việc bảo mật tài sản dữ liệu, tuyệt đối không tải mã nguồn dự án nội bộ lên không gian AI công cộng.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section V: Hệ thống điều hướng dự án thành phần -->
    <section class="section" id="project-navigation">
      <div class="container">
        <div class="section__header reveal">
          <span class="section__label">Phần V</span>
          <h2 class="section__title">Hệ thống điều hướng dự án thành phần</h2>
          <div class="divider"></div>
        </div>
        
        <div class="lessons-list stagger-children">
          <a href="#/projects/1" class="lesson-item reveal">
            <div class="lesson-item__number">1</div>
            <div class="lesson-item__content">
              <div class="lesson-item__title">Bài tập 1: Thao tác cơ bản với Tệp tin và Thư mục</div>
              <div class="lesson-item__desc">Quản lý và tổ chức dữ liệu học tập khoa học trên ổ đĩa F.</div>
            </div>
          </a>
          <a href="#/projects/2" class="lesson-item reveal">
            <div class="lesson-item__number">2</div>
            <div class="lesson-item__content">
              <div class="lesson-item__title">Bài tập 2: Tìm kiếm và Đánh giá Thông tin Học thuật</div>
              <div class="lesson-item__desc">Khai thác và thiết lập ma trận đánh giá nguồn tin khoa học.</div>
            </div>
          </a>
          <a href="#/projects/3" class="lesson-item reveal">
            <div class="lesson-item__number">3</div>
            <div class="lesson-item__content">
              <div class="lesson-item__title">Bài tập 3: Viết Prompt hiệu quả cho các tác vụ học tập</div>
              <div class="lesson-item__desc">Ứng dụng kỹ thuật Prompt Engineering 3 cấp độ trên LLM.</div>
            </div>
          </a>
          <a href="#/projects/4" class="lesson-item reveal">
            <div class="lesson-item__number">4</div>
            <div class="lesson-item__content">
              <div class="lesson-item__title">Bài tập 4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm</div>
              <div class="lesson-item__desc">Điều phối tiến độ qua Trello, Google Workspace và Zalo từ xa.</div>
            </div>
          </a>
          <a href="#/projects/5" class="lesson-item reveal">
            <div class="lesson-item__number">5</div>
            <div class="lesson-item__content">
              <div class="lesson-item__title">Bài tập 5: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung</div>
              <div class="lesson-item__desc">Quy trình phối hợp đa nền tảng AI tạo sinh thiết kế blog Canva.</div>
            </div>
          </a>
          <a href="#/projects/6" class="lesson-item reveal">
            <div class="lesson-item__number">6</div>
            <div class="lesson-item__content">
              <div class="lesson-item__title">Bài tập 6: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu</div>
              <div class="lesson-item__desc">Đối sánh chính sách học thuật UET vs NUS và 6 nguyên tắc ứng xử AI.</div>
            </div>
          </a>
        </div>
    <!-- Section VI: Lời kết -->
    <section class="section gratitude-section" id="gratitude-section" style="text-align: center; padding: var(--space-8) 0;">
      <div class="container container--narrow">
        <div class="card gratitude-card reveal reveal--scale" style="border: 2px solid #000; box-shadow: 4px 4px 0px #000; padding: var(--space-8); background: #ffffff; border-radius: var(--radius-lg);">
          <p style="font-size: var(--text-base); font-style: italic; line-height: var(--leading-relaxed); color: var(--text-heading); font-weight: 500; margin: 0;">
            "Em xin gửi lời cảm ơn chân thành đến các Thầy/Cô bộ môn đã định hướng, và cảm ơn các bạn đã ghé thăm không gian số cá nhân của tôi!"
          </p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="site-footer reveal">
      <div class="container">
        <p class="site-footer__text">
          Được tạo với <span class="site-footer__heart">♥</span> bằng HTML, CSS & JavaScript
        </p>
        <p class="site-footer__text" style="margin-top: var(--space-2);">
          © 2026 Digital Portfolio | VNU1001. All rights reserved.
        </p>
      </div>
    </footer>
  `;
}

export function initSummaryPage(pageElement) {
  // Animate progress bars when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.width;
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  pageElement.querySelectorAll('.progress__bar').forEach(bar => {
    observer.observe(bar);
  });

  // Animate stat counters
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent;
        const num = parseInt(text);
        if (!isNaN(num) && num > 0 && num <= 100) {
          animateCounter(el, 0, num, 1500);
        }
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  pageElement.querySelectorAll('.stat-card__value').forEach(el => {
    statObserver.observe(el);
  });
}

function animateCounter(el, start, end, duration) {
  const startTime = performance.now();
  const suffix = el.textContent.replace(/[0-9]/g, '');
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.round(start + (end - start) * eased);
    
    el.textContent = current + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}
