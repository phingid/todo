import TodoHeading from './components/TodoHeading.js';
import TodoCreate from "./components/TodoCreate.js";
import addTodoItem from './helpers/addTodoItem.js';
import rerendererTodoList from './helpers/rerendererTodoList.js';


(async () => {
    TodoHeading();
    TodoCreate();
    addTodoItem();
    rerendererTodoList();
})();