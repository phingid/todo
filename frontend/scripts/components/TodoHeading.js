const TodoHeading = () => {
    const app = document.getElementById('app');

    const todoHeadingNode = document.createElement('h1');
    todoHeadingNode.classList.add('todo__heading');

    const todoHeadingText = document.createTextNode('Daily To Do List');

    app.append(todoHeadingNode);
    todoHeadingNode.append(todoHeadingText);
}

export default TodoHeading;