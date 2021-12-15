const Manager = require('../lib/Manager.js');

test('creates office number object', () => {
    const manager = new Manager('Michael Scott', 'xd456', 'michael.scott@dundermifflin.com', '', '7454');

    expect(manager.office).toBeDefined();
});

test('set role to "Manager"', () => {
    const manager = new Manager('Michael Scott', 'xd456', 'michael.scott@dundermifflin.com', 'Manager', '7454')

    expect(manager.role).toEqual('Manager');
});