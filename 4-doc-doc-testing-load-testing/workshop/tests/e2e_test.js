const CLIENT_URL = `http://localhost:5000/`;

Feature('ToDo List Client');

Scenario('Test if I can create a ToDo', ({ I }) => {
    I.amOnPage(CLIENT_URL);

    // Test création todo
    I.fillField('.form-control', 'Test create to do list');
    I.click('#create-todo');

    // Test affichage todo
    I.waitForText('Test create to do list');
});

Scenario('Test if I can complete a todo', ({ I }) => {
    I.amOnPage(CLIENT_URL);

    // Test création todo
    I.fillField('.form-control', 'Test to do complete');
    I.click('#create-todo');

    // Test affichage todo
    I.waitForText('Test to do complete');

    // Test du passage dans "completed" des todo
    I.click('#todo-body tr:last-child button')
    I.waitForText('Test to do complete', '#done-body')
});