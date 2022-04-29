const CLIENT_URL = 'localhost:5000/';

Feature('ToDo List Client');

Scenario('Test if I can create a ToDo', ({ I }) => {
    I.amOnPage(CLIENT_URL);

    I.waitForText('Create', 3);
    I.wait(5);

    // ensure message creation works
    I.fillField('Test create to do list');
    I.click('Create');

    I.wait(5);

    // ensure we can see the to do
    I.see('Test create to do list');

    // Done
    I.click('Done');

    I.wait(5);

    // ensure we see Completed
    I.see('Completed');
});