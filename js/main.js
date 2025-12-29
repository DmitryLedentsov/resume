
(function(){
  const skills = document.querySelectorAll('[data-level]');
  for(const el of skills){
    const level = parseInt(el.getAttribute('data-level') || '0', 10);
    const bar = el.querySelector('.bar > span');
    if(bar){ bar.style.width = Math.max(0, Math.min(100, level)) + '%'; }
  }
})();
