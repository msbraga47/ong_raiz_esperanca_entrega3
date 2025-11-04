// spa.js - simple hash router that injects templates and handles links
(function(window, document){
  const app = document.getElementById('app');

  function parsePath(){
    const hash = location.hash || '#/';
    const justHash = hash.replace('#','');
    const [path, queryString] = justHash.split('?');
    const query = {};
    if(queryString){
      queryString.split('&').forEach(pair=>{
        const [k,v] = pair.split('=');
        query[k]=decodeURIComponent(v||'');
      });
    }
    return { path, query };
  }

  function render(){
    const { path, query } = parsePath();
    const template = window.PAGES[path] || `<h2>404 — Página não encontrada</h2>`;
    // wrap in grid container to keep layout consistent
    app.innerHTML = `<div class="grid">${template}</div>`;
    app.focus();
    // after injection, initialize UI behaviors
    if(window.initUI) window.initUI();
    // attach donation form validation if present
    if(window.attachDonationValidation) window.attachDonationValidation();
    // attach generic form validation for forms with id form-cadastro
    if(window.attachFormValidation) window.attachFormValidation();
  }

  window.addEventListener('hashchange', render);
  window.addEventListener('load', render);

  // progressive enhancement: handle clicks on internal anchors
  document.body.addEventListener('click', function(e){
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    // default hash change will trigger render
  });

  // burger menu toggle
  document.addEventListener('DOMContentLoaded', function(){
    const burger = document.querySelector('.burger');
    const menu = document.getElementById('menu-list');
    if(burger && menu){
      burger.addEventListener('click', function(){
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
        if(menu.style.display === 'flex' || menu.style.display === 'block') menu.style.display = 'none';
        else menu.style.display = 'flex';
      });
    }
  });

})(window, document);
