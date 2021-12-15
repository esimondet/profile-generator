const Intern = require('../lib/Intern.js');

test('creates school object', () => {
    const intern = new Intern('Ryan Howard', 'f1r3', 'ryan.howard@dundermifflin.com', '', 'Business School');

    expect(intern.school).toBeDefined();
});

test('gets intern school', () => {
    const intern = new Intern('Ryan Howard', 'f1r3', 'ryan.howard@dundermifflin.com', '', 'Business School');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('set role to "Intern"', () => {
    const intern = new Intern('Ryan Howard', 'f1r3', 'ryan.howard@dundermifflin.com', 'Intern', 'Business School')
console.log(intern);
    expect(intern.role).toEqual('Intern');
});