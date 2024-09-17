import { createElement } from '../framework/render.js';

function createAddingTaskFormTemplate() {
  return (
    `<form>
        <h2>Новая задача</h2>
        <label for="name"></label>
        <input type="text" id="name" class="input-text" placeholder="Название задачи">
        <button class="input-button">Добавить</button>
    </form>`
  );
}

export default class AddingTaskFormComponent {
  getTemplate() {
    return createAddingTaskFormTemplate();
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
