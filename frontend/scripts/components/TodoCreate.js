const TodoCreate = () => {
    const app = document.getElementById('app');

    const todoCreateNode = document.createElement('section');
    todoCreateNode.classList.add('todo__create');

    const todoField = document.createElement('input');
    todoField.type = 'text';
    todoField.id = 'fieldTodo';

    const todoButtonCreate = document.createElement('button');
    todoButtonCreate.type = 'button';
    todoButtonCreate.id = 'buttonTodoAdd';
    todoButtonCreate.classList.add('button');

    const todoButtonCreateText = document.createTextNode('Add');

    app.append(todoCreateNode);
    todoCreateNode.append(todoField);
    todoCreateNode.append(todoButtonCreate);
    todoButtonCreate.append(todoButtonCreateText);
}


export default TodoCreate;