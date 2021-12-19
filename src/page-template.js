const fs = require('fs');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const generateManager = (manager) => {
    return `
    <section class="column">
      <div class="card box">
        <div class="media-content">
          <h2 class="title is-4">${manager.name}</h2>
          <p class="substitle is-6"><i class="fas fa-mug-hot"></i>${manager.role}</p>
        </div>
        <div class=" box">
          <div class="content">
            <h4>ID: ${manager.id}</h4>
          </div>
          <div class="content">
            <h4>Email: <a href="mailto:${manager.email}">${manager.email}</a></h4>
          </div>
          <div class="content">
            <h4>Office Number: ${manager.office}</h4>
          </div>
        </div>
      </div>
    </section>
    `
}

const generateEngineers = (engineers) => {
    var engineerHtml = '';

    for (let i = 0; i < engineers.length; i++) {

    engineerHtml += `
    <section class="column">
      <div class="card box">
        <div class="media-content">
          <h2 class="title is-4">${engineers[i].name}</h2>
          <p class="substitle is-6"><i class="fas fa-glasses"></i>${engineers[i].role}</p>
        </div>
        <div class="box">
          <div class="content">
            <h4>ID: ${engineers[i].id}</h4>
          </div>
          <div class="content">
            <h4>Email: <a href="mailto:${engineers[i].email}">${engineers[i].email}</a></h4>
          </div>
          <div class="content">
            <h4>Github: <a href="https://www.github.com/${engineers[i].github}" target="_blank">${engineers[i].github}</a></h4>
          </div>
        </div>
      </div>
    </section>
    `
    }
    return engineerHtml;
}

const generateInterns = (interns) => {
    var internHtml = '';

    for (let i = 0; i < interns.length; i++) {

    internHtml += `
    <section class="column">
      <div class="card box">
        <div class="media-content">
          <h2 class="title is-4">${interns[i].name}</h2>
          <p class="substitle is-6"><i class="fas fa-graduation-cap"></i>${interns[i].role}</p>
        </div>
        <div class="box">
          <div class="content">
            <h4>ID: ${interns[i].id}</h4>
          </div>
          <div class="content">
            <h4>Email: <a href="mailto:${interns[i].email}">${interns[i].email}</a></h4>
          </div>
          <div class="content">
            <h4>School: ${interns[i].school}</h4>
          </div>
        </div>
      </div>
    </section>
    `
    }
    return internHtml;
}

const buildPage = (manager, engineers, interns) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Profile Generator Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    </head>
    
    <body>
        <header class="hero is-danger">
            <div class="hero-body">
                <h1 class="title">My Team</h1>
            </div>
        </header>

        <main class="columns is-flex-wrap-wrap box">

            ${generateManager(manager)}
            ${generateEngineers(engineers)}
            ${generateInterns(interns)}

        </main>
    </body>

    </html>
    `;
};

module.exports = buildPage;