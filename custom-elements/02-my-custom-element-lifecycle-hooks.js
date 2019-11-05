class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    console.log('> Constructor');
  }

  connectedCallback() {
    console.log('> connectedCallback');
  }

  disconnectedCallback() {
    console.log('> disconnectedCallback');
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    console.log(`> ATTR: ${attrName} has changed from "${oldValue}" to "${newValue}"`);
  }

  static get observedAttributes() {
    return ['name', 'surname'];
  }
}

customElements.define('my-custom-element', MyCustomElement);

// <my-custom-element></my-custom-element>
// <my-custom-element name="Sema"></my-custom-element>
// <my-custom-element name="Sema" age="18"></my-custom-element>
// $0.setAttribute('surname', 'García')