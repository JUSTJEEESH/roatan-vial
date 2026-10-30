// Roatán Vial — progressive enhancement for every page.
// No storage, no tracking, no network requests.

const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const lang = document.documentElement.lang.startsWith('es') ? 'es' : 'en';

/* ---------- Menu ---------- */
(function menu() {
  const btn = document.querySelector('.menu-toggle');
  const panel = document.getElementById('site-menu');
  if (!btn || !panel) return;
  const label = btn.querySelector('span');
  const openText = label.textContent;
  const closeText = lang === 'es' ? 'Cerrar' : 'Close';
  const focusables = () => [btn, ...$$('a, button', panel)];

  function setOpen(open) {
    btn.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    label.textContent = open ? closeText : openText;
    if (open) panel.querySelector('a')?.focus();
  }
  btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => {
    if (panel.hidden) return;
    if (e.key === 'Escape') { setOpen(false); btn.focus(); }
    if (e.key === 'Tab') {
      const f = focusables();
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  panel.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
})();

/* ---------- Checklists ---------- */
$$('[data-checklist]').forEach((list) => {
  const boxes = $$('input[type="checkbox"]', list);
  const count = list.querySelector('[data-count]');
  const bar = list.querySelector('[data-bar]');
  const done = list.querySelector('[data-done]');
  const update = () => {
    const n = boxes.filter((b) => b.checked).length;
    count.textContent = n;
    bar.style.width = `${(n / boxes.length) * 100}%`;
    done.hidden = n !== boxes.length;
  };
  boxes.forEach((b) => b.addEventListener('change', update));
  list.querySelector('[data-reset]')?.addEventListener('click', () => { boxes.forEach((b) => { b.checked = false; }); update(); boxes[0]?.focus(); });
  update();
});

/* ---------- Lesson knowledge checks ---------- */
$$('[data-kc]').forEach((form) => {
  const msg = lang === 'es'
    ? { ok: 'Correcto.', no: 'No es la mejor respuesta.', pick: 'Elige una respuesta.', score: (a, b) => `${a} de ${b} correctas.` }
    : { ok: 'Correct.', no: 'Not the best answer.', pick: 'Choose an answer.', score: (a, b) => `${a} of ${b} correct.` };
  let summary = form.querySelector('[data-score]');
  if (!summary) {
    summary = document.createElement('p');
    summary.setAttribute('data-score', '');
    summary.setAttribute('role', 'status');
    summary.className = 'small';
    form.append(summary);
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const sets = $$('fieldset', form);
    let right = 0;
    sets.forEach((fs) => {
      const answer = Number(fs.dataset.answer);
      const chosen = fs.querySelector('input:checked');
      const fb = fs.querySelector('[data-feedback]');
      const verdict = fs.querySelector('[data-verdict]');
      $$('.option', fs).forEach((o) => o.classList.remove('is-correct', 'is-wrong'));
      fb.hidden = false;
      if (!chosen) {
        fb.className = 'feedback feedback--wrong';
        verdict.textContent = msg.pick;
        fb.querySelector('span').hidden = true;
        return;
      }
      fb.querySelector('span').hidden = false;
      const ok = Number(chosen.value) === answer;
      if (ok) right++;
      chosen.closest('.option').classList.add(ok ? 'is-correct' : 'is-wrong');
      if (!ok) fs.querySelectorAll('.option')[answer].classList.add('is-correct');
      fb.className = `feedback feedback--${ok ? 'correct' : 'wrong'}`;
      verdict.textContent = ok ? msg.ok : msg.no;
    });
    summary.textContent = msg.score(right, sets.length);
  });
});

/* ---------- Scenarios ---------- */
$$('[data-scenario]').forEach((sc) => {
  const buttons = $$('[data-choice]', sc);
  const fbWrap = sc.querySelector('.scenario__feedback');
  const take = sc.querySelector('[data-takeaway]');
  buttons.forEach((b) => b.addEventListener('click', () => {
    buttons.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    fbWrap.hidden = false;
    $$('[data-fb]', fbWrap).forEach((d) => { d.hidden = d.dataset.fb !== b.dataset.choice; });
    take.hidden = false;
  }));
});

/* ---------- Share ---------- */
$$('[data-share]').forEach((box) => {
  const url = location.href.split('#')[0];
  const title = box.dataset.title || document.title;
  const wa = box.querySelector('[data-wa]');
  const fb = box.querySelector('[data-fb]');
  if (wa) wa.href = `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;
  if (fb) fb.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const copy = box.querySelector('[data-copy]');
  if (copy) {
    const label = copy.querySelector('span');
    const original = label.textContent;
    copy.addEventListener('click', async () => {
      try {
        if (navigator.share && matchMedia('(pointer: coarse)').matches) {
          await navigator.share({ title, url });
          return;
        }
        await navigator.clipboard.writeText(url);
        label.textContent = copy.dataset.copied;
        setTimeout(() => { label.textContent = original; }, 2500);
      } catch { /* user cancelled or clipboard unavailable */ }
    });
  }
});
