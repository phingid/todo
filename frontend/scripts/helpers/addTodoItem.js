import rerendererTodoList from "./rerendererTodoList.js";
import todoRepostory from "../services/repositories/todoRepository.js";

const addTodoItem = () => {
    const buttonTodoAdd = document.getElementById('buttonTodoAdd');
    const fieldTodo = document.getElementById('fieldTodo');

    buttonTodoAdd.addEventListener('click', async () => {
        if (fieldTodo.value.length > 0) {
            const data = {
                title: fieldTodo.value,
            }

            await todoRepostory.createTodoItem(data.title);
            fieldTodo.value = '';
            rerendererTodoList();
        }
    })
}

export default addTodoItem;