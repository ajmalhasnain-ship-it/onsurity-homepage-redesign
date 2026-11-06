const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Build colour ramps on the banking page
const ramps = document.getElementById('ramps');
if (ramps) {
  const hues = [['Primary', 228], ['Success', 152], ['Warning', 32], ['Danger', 356], ['Info', 200], ['Violet', 265]];
  hues.forEach(([name, h]) => {
    const row = document.createElement('div');
    row.className = 'ramp';
    row.innerHTML = `<span>${name}</span>` + Array.from({ length: 11 }, (_, i) => {
      const l = 96 - i * 8.2;
      const s = 40 + Math.min(i, 6) * 8;
      return `<i style="background:hsl(${h} ${s}% ${l}%)" title="${name} ${i === 0 ? 50 : i * 100}"></i>`;
    }).join('');
    ramps.appendChild(row);
  });
}
