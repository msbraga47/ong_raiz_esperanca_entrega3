# 🌱 Instituto Raiz da Esperança

> Plataforma web completa desenvolvida como projeto acadêmico para gestão e engajamento de ONGs, integrando HTML5, CSS3 e JavaScript (SPA).

---

## 🌐 Demonstração Online

Acesse o projeto publicado no GitHub Pages:  
👉 [https://msbraga47.github.io/ong_raiz_esperanca](https://msbraga47.github.io/ong_raiz_esperanca_entrega3)

---

## 🧩 Sobre o Projeto

O **Instituto Raiz da Esperança** é uma ONG fictícia criada para representar o impacto social e ambiental através de tecnologia.  
O projeto foi desenvolvido em **três etapas acadêmicas**, aplicando conceitos modernos de **Front-End**, **usabilidade**, **responsividade** e **interatividade**.

Essa plataforma permite:
- Exibir informações institucionais;
- Divulgar projetos sociais e ambientais;
- Engajar voluntários e apoiadores;
- Realizar doações online simuladas;
- Demonstrar domínio técnico de desenvolvimento web completo.

---

## 📚 Etapas do Desenvolvimento

### 🏗️ Entrega I — Estruturação (HTML5)
- Criação de páginas semânticas: `index.html`, `projetos.html` e `cadastro.html`
- Estrutura completa em HTML5;
- Formulário com validação nativa;
- Hierarquia de títulos e imagens adequadas.

### 🎨 Entrega II — Estilização e Leiautes (CSS3)
- Design system com:
  - 8 cores (primárias, secundárias e neutras);
  - Hierarquia tipográfica (5 tamanhos de fonte);
  - Sistema de espaçamento modular (8px → 64px);
- Layout com **Grid 12 colunas** e **Flexbox**;
- Responsividade (5 breakpoints);
- Componentes interativos (cards, botões, modais e alerts).

### ⚙️ Entrega III — Interatividade e Funcionalidades (JavaScript)
- Transformação do site em uma **Single Page Application (SPA)**;
- Sistema de templates dinâmicos com manipulação de DOM;
- Validação de formulário de doação com feedback visual;
- Armazenamento local (localStorage) para simular persistência;
- Navegação sem recarregar página (roteamento SPA);
- Componentes dinâmicos: alertas, modais e mensagens de sucesso.

---

## 🧱 Estrutura de Pastas

ong_raiz_esperanca_full/
│
├── index.html
│
├── css/
│ ├── base.css
│ ├── layout.css
│ └── components.css
│
├── js/
│ ├── main.js
│ ├── spa.js
│ ├── pages.js
│ └── formValidation.js
│
├── imagens/
│ └── logo.svg
│
└── README.md

---

## 🚀 Como Executar o Projeto

1. **Baixe o projeto**  
   - Via GitHub: clique em “Code” > “Download ZIP”  
   - Ou clone direto:
     ```bash
     git clone https://github.com/seuusuario/ong_raiz_esperanca_full.git
     ```

2. **Abra a pasta no VS Code**  
   ```bash
   cd ong_raiz_esperanca_full

3. **Execute o site**
   - Basta abrir o arquivo index.html no navegador.
   - Navegue pelos links (Home, Projetos, Doações, Sobre...) sem recarregar a página.

4. **Teste a funcionalidade de doação**
   - Preencha o formulário na aba Doações.
   - Verifique as validações em tempo real e o alerta de sucesso.

---

## 🧠 Tecnologias Utilizadas
- Tecnologia	Descrição
- HTML5	Estrutura semântica das páginas
- CSS3 (Grid/Flexbox)	Responsividade e layout
- JavaScript (ES6+)	Interatividade e SPA
- LocalStorage	Armazenamento de dados simulados
- Git & GitHub	Controle de versão e hospedagem
- VS Code	Ambiente de desenvolvimento

---

## 🧰 Como Publicar no GitHub
1. **Abra o terminal dentro da pasta do projeto:**
  ```bash
  git init
  git add .
  git commit -m "Versão final do projeto ONG Raiz da Esperança"
```

2. **Crie um repositório público no GitHub chamado ong_raiz_esperanca_entrega3.**

3. **Conecte e envie:**
  ```bash
  git branch -M main
  git remote add origin https://github.com/seuusuario/ong_raiz_esperanca_full.git
  git push -u origin main
```

**Se aparecer o erro:**
  ``` bash
  ! [rejected] main -> main (fetch first)
```

**corrija com:**
  ```bash
  git pull origin main --allow-unrelated-histories
  git push -u origin main
```

---

## 💚 Autor
**Matheus de Souza Braga**
- Desenvolvedor Front-End | Estudante de Tecnologia
- 📍 Embu das Artes - SP
- 💻 Projeto desenvolvido para fins acadêmicos.

---

## 📄 Licença
- Este projeto é de uso livre para fins acadêmicos e educacionais.
- © 2025 Instituto Raiz da Esperança.
