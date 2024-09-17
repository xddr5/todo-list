import {createElement} from '../framework/render.js';


function createTaskAreaComponentTemplate() {
    return (
        `<section class="list">
        </section>`
           );
}


export default class TaskAreaComponent {
  getTemplate() {
    return createTaskAreaComponentTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}