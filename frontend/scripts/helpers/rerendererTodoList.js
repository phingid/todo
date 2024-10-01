import TodoItem from "../components/TodoItem.js";
import todoRepostory from "../services/repositories/todoRepository.js";

const rerendererTodoList = async () => {
    const todoListNode = document.getElementById('todoList');

    if (todoListNode) {
        todoListNode.innerHTML = '';

        let todoList = await todoRepostory.getTodolist();

        todoList.forEach(todoItem => {
            if (todoItem.title) {
                todoListNode.append(TodoItem(todoItem.title));
            }
        });
    }
}

export default rerendererTodoList;