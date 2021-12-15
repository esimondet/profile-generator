const Engineer = require('../lib/Engineer.js');

test('creates github object', () => {
    const engineer = new Engineer('Nick', '1337', 'nick@dundermifflin.com', '', 'itguy');

    expect(engineer.github).toBeDefined();
});

test('gets engineer github', () => {
    const engineer = new Engineer('Nick', '1337', 'nick@dundermifflin.com', '', 'itguy');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('set role to "Engineer"', () => {
    const engineer = new Engineer('Nick', '1337', 'nick@dundermifflin.com', 'Engineer', 'itguy')

    expect(engineer.role).toEqual('Engineer');
});