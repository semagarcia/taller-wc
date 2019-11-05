customElements.define('my-buttons', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <!-- Styles -->
      <style>
        .yellow { background-color: yellow; }
        .blue { background-color: blue; }
      </style>

      <!-- Template -->
      <button class="yellow">Btn1</button>
      <button class="blue">Btn2</button>
    `;
  }
});