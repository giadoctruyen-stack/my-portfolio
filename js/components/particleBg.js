/**
 * Retro Brutalist Shapes Background
 * Replaces organic waves with floating bold geometry (circles, squares, triangles, crosses)
 * featuring thick outlines, offset shadows, and scroll parallax motion.
 */

export default class ParticleBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.time = 0;
    
    // Scroll tracking with lerp for smooth parallax motion
    this.scrollY = 0;
    this.targetScrollY = 0;
    
    this.isRunning = false;
    this.animationId = null;

    // Initialize shapes
    this.shapes = [];
    
    this.init();
  }

  init() {
    this.resize();
    this.setupEvents();
    this.initShapes();
    this.start();
  }

  initShapes() {
    const colors = ['#0038ff', '#ff007f', '#ff5500', '#d4ff00', '#ffffff'];
    const types = ['square', 'circle', 'cross', 'triangle'];
    const width = this.canvas.width;
    const height = this.canvas.height;
    
    this.shapes = [];
    
    // Generate 20 floating brutalist shapes
    for (let i = 0; i < 20; i++) {
      this.shapes.push({
        x: Math.random() * width,
        y: Math.random() * (height * 2), // Spread over virtual height for scrolling
        size: 15 + Math.random() * 30,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        rotation: Math.random() * Math.PI * 2,
        vRotation: (Math.random() - 0.5) * 0.006,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: types[Math.floor(Math.random() * types.length)],
        parallaxFactor: 0.15 + Math.random() * 0.45
      });
    }
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      pointer-events: none;
      z-index: -1;
      opacity: 1;
    `;
  }

  setupEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.initShapes();
    });
    
    // Track scroll position
    window.addEventListener('scroll', () => {
      this.targetScrollY = window.scrollY;
    }, { passive: true });
  }

  update() {
    this.time += 0.005; 
    
    // Lerp scroll position for silky smooth movement on scroll
    this.scrollY += (this.targetScrollY - this.scrollY) * 0.08;

    const width = this.canvas.width;
    const height = this.canvas.height;

    // Update shapes positions
    this.shapes.forEach(shape => {
      shape.x += shape.vx;
      shape.y += shape.vy;
      shape.rotation += shape.vRotation;

      // Wrap around boundary coordinates
      const maxVirtualHeight = height * 2.2;
      
      if (shape.x < -shape.size * 2) shape.x = width + shape.size;
      if (shape.x > width + shape.size * 2) shape.x = -shape.size;
      if (shape.y < -shape.size * 2) shape.y = maxVirtualHeight + shape.size;
      if (shape.y > maxVirtualHeight + shape.size * 2) shape.y = -shape.size;
    });
  }

  draw() {
    const width = this.canvas.width;
    const height = this.canvas.height;
    
    // 1. Draw solid background cement color
    this.ctx.fillStyle = '#ececec';
    this.ctx.fillRect(0, 0, width, height);

    // 2. Draw coordinates graph grid (reacting slightly to scroll)
    this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.04)';
    this.ctx.lineWidth = 1.5;
    
    const gridSize = 24;
    const gridOffsetY = -(this.scrollY * 0.1) % gridSize;
    
    this.ctx.beginPath();
    for (let y = gridOffsetY; y < height; y += gridSize) {
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(width, y);
    }
    for (let x = 0; x < width; x += gridSize) {
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, height);
    }
    this.ctx.stroke();

    // 3. Draw floating brutalist shapes
    this.shapes.forEach(shape => {
      this.ctx.save();
      
      // Compute final drawing Y coord including scroll parallax shift
      const finalY = shape.y - (this.scrollY * shape.parallaxFactor);
      
      // Only draw if visible on viewport
      if (finalY > -shape.size * 2 && finalY < height + shape.size * 2) {
        this.ctx.translate(shape.x, finalY);
        this.ctx.rotate(shape.rotation);

        this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.06)';
        this.ctx.lineWidth = 1.5;

        // Draw main shape outline (faint, no solid fills or drop shadows to ensure text readability)
        this.drawShapePath(0, 0, shape.size, shape.type);
        this.ctx.stroke();
      }
      
      this.ctx.restore();
    });
  }

  drawShapePath(x, y, size, type) {
    this.ctx.beginPath();
    
    if (type === 'square') {
      this.ctx.rect(x - size / 2, y - size / 2, size, size);
    } else if (type === 'circle') {
      this.ctx.arc(x, y, size / 2, 0, Math.PI * 2);
    } else if (type === 'triangle') {
      const h = size * (Math.sqrt(3) / 2);
      this.ctx.moveTo(x, y - h / 2);
      this.ctx.lineTo(x - size / 2, y + h / 2);
      this.ctx.lineTo(x + size / 2, y + h / 2);
      this.ctx.closePath();
    } else if (type === 'cross') {
      const thickness = size * 0.3;
      this.ctx.rect(x - size / 2, y - thickness / 2, size, thickness);
      this.ctx.rect(x - thickness / 2, y - size / 2, thickness, size);
    }
  }

  animate() {
    if (!this.isRunning) return;
    this.update();
    this.draw();
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  start() {
    this.isRunning = true;
    this.animate();
  }

  stop() {
    this.isRunning = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}
