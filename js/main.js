// main.js - UI helpers (toasts, modals) and init function
(function(window, document){
  const toastRoot = document.getElementById('toast');

  function showToast(text, duration=3000){
    if(!toastRoot) return;
    const item = document.createElement('div');
    item.className = 'toast-item';
    item.textContent = text;
    toastRoot.appendChild(item);
    setTimeout(()=>{ item.style.opacity = '0'; item.addEventListener('transitionend', ()=> item.remove()); }, duration);
  }

  // modal handlers delegated
  function initModals(){
    document.body.addEventListener('click', function(e){
      const openBtn = e.target.closest('[data-modal]');
      if(openBtn){
        const id = openBtn.getAttribute('data-modal');
        const modal = document.getElementById(id);
        if(modal){ modal.setAttribute('aria-hidden','false'); modal.style.display='flex'; }
      }
      if(e.target.matches('.modal-close') || e.target.closest('.modal-close')){
        const modal = e.target.closest('.modal');
        if(modal){ modal.setAttribute('aria-hidden','true'); modal.style.display='none'; }
      }
    });

    // close on outside click
    document.addEventListener('click', function(e){
      document.querySelectorAll('.modal[aria-hidden="false"]').forEach(modal=>{
        if(e.target === modal) { modal.setAttribute('aria-hidden','true'); modal.style.display='none'; }
      });
    });
  }

  // initUI to be called after template injection
  window.initUI = function(){
    initModals();
    // attach donation validation if present
    if(typeof window.attachDonationValidation === 'function') window.attachDonationValidation();
    // attach form validation for cadastro if implemented
    if(typeof window.attachFormValidation === 'function') window.attachFormValidation();
    // attach buttons with data-toast
    document.querySelectorAll('[data-toast]').forEach(btn=>{
      btn.addEventListener('click', function(){
        const text = this.getAttribute('data-toast') || 'Feito';
        showToast(text, 3000);
      });
    });
  };

  window.showToast = showToast;

  // accessibility: close modals with Escape
  document.addEventListener('keyup', function(e){
    if(e.key === 'Escape'){
      document.querySelectorAll('.modal[aria-hidden="false"]').forEach(m=> { m.setAttribute('aria-hidden','true'); m.style.display='none'; });
    }
  });

})(window, document);
