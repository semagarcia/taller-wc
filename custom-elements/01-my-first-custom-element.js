class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    console.log('> Constructor');
  }
}

customElements.define('my-custom-element', MyCustomElement);