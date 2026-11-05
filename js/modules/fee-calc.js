
(function (window) {
  'use strict';

  function initFeeCalculator() {
    const gradePills = document.querySelectorAll('#gradePillGroup .pill-btn');
    const gradeLabelDisplay = document.getElementById('gradeLabelDisplay');
    const feeAmountDisplay = document.getElementById('feeAmountDisplay');
    const showToast = window.ToastModule?.showToast;

    if (!gradePills.length || !gradeLabelDisplay || !feeAmountDisplay) return;

    gradePills.forEach(function (btn) {
      btn.addEventListener('click', function () {
        gradePills.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        const grade = btn.getAttribute('data-grade');
        const fee = btn.getAttribute('data-fee');

        gradeLabelDisplay.textContent = grade;
        feeAmountDisplay.textContent = fee;

        if (showToast) {
          showToast('Fee projection updated for ' + grade);
        }
      });
    });
  }

  // Export to namespace
  window.FeeCalcModule = { initFeeCalculator };
})(window);
