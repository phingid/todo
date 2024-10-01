const TodoItem = (text) => {
    const app = document.getElementById('app');

    const todoItemsNode = document.createElement('section');
    todoItemsNode.classList.add('todo__items');
    todoItemsNode.id = 'todoList';

    const todoItem = document.createElement('div');
    todoItem.classList.add('todo__item');

    const buttonTodo = document.createElement('button');
    buttonTodo.type = 'button';
    buttonTodo.classList.add('button__todo');

    const todoText = document.createElement('p');
    todoText.classList.add('todo__text');
    
    const todoTextContent = document.createTextNode(text || '');

    app.append(todoItemsNode);
    todoItemsNode.append(todoItem);
    todoItem.append(buttonTodo);
    todoItem.append(todoText);
    todoText.append(todoTextContent);
}

export default TodoItem;