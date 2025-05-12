const canvas = document.getElementById('flock');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

document.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

class Bird {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    this.size = 4 + Math.random() * 2;
  }

  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let dist = Math.sqrt(dx * dx + dy * dy);
    let speed = 3;

    if (dist > 1) {
        let followStrength = Math.min(0.05, 100 / dist); // Weaker as they get close
        this.vx += (dx / dist) * followStrength;
        this.vy += (dy / dist) * followStrength;
      }

    this.vx *= 0.95;
    this.vy *= 0.95;

    this.x += this.vx * speed;
    this.y += this.vy * speed;

    for (let other of birds) {
        if (other === this) continue;
        let dx = this.x - other.x;
        let dy = this.y - other.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 30 && dist > 0) {
          this.vx += (dx / dist) * 0.1;
          this.vy += (dy / dist) * 0.1;
        }
      }

      this.vx += (Math.random() - 0.5) * 0.2;
      this.vy += (Math.random() - 0.5) * 0.2;
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x - this.vx * 5, this.y - this.vy * 5);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = this.size / 3;
    ctx.stroke();
  }
}

const birds = [];
for (let i = 0; i < 50; i++) {
  birds.push(new Bird());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let bird of birds) {
    bird.update();
    bird.draw();
  }
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
