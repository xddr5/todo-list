import HeaderComponent from './view/header-component.js';
import AddingTaskFormComponent from './view/add-task-component.js';
import TaskBoardComponent from './view/tasks-area-component.js';
import TaskListComponent from './view/task-list-component.js';
import TaskComponent from './view/task-component.js';
import { render, RenderPosition } from './framework/render.js';

const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.adding-task');
const taskAreaContainer = document.querySelector(".list");

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);

render(new AddingTaskFormComponent(), formContainer);

render(new TaskBoardComponent(), taskAreaContainer);

const backlogTasks = ['Выучить JS', 'Выучить React', 'Сделать домашку'];
const inProcessTasks = ['Выпить смузи', 'Попить воды'];
const doneTasks = ['Позвонить маме', 'Погладить кота'];
const trashcanTasks = ['Сходить погулять', 'Прочитать Войну и Мир'];

render(new TaskListComponent('Бэклог', backlogTasks), taskAreaContainer);
render(new TaskListComponent('В процессе', inProcessTasks), taskAreaContainer);
render(new TaskListComponent('Готово', doneTasks), taskAreaContainer);
render(new TaskListComponent('Корзина', trashcanTasks), taskAreaContainer);
