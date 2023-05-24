import "./sport-news.js";

class SportnewsList extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.
    }
    connectedCallback() {

    }
    disconnectedCallback() {

    }
    attributeChangedCallback(attrName, oldVal, newVal) {

    }
}

window.customElements.define('sport-newslist', SportnewsList);