
const {ToDo} = require("../toDoModel");

describe('Test ToDo Model', () => {
    console.log('Test ToDo Model');
    it('should create ToDO', () => {
        const todo = new ToDo({text: 'New activity'});
        expect(todo.text).toBe('New activity');
        expect(todo.done).toBe(false);
    });
    it('should update name', async () => {
        const todo = new ToDo({text: 'New activity'});
        todo.text = 'New project';
        expect(todo.text).toBe('New project');
    });
    it('should update done', async () => {
        const todo = new ToDo({text: 'New activity'});
        todo.done = true;
        expect(todo.done).toBeTruthy();
    });
   
});