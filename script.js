// 숫자 카운팅 애니메이션
function animateNumber(el){
  const target = parseInt(el.dataset.target, 10);
  let current = 0;
  const step = Math.max(1, Math.floor(target/60)); // ~1초
  const tick = () => {
    current = Math.min(current + step, target);
    el.textContent = current.toLocaleString();
    if (current < target) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.impact-number').forEach(animateNumber);

  // 내비 링크 부드러운 스크롤
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.startsWith('#')) {
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});
