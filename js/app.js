
(function (window) {
  'use strict';

  function initApp() {
    const modalModule = window.ModalModule || {};
    const openModal = modalModule.openModal;
    const closeModal = modalModule.closeModal;
    const attachLightDismiss = modalModule.attachLightDismiss;

    const admissionModal = document.getElementById('admissionModal');
    const tourModal = document.getElementById('tourModal');

    const openWizardBtn = document.getElementById('openWizardBtn');
    const headerApplyBtn = document.getElementById('headerApplyBtn');
    const closeWizardBtn = document.getElementById('closeWizardBtn');

    const openTourBtn = document.getElementById('openTourBtn');
    const bannerTourBtn = document.getElementById('bannerTourBtn');
    const closeTourBtn = document.getElementById('closeTourBtn');

    // Attach Light Dismiss (Click outside to close)
    if (attachLightDismiss) {
      if (admissionModal) attachLightDismiss(admissionModal);
      if (tourModal) attachLightDismiss(tourModal);
    }

    // Bind Wizard Triggers
    if (openWizardBtn && admissionModal && openModal) {
      openWizardBtn.addEventListener('click', function () { openModal(admissionModal); });
    }
    if (headerApplyBtn && admissionModal && openModal) {
      headerApplyBtn.addEventListener('click', function () { openModal(admissionModal); });
    }
    if (closeWizardBtn && admissionModal && closeModal) {
      closeWizardBtn.addEventListener('click', function () { closeModal(admissionModal); });
    }

    // Bind Virtual Tour Triggers
    if (openTourBtn && tourModal && openModal) {
      openTourBtn.addEventListener('click', function () { openModal(tourModal); });
    }
    if (bannerTourBtn && tourModal && openModal) {
      bannerTourBtn.addEventListener('click', function () { openModal(tourModal); });
    }
    if (closeTourBtn && tourModal && closeModal) {
      closeTourBtn.addEventListener('click', function () { closeModal(tourModal); });
    }

    // Initialize Submodules
    if (window.FeeCalcModule?.initFeeCalculator) {
      window.FeeCalcModule.initFeeCalculator();
    }
    if (window.WizardModule?.initAdmissionWizard) {
      window.WizardModule.initAdmissionWizard();
    }
    if (window.TourModule?.initVirtualTour) {
      window.TourModule.initVirtualTour();
    }
  }

  // Boot on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

  window.AppModule = { initApp };
})(window);
