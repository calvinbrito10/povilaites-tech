const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  function handleSubmit(e) {
    const form = e.target;
    const nome    = form.querySelector('[name="nome"]').value.trim();
    const contato = form.querySelector('[name="contato"]').value.trim();
    if (!nome || !contato) { e.preventDefault(); alert('Preencha seu nome e contato antes de enviar.'); return; }
    const btn = form.querySelector('[type="submit"]');
    btn.innerHTML = '✓ Mensagem enviada!';
    btn.style.background = '#1a6e3c';
    setTimeout(() => {
      btn.innerHTML = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg> Enviar mensagem';
      btn.style.background = '';
    }, 3000);
  }