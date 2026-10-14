/* Edite estes dados para atualizar os canais de atendimento. */
const SITE_CONFIG = Object.freeze({ whatsapp: '5511939519727' });

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
  navigation.classList.remove('is-open');
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
window.matchMedia('(min-width: 801px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('#service').value = link.dataset.service;
  });
});

// Rolagem suave para todos os links internos, descontando o menu fixo.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const hash = link.getAttribute('href');
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    event.preventDefault();
    closeMenu();
    const headerHeight = document.querySelector('.header').getBoundingClientRect().height;
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerHeight - 16);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top, behavior: reducedMotion ? 'instant' : 'smooth' });
    if (window.location.hash !== hash) history.pushState(null, '', hash);
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
});

const form = document.querySelector('#quote-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const name = String(data.get('name')).trim();
  const location = String(data.get('location')).trim();
  if (!name || !location) {
    document.querySelector('#form-status').textContent = 'Preencha seu nome e a localização do atendimento.';
    (!name ? form.elements.name : form.elements.location).focus();
    return;
  }
  const service = form.elements.service.selectedOptions[0].textContent;
  const details = String(data.get('details')).trim();
  const message = [
    `Olá, Studio Pleno Pingo! Meu nome é ${name}. Gostaria de solicitar um orçamento.`,
    '', `Serviço: ${service}`, `Quantidade: ${data.get('quantity')}`,
    `Localização: ${location}`, details ? `Informações adicionais: ${details}` : '',
    '', 'Podemos conversar sobre o atendimento?'
  ].filter(line => line !== null).join('\n');
  const url = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
  const status = document.querySelector('#form-status');
  status.replaceChildren(document.createTextNode('Sua mensagem está pronta. '));
  const fallback = document.createElement('a');
  fallback.href = url;
  fallback.target = '_blank';
  fallback.rel = 'noopener noreferrer';
  fallback.textContent = 'Continuar no WhatsApp ↗';
  fallback.style.textDecoration = 'underline';
  status.append(fallback);
});

document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) {
  const links = Array.from(navigation.querySelectorAll('a:not(.button)'));
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      links.forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  ['home', 'servicos', 'sobre', 'contatos'].forEach(id => observer.observe(document.getElementById(id)));
}
