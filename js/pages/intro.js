/**
 * Intro Page - Trang Giới thiệu
 * 
 * ╔══════════════════════════════════════════════════╗
 * ║  HƯỚNG DẪN CHỈNH SỬA THÔNG TIN CÁ NHÂN:       ║
 * ║  Tìm object PERSONAL_INFO bên dưới và thay đổi  ║
 * ║  các giá trị theo thông tin thật của bạn.        ║
 * ╚══════════════════════════════════════════════════╝
 */

// ============================================================
// CHỈNH SỬA THÔNG TIN CÁ NHÂN TẠI ĐÂY
// ============================================================
const PERSONAL_INFO = {
  name: 'Đào Văn Hoàng Gia',
  greeting: 'Xin chào, mình là',
  subtitle: 'Sinh viên Công nghệ Thông tin hướng tới việc làm chủ các công nghệ cốt lõi và ứng dụng Trí tuệ nhân tạo vào thực tiễn.',

  // Thông tin cá nhân
  school: 'Trường Đại học Công nghệ - Đại học Quốc Gia Hà Nội',
  major: 'Công nghệ thông tin',
  year: 'Năm 1',
  mssv: '25020134',
  email: 'giadoctruyen@gmail.com',

  // Giới thiệu bản thân
  bio: 'Em là Đào Văn Hoàng Gia, sinh viên năm nhất khoa CNTT - UET. Sở thích của em là nghiên cứu các công cụ AI tạo sinh và đọc sách khoa học viễn tưởng. Mục tiêu học tập của em là làm chủ các kỹ năng số cốt lõi để định hướng trở thành một Chuyên gia trong lĩnh vực Trí tuệ nhân tạo.<br><br>Trang web này đóng vai trò là Portfolio cá nhân của em, được xây dựng với mục đích lưu trữ các sản phẩm cá nhân để dễ dàng truy cập và chia sẻ, hệ thống hóa trọn vẹn hành trình rèn luyện 6 bài tập môn học.',

  // Phương châm cá nhân
  quote: '"Sáng tạo không giới hạn trong tư duy, kỷ luật tuyệt đối trong hành động."',
  quoteAuthor: 'Phương châm cá nhân',

  // Kỹ năng & công cụ
  skills: [
    { name: 'HTML/CSS', icon: '🌐', level: 70 },
    { name: 'JavaScript', icon: '⚡', level: 50 },
    { name: 'Python', icon: '🐍', level: 40 },
    { name: 'Git', icon: '📦', level: 55 },
    { name: 'AI Tools', icon: '🤖', level: 65 },
    { name: 'Figma', icon: '🎨', level: 45 },
  ],

  // Marquee items — infinite scroll content
  marqueeRow1: [
    { icon: '🌐', text: 'HTML / CSS', level: '70%' },
    { icon: '⚡', text: 'JavaScript', level: '50%' },
    { icon: '🐍', text: 'Python', level: '40%' },
    { icon: '📦', text: 'Git & GitHub', level: '55%' },
    { icon: '🤖', text: 'ChatGPT / AI', level: '65%' },
    { icon: '🎨', text: 'Figma', level: '45%' },
    { icon: '📊', text: 'Google Sheets', level: '60%' },
    { icon: '🖥️', text: 'VS Code', level: '70%' },
  ],
  marqueeRow2: [
    { icon: '🔍', text: 'Tìm kiếm thông tin', level: '75%' },
    { icon: '📝', text: 'Viết Prompt', level: '70%' },
    { icon: '👥', text: 'Làm việc nhóm', level: '65%' },
    { icon: '🎬', text: 'Tạo nội dung số', level: '60%' },
    { icon: '⚖️', text: 'AI có trách nhiệm', level: '70%' },
    { icon: '📁', text: 'Quản lý tệp tin', level: '80%' },
    { icon: '💡', text: 'Tư duy phản biện', level: '60%' },
    { icon: '🚀', text: 'Học hỏi liên tục', level: '90%' },
  ],

  // Quá trình học tập (timeline)
  goals: [
    {
      id: 1,
      date: 'Bài tập 1',
      title: 'Thao tác với tệp tin và thư mục',
      desc: 'Làm quen với hệ thống, quản lý tệp tin và tổ chức cấu trúc thư mục khoa học.'
    },
    {
      id: 2,
      date: 'Bài tập 2',
      title: 'Tìm kiếm & đánh giá thông tin',
      desc: 'Nâng cao kỹ năng khai thác internet, sử dụng cú pháp tìm kiếm nâng cao và kiểm chứng nguồn tin.'
    },
    {
      id: 3,
      date: 'Bài tập 3',
      title: 'Viết Prompt hiệu quả với AI',
      desc: 'Học cách giao tiếp, thiết kế câu lệnh tối ưu để làm việc cùng AI hiệu quả.'
    },
    {
      id: 4,
      date: 'Bài tập 4',
      title: 'Công cụ hợp tác trực tuyến',
      desc: 'Ứng dụng các nền tảng số để làm việc nhóm, chia sẻ dữ liệu và cộng tác trực tuyến.'
    },
    {
      id: 5,
      date: 'Bài tập 5',
      title: 'Sáng tạo nội dung số với AI',
      desc: 'Sử dụng công nghệ AI để lên ý tưởng, thiết kế hình ảnh và sản xuất nội dung số đa phương tiện.'
    },
    {
      id: 6,
      date: 'Bài tập 6',
      title: 'Sử dụng AI có trách nhiệm',
      desc: 'Hiểu về bản quyền, đạo đức AI, tính bảo mật dữ liệu và ứng dụng AI bền vững.'
    }
  ]
};

// ============================================================
// RENDER FUNCTIONS
// ============================================================

/**
 * Render a marquee row with duplicated items for infinite scroll
 */
function renderMarqueeRow(items, reverse = false) {
  const itemsHtml = items.map(item => `
    <div class="marquee-item">
      <span class="marquee-item__icon">${item.icon}</span>
      <span class="marquee-item__text">${item.text}</span>
      <span class="marquee-item__level">${item.level}</span>
    </div>
  `).join('');

  // Duplicate items for seamless loop
  return `
    <div class="marquee-row">
      <div class="marquee-track ${reverse ? 'marquee-track--reverse' : ''}">
        ${itemsHtml}
        ${itemsHtml}
      </div>
    </div>
  `;
}

export function renderIntroPage() {
  return `
    <!-- Hero Section (MS365 style) -->
    <section class="hero" id="hero-section">
      <div class="container">
        <div class="hero__content">
          <p class="hero__greeting reveal">
            <span class="wave">👋</span>
            <span>${PERSONAL_INFO.greeting}</span>
          </p>
          <h1 class="hero__name reveal text-plasma">
            ${PERSONAL_INFO.name}
          </h1>
          <p class="hero__subtitle reveal">
            ${PERSONAL_INFO.subtitle}
          </p>
          <div class="hero__cta reveal">
            <a href="#/projects" class="btn btn--primary btn--lg" id="cta-projects">
              Khám phá dự án
            </a>
            <a href="#/summary" class="btn btn--outline btn--lg" id="cta-summary">
              Tổng kết hành trình
            </a>
          </div>
        </div>
        <div class="hero__decoration" aria-hidden="true">
          <div class="hero__orb hero__orb--1"></div>
          <div class="hero__orb hero__orb--2"></div>
          <div class="hero__orb hero__orb--3"></div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section" id="about-section">
      <div class="container">
        <div class="section__header reveal">
          <span class="section__label">Về mình</span>
          <h2 class="section__title">Giới thiệu bản thân</h2>
          <div class="divider"></div>
        </div>
        <div class="about-grid">
          <div class="about__avatar-wrapper reveal reveal--left">
            <div class="about__avatar-glow"></div>
            <img class="about__avatar" src="assets/images/profilepic.jpg" alt="Đào Văn Hoàng Gia">
          </div>
          <div class="about__info">
            <p class="about__bio reveal">${PERSONAL_INFO.bio}</p>
            <div class="info-list reveal">
              <div class="info-item">
                <span class="info-item__icon">🏫</span>
                <span class="info-item__label">Trường</span>
                <span class="info-item__value">${PERSONAL_INFO.school}</span>
              </div>
              <div class="info-item">
                <span class="info-item__icon">📚</span>
                <span class="info-item__label">Ngành</span>
                <span class="info-item__value">${PERSONAL_INFO.major}</span>
              </div>
              <div class="info-item">
                <span class="info-item__icon">🎓</span>
                <span class="info-item__label">Năm</span>
                <span class="info-item__value">${PERSONAL_INFO.year}</span>
              </div>
              <div class="info-item">
                <span class="info-item__icon">🪪</span>
                <span class="info-item__label">MSSV</span>
                <span class="info-item__value">${PERSONAL_INFO.mssv}</span>
              </div>
              <div class="info-item">
                <span class="info-item__icon">📧</span>
                <span class="info-item__label">Email</span>
                <span class="info-item__value">${PERSONAL_INFO.email}</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Section -->
    <section class="section" id="quote-section">
      <div class="container">
        <div class="card card--glass quote-card gradient-border reveal reveal--scale">
          <div class="quote-card__icon">❝</div>
          <p class="quote-card__text">${PERSONAL_INFO.quote}</p>
          <p class="quote-card__author">${PERSONAL_INFO.quoteAuthor}</p>
        </div>
      </div>
    </section>

    <!-- Goals Timeline -->
    <section class="section" id="goals-section">
      <div class="container container--narrow">
        <div class="section__header reveal">
          <span class="section__label">Lộ trình</span>
          <h2 class="section__title">Quá trình học tập</h2>
          <div class="divider"></div>
        </div>
        <div class="timeline stagger-children">
          ${PERSONAL_INFO.goals.map(goal => `
            <a href="#/projects/${goal.id}" class="timeline__item timeline__item--link reveal">
              <div class="timeline__dot"></div>
              <span class="timeline__date">${goal.date}</span>
              <h4 class="timeline__title">
                ${goal.title}
                <span class="timeline__title-arrow">→</span>
              </h4>
              <p class="timeline__desc">${goal.desc}</p>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/**
 * Post-render initialization for intro page
 * Animates progress bars after they become visible
 */
export function initIntroPage(pageElement) {
  // Animate progress bars when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.width;
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  pageElement.querySelectorAll('.progress__bar').forEach(bar => {
    observer.observe(bar);
  });
}
