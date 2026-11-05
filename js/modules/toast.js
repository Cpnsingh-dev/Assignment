
(function (window) {
  'use strict';

  let toastTimeout = null;

  function showToast(message, isSuccess = true) {
    const toast = document.getElementById('toastNotification');
    const toastMessage = document.getElementById('toastMessage');
    if (!toast || !toastMessage) return;

    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }

    toastMessage.textContent = message;
    toast.className = 'toast show ' + (isSuccess ? 'success' : '');

    toastTimeout = setTimeout(() => {
      toast.className = 'toast';
    }, 3200);
  }

  // Export to namespace
  window.ToastModule = { showToast };
})(window);
