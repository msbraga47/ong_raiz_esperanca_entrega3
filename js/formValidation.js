// formValidation.js - donation form + generic form behaviors + localStorage draft
(function(window, document){
  const DONATION_KEY = 'raiz_donation_draft_v1';

  function showError(input, message){
    if(!input) return;
    input.classList.add('invalid');
    const err = document.getElementById('err-' + input.id) || document.getElementById('err-d-' + input.id);
    if(err) err.textContent = message;
    input.setAttribute('aria-invalid','true');
  }
  function clearError(input){
    if(!input) return;
    input.classList.remove('invalid');
    const err = document.getElementById('err-' + input.id) || document.getElementById('err-d-' + input.id);
    if(err) err.textContent = '';
    input.removeAttribute('aria-invalid');
  }

  function saveDraft(key, data){
    try{ localStorage.setItem(key, JSON.stringify(data)); }catch(e){}
  }
  function loadDraft(key){
    try{ const raw = localStorage.getItem(key); return raw? JSON.parse(raw): null; }catch(e){ return null; }
  }
  // Donation validation and draft
  function attachDonation(){
    const form = document.getElementById('form-doacao');
    if(!form) return;
    // load draft
    const draft = loadDraft(DONATION_KEY);
    if(draft){
      if(draft.nome) form.querySelector('#d-nome').value = draft.nome;
      if(draft.email) form.querySelector('#d-email').value = draft.email;
      if(draft.valor) form.querySelector('#d-valor').value = draft.valor;
      if(draft.metodo) form.querySelector('#d-metodo').value = draft.metodo;
    }
    form.addEventListener('input', function(){
      const data = {
        nome: form.querySelector('#d-nome').value,
        email: form.querySelector('#d-email').value,
        valor: form.querySelector('#d-valor').value,
        metodo: form.querySelector('#d-metodo').value
      };
      saveDraft(DONATION_KEY, data);
    });
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // clear
      form.querySelectorAll('input, select').forEach(clearError);
      let valid = true;
      const nome = form.querySelector('#d-nome');
      const email = form.querySelector('#d-email');
      const valor = form.querySelector('#d-valor');

      if(!nome.value || nome.value.trim().length < 3){
        showError(nome, 'Informe um nome válido (mínimo 3 caracteres).'); if(valid) nome.focus(); valid=false;
      }
      if(!email.value || !email.checkValidity()){
        showError(email, 'Informe um e-mail válido.'); if(valid) email.focus(); valid=false;
      }
      if(!valor.value || Number(valor.value) <= 0){
        showError(valor, 'Informe um valor de doação maior que zero.'); if(valid) valor.focus(); valid=false;
      }

      if(!valid){
        if(window.showToast) window.showToast('Corrija os campos destacados.', 3000);
        return;
      }

      // success -> clear draft, show toast, reset
      try{ localStorage.removeItem(DONATION_KEY); }catch(e){}
      if(window.showToast) window.showToast('Doação simulada registrada. Obrigado!', 3500);
      form.reset();
    });
  }

  // generic attachment: look for #form-cadastro if present (reuse earlier module if exists)
  function attachCadastroGeneric(){
    // kept for compatibility; real validation handled in separate module if needed
  }

  // Expose attach functions
  window.attachDonationValidation = attachDonation;
  window.attachFormValidation = attachCadastroGeneric;

})(window, document);
