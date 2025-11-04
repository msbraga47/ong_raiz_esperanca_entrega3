// pages.js - templates for SPA pages
window.PAGES = (function(){
  const home = `
    <section aria-labelledby="home-title" class="col-12">
      <h1 id="home-title">Instituto Raiz da Esperança</h1>
      <p>Transformando vidas por meio de educação, sustentabilidade e engajamento comunitário.</p>
      <div class="card-grid">
        <div class="card">
          <h3>Missão</h3>
          <p>Oferecer oportunidades de educação e desenvolvimento social.</p>
        </div>
        <div class="card">
          <h3>Visão</h3>
          <p>Comunidades fortalecidas e sustentáveis no Brasil.</p>
        </div>
      </div>
      <p><a class="btn" href="#/projetos" data-link>Ver projetos</a> <a class="btn outline" href="#/doacao" data-link>Fazer doação</a></p>
    </section>
  `;

  const projetos = `
    <section aria-labelledby="proj-title" class="col-12">
      <h1 id="proj-title">Projetos</h1>
      <div class="card-grid">
        <article class="card project-card">
          <h3>Educação para o Futuro <span class="badge">Educação</span></h3>
          <p>Reforço escolar e oficinas de informática.</p>
          <div class="card-actions"><button class="btn small" data-toast="Projeto salvo!">Salvar</button></div>
        </article>
        <article class="card project-card">
          <h3>Verde na Comunidade <span class="badge neutral">Meio Ambiente</span></h3>
          <p>Campanhas de reflorestamento e hortas comunitárias.</p>
          <div class="card-actions"><button class="btn small" data-modal="donate-modal">Apoiar</button></div>
        </article>
      </div>
      <!-- modal -->
      <div id="donate-modal" class="modal" aria-hidden="true">
        <div class="modal-content">
          <button class="modal-close" aria-label="Fechar">×</button>
          <h3>Doar para Verde na Comunidade</h3>
          <p>Doação simulada (apenas para demonstração).</p>
          <button class="btn" data-toast="Obrigado pela doação (simulado)!">Confirmar Doação</button>
        </div>
      </div>
    </section>
  `;

  const doacao = `
    <section aria-labelledby="doa-title" class="col-12">
      <h1 id="doa-title">Doação</h1>
      <div class="card">
        <p>Seu apoio mantém nossos projetos funcionando. Preencha o formulário abaixo para simular uma doação.</p>
        <form id="form-doacao" class="form" novalidate>
          <label for="nome">Nome completo *</label>
          <input id="d-nome" name="nome" type="text" required minlength="3">
          <div id="err-d-nome" class="error-message" aria-live="polite"></div>

          <label for="email">E-mail *</label>
          <input id="d-email" name="email" type="email" required>
          <div id="err-d-email" class="error-message" aria-live="polite"></div>

          <label for="valor">Valor (R$) *</label>
          <input id="d-valor" name="valor" type="number" min="1" step="0.01" required>
          <div id="err-d-valor" class="error-message" aria-live="polite"></div>

          <label for="metodo">Método</label>
          <select id="d-metodo" name="metodo">
            <option value="pix">PIX</option>
            <option value="boleto">Boleto</option>
            <option value="cartao">Cartão</option>
          </select>

          <p style="margin-top:16px;">
            <button class="btn" type="submit">Doar (simulado)</button>
            <button class="btn outline" type="reset">Limpar</button>
          </p>
        </form>
      </div>
    </section>
  `;

  const sobre = `
    <section aria-labelledby="sobre-title" class="col-12">
      <h1 id="sobre-title">Sobre a ONG</h1>
      <p>O Instituto Raiz da Esperança atua em comunidades locais oferecendo educação e ações ambientais, com foco na transparência e participação.</p>
    </section>
  `;

  const contato = `
    <section aria-labelledby="contato-title" class="col-12">
      <h1 id="contato-title">Contato</h1>
      <p>Email: contato@raizdaesperanca.org.br</p>
      <p>Telefone: (11) 4000-4000</p>
    </section>
  `;

  return {
    '/': home,
    '/projetos': projetos,
    '/doacao': doacao,
    '/sobre': sobre,
    '/contato': contato
  };
})();
