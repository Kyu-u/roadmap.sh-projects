    // ── Step 1: Attach the datepicker to the input ──────────
    const picker = datepicker('#birthdate', {
      maxDate: new Date(),       // prevent future dates
      formatter(input, date) {
        // Show date as DD/MM/YYYY in the input box
        const d = String(date.getDate()).padStart(2, '0');
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const y = date.getFullYear();
        input.value = `${d}/${m}/${y}`;
      },
    });

    // ── Step 2: Calculate on button click ──────────────────
    document.getElementById('calc-btn').addEventListener('click', () => {
      const errorEl  = document.getElementById('error-msg');
      const resultEl = document.getElementById('result');

      if (!picker.dateSelected) {
        errorEl.textContent = 'Please select your birth date first.';
        resultEl.classList.remove('visible');
        return;
      }
      errorEl.textContent = '';

      // ── Step 3: Use Luxon to compute exact age ──────────
      const { DateTime } = luxon;
      const birth = DateTime.fromJSDate(picker.dateSelected);
      const today = DateTime.now();
      const diff  = today.diff(birth, ['years', 'months', 'days']).toObject();

      const years  = Math.floor(diff.years);
      const months = Math.floor(diff.months);
      const days   = Math.floor(diff.days);

      // ── Step 4: Show result sentence ────────────────────
      resultEl.innerHTML =
      `You are <strong>${years} years ${months} months ${days} days</strong> old`;
      resultEl.classList.add('visible');
    });