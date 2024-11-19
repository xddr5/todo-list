import { AbstractComponent } from "../framework/view/abstract-component.js";

function createTaskComponentTemplate(task) {
  return `<li class="tasks__item" id="task-${task.id}">${task.title}</li>`;
}

export default class TaskComponent extends AbstractComponent {
  constructor({ task }) {
    super();
    this.task = task;
    this.#afterCreateElement();
  }

  get template() {
    return createTaskComponentTemplate(this.task);
  }

  #afterCreateElement() {
    this.#makeTaskDraggable();
  }

  #makeTaskDraggable() {
    this.element.setAttribute("draggable", true);

    this.element.addEventListener("dragstart", (event) => {
      this.element.classList.add("dragging");
      event.dataTransfer.setData("text/plain", this.task.id);
    });

    this.element.addEventListener("dragend", () => {
      this.element.classList.remove("dragging");
    });
  }

  static insertTask(taskElement, afterElement, container) {
    if (afterElement === null) {
      container.appendChild(taskElement);
    } else {
      container.insertBefore(taskElement, afterElement);
    }
  }

  static getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.tasks__item')];
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 4;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }
}
