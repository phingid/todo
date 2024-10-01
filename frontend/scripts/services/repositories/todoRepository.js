import Http from '../classes/Http.js';

const HTTP = new Http();

const todoRepostory = {
    async getTodolist() {
        try {
            const responce = await HTTP.get('todos');
            return responce.length > 0 ? responce : [];
        } catch (error) {
            console.error('Ошибка получения списка задач: ', error);
        }
    },

    async createTodoItem(params) {
        try {
            await HTTP.post('todos', params);
        } catch (error) {
            console.error('Ошибка создания задачи: ', error);
        }
    },
}

export default todoRepostory;