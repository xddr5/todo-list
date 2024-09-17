import { createElement } from '../framework/render.js';

function createTaskListTemplate(listName, tasks) {
  return (
    `<ul class="${listName}-list">
        <h3 class="${listName}">${listName}</h3>
        ${tasks.map(task => `<li>${task}</li>`).join('')}
    </ul>`
  );
}

export default class TaskListComponent {
  constructor(listName, tasks) {
    this.listName = listName;
    this.tasks = tasks;
  }

  getTemplate() {
    return createTaskListTemplate(this.listName, this.tasks);
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
