
(function (window) {
  'use strict';

  function initAdmissionWizard() {
    let currentStep = 1;
    const totalSteps = 4;

    const prevStepBtn = document.getElementById('prevStepBtn');
    const nextStepBtn = document.getElementById('nextStepBtn');
    const wizardFooter = document.getElementById('wizardFooter');
    const showToast = window.ToastModule?.showToast;

    if (!nextStepBtn) return;

    function updateStepView() {
      // Hide all step panels
      document.querySelectorAll('.wizard-step-pane').forEach(function (p) {
        p.style.display = 'none';
      });
      const activePane = document.getElementById('stepPane' + currentStep);
      if (activePane) activePane.style.display = 'block';

      // Update progress indicators
      for (let i = 1; i <= totalSteps; i++) {
        const ind = document.getElementById('stepIndicator' + i);
        if (!ind) continue;
        if (i < currentStep) {
          ind.className = 'step-indicator completed';
        } else if (i === currentStep) {
          ind.className = 'step-indicator active';
        } else {
          ind.className = 'step-indicator';
        }
      }

      // Update Action Buttons
      if (currentStep === 1) {
        if (prevStepBtn) prevStepBtn.style.visibility = 'hidden';
        nextStepBtn.textContent = 'Next: Choose Curriculum →';
      } else if (currentStep === 2) {
        if (prevStepBtn) prevStepBtn.style.visibility = 'visible';
        nextStepBtn.textContent = 'Next: Document Upload →';
      } else if (currentStep === 3) {
        if (prevStepBtn) prevStepBtn.style.visibility = 'visible';
        nextStepBtn.textContent = 'Next: Review & Payment →';
      } else if (currentStep === 4) {
        if (prevStepBtn) prevStepBtn.style.visibility = 'visible';
        nextStepBtn.textContent = 'Complete Registration (₹3,000) ✓';

        const sName = document.getElementById('studentName')?.value || 'Ananya Sharma';
        const pPhone = document.getElementById('parentPhone')?.value || '+91 95572 91888';
        const grade = document.getElementById('targetGrade')?.value || 'Grade 7';
        const board = document.querySelector('.board-card.selected')?.getAttribute('data-board') || 'CBSE';

        const revName = document.getElementById('reviewStudentName');
        const revGrade = document.getElementById('reviewGradeBoard');
        const revPhone = document.getElementById('reviewParentPhone');

        if (revName) revName.textContent = sName;
        if (revGrade) revGrade.textContent = grade + ' • ' + board;
        if (revPhone) revPhone.textContent = pPhone;
      }
    }

    nextStepBtn.addEventListener('click', function () {
      if (currentStep === 1) {
        const name = document.getElementById('studentName')?.value.trim();
        const email = document.getElementById('parentEmail')?.value.trim();
        const phone = document.getElementById('parentPhone')?.value.trim();
        if (!name || !email || !phone) {
          if (showToast) showToast('Please fill in Student Name, Parent Email, and Phone Number.', false);
          return;
        }
        currentStep = 2;
        updateStepView();
      } else if (currentStep === 2) {
        currentStep = 3;
        updateStepView();
      } else if (currentStep === 3) {
        currentStep = 4;
        updateStepView();
      } else if (currentStep === 4) {
        nextStepBtn.textContent = 'Processing Registration...';
        nextStepBtn.disabled = true;

        setTimeout(function () {
          const randomCode = 'EG-2027-' + Math.floor(10000 + Math.random() * 90000);
          const refElem = document.getElementById('generatedRefCode');
          if (refElem) refElem.textContent = randomCode;

          document.querySelectorAll('.wizard-step-pane').forEach(function (p) {
            p.style.display = 'none';
          });
          const successPane = document.getElementById('stepPaneSuccess');
          if (successPane) successPane.style.display = 'block';
          if (wizardFooter) wizardFooter.style.display = 'none';

          if (showToast) showToast('Application registered successfully!', true);
        }, 700);
      }
    });

    if (prevStepBtn) {
      prevStepBtn.addEventListener('click', function () {
        if (currentStep > 1) {
          currentStep--;
          updateStepView();
        }
      });
    }

    // Board Selection Cards
    const boardCards = document.querySelectorAll('.board-card');
    boardCards.forEach(function (card) {
      card.addEventListener('click', function () {
        boardCards.forEach(function (c) { c.classList.remove('selected'); });
        card.classList.add('selected');
      });
    });

    // Simulated File Uploads
    const dropzonePhoto = document.getElementById('dropzonePhoto');
    const photoChip = document.getElementById('photoChip');
    if (dropzonePhoto && photoChip) {
      dropzonePhoto.addEventListener('click', function () {
        photoChip.style.display = 'inline-flex';
        if (showToast) showToast('Photo uploaded: applicant_photo.jpg (1.2 MB)');
      });
    }

    const dropzoneReport = document.getElementById('dropzoneReport');
    const reportChip = document.getElementById('reportChip');
    if (dropzoneReport && reportChip) {
      dropzoneReport.addEventListener('click', function () {
        reportChip.style.display = 'inline-flex';
        if (showToast) showToast('Marksheet uploaded: transcript_previous.pdf (2.4 MB)');
      });
    }

    // Promo Code Logic
    const applyCouponBtn = document.getElementById('applyCouponBtn');
    const couponInput = document.getElementById('couponInput');
    const reviewDiscountText = document.getElementById('reviewDiscountText');
    const reviewNetPayable = document.getElementById('reviewNetPayable');

    if (applyCouponBtn && couponInput) {
      applyCouponBtn.addEventListener('click', function () {
        const code = couponInput.value.trim().toUpperCase();
        if (code === 'EARLYBIRD' || code === 'MERIT2027') {
          if (reviewDiscountText) reviewDiscountText.textContent = '₹1,000 Early Bird Waiver (33% off)';
          if (reviewNetPayable) reviewNetPayable.textContent = '₹2,000';
          if (showToast) showToast('Coupon applied: ₹1,000 registration fee waiver!');
        } else if (code) {
          if (showToast) showToast('Invalid code. Try "EARLYBIRD" or "MERIT2027"', false);
        }
      });
    }

    const receiptBtn = document.getElementById('receiptDownloadBtn');
    if (receiptBtn) {
      receiptBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.print();
      });
    }
  }

  // Export to namespace
  window.WizardModule = { initAdmissionWizard };
})(window);
