
(function (window) {
  'use strict';

  function initVirtualTour() {
    const tourTabs = document.querySelectorAll('.tour-tab');
    const tourViewport = document.getElementById('tourViewport');
    const tourLocationBadge = document.getElementById('tourLocationBadge');
    const tourHeadline = document.getElementById('tourHeadline');
    const tourDescription = document.getElementById('tourDescription');
    const bookVisitBtn = document.getElementById('bookPhysicalVisitBtn');
    const tourModal = document.getElementById('tourModal');
    const admissionModal = document.getElementById('admissionModal');

    const openModal = window.ModalModule?.openModal;
    const closeModal = window.ModalModule?.closeModal;
    const showToast = window.ToastModule?.showToast;

    if (!tourTabs.length || !tourViewport) return;

    tourTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tourTabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');

        const bg = tab.getAttribute('data-bg');
        const badge = tab.getAttribute('data-badge');
        const head = tab.getAttribute('data-head');
        const desc = tab.getAttribute('data-desc');

        tourViewport.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('" + bg + "')";
        if (tourLocationBadge) tourLocationBadge.textContent = badge;
        if (tourHeadline) tourHeadline.textContent = head;
        if (tourDescription) tourDescription.textContent = desc;
      });
    });

    if (bookVisitBtn && tourModal && admissionModal) {
      bookVisitBtn.addEventListener('click', function () {
        if (closeModal) closeModal(tourModal);
        if (openModal) openModal(admissionModal);
        if (showToast) showToast('Please submit details below to confirm your campus visit.');
      });
    }
  }

  // Export to namespace
  window.TourModule = { initVirtualTour };
})(window);
