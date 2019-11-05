export default class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<h1>I am a very cool WebComponent 😎!</h1>`;
  }
}

customElements.define('my-custom-element', MyCustomElement);