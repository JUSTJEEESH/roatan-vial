// 50-question road challenge. Runs entirely in the browser; nothing is stored or sent.

const root = document.querySelector('[data-quiz]');
const dataEl = document.getElementById('quiz-data');

if (root && dataEl) {
  const { ui, questions } = JSON.parse(dataEl.textContent);
  const total = questions.length;
  let i = 0;
  let answers = [];

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function intro() {
    root.innerHTML = `
      <p class="quiz__q">${total} ${ui.question.toLowerCase()}s</p>
      <button class="btn btn--solid" type="button" data-start><span>${esc(ui.start)}</span></button>`;
    root.querySelector('[data-start]').addEventListener('click', () => { i = 0; answers = []; render(); });
  }

  function render() {
    const q = questions[i];
    const pct = (i / total) * 100;
    root.innerHTML = `
      <div class="quiz__top"><span>${esc(ui.question)} <strong>${i + 1}</strong> ${esc(ui.of)} ${total}</span><span>${answers.filter((a) => a.ok).length} ✓</span></div>
      <div class="quiz__bar" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${i}" aria-label="${esc(ui.question)} ${i + 1} ${esc(ui.of)} ${total}"><span style="width:${pct}%"></span></div>
      <form data-form novalidate>
        <fieldset style="border:0;padding:0;margin:0">
          <legend class="quiz__q" tabindex="-1">${esc(q.q)}</legend>
          ${q.o.map((o, k) => `<label class="option"><input type="radio" name="q" value="${k}"><span>${esc(o)}</span></label>`).join('')}
        </fieldset>
        <div class="feedback" data-feedback hidden role="status"></div>
        <div class="quiz__nav">
          <span></span>
          <button class="btn btn--solid" type="submit" data-action><span>${esc(ui.check)}</span></button>
        </div>
      </form>`;
    const form = root.querySelector('[data-form]');
    const fb = root.querySelector('[data-feedback]');
    const action = root.querySelector('[data-action]');
    let checked = false;
    root.querySelector('legend').focus({ preventScroll: true });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (checked) { next(); return; }
      const chosen = form.querySelector('input:checked');
      if (!chosen) {
        fb.hidden = false;
        fb.className = 'feedback feedback--wrong';
        fb.textContent = ui.choose;
        return;
      }
      checked = true;
      const pick = Number(chosen.value);
      const ok = pick === q.a;
      answers[i] = { pick, ok };
      const opts = form.querySelectorAll('.option');
      opts[q.a].classList.add('is-correct');
      if (!ok) opts[pick].classList.add('is-wrong');
      form.querySelectorAll('input').forEach((inp) => { inp.disabled = true; });
      fb.hidden = false;
      fb.className = `feedback feedback--${ok ? 'correct' : 'wrong'}`;
      fb.innerHTML = `<strong>${esc(ok ? ui.correct : ui.wrong)}</strong>${esc(q.e)}${q.u ? ` <a href="${q.u}">${esc(ui.learn)}: ${esc(q.lt)}</a>` : ''}`;
      action.querySelector('span').textContent = i === total - 1 ? ui.finish : ui.next;
      action.focus();
    });
  }

  function next() {
    if (i < total - 1) { i++; render(); } else result();
  }

  function result() {
    const right = answers.filter((a) => a.ok).length;
    const pct = right / total;
    const band = pct >= 0.9 ? ui.bands[2] : pct >= 0.7 ? ui.bands[1] : ui.bands[0];
    const wrong = questions.map((q, k) => ({ q, a: answers[k], k })).filter((x) => !x.a.ok);
    root.innerHTML = `
      <p class="eyebrow">${esc(ui.result)}</p>
      <p class="quiz__score" tabindex="-1">${right}<span style="font-size:.4em;color:var(--gray)"> / ${total}</span></p>
      <p class="quiz__q" style="margin-top:.5rem">${esc(ui.score)}. ${esc(band)}</p>
      <div class="quiz__review">
        <h2 style="font-size:var(--fs-lg)">${esc(ui.review)}</h2>
        ${wrong.length ? `<ol>${wrong.map(({ q, a }) => `<li><p><strong>${esc(q.q)}</strong></p>
          <p class="your">${esc(ui.yours)}: ${esc(q.o[a.pick])}</p>
          <p class="right">${esc(ui.right)}: ${esc(q.o[q.a])}</p>
          <p class="small">${esc(q.e)}${q.u ? ` <a href="${q.u}">${esc(ui.learn)}: ${esc(q.lt)}</a>` : ''}</p></li>`).join('')}</ol>` : `<p>${esc(ui.perfect)}</p>`}
      </div>
      <div class="quiz__nav"><button class="btn btn--solid" type="button" data-retake><span>${esc(ui.retake)}</span></button></div>`;
    root.querySelector('.quiz__score').focus();
    root.querySelector('[data-retake]').addEventListener('click', () => { i = 0; answers = []; render(); });
  }

  intro();
}
