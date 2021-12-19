const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

//function to create Manager card in HTML
const generateManager = (manager) => {
    return `
    <section class="column">
      <div class="card box">
        <div class="media-content">
          <h2 class="title is-4">${manager.getName()}</h2>
          <p class="substitle is-6"><i class="fas fa-mug-hot"></i> ${manager.getRole()}</p>
        </div>
        <div class=" box">
          <div class="content">
            <h4>ID: ${manager.getId()}</h4>
          </div>
          <div class="content">
            <h4>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></h4>
          </div>
          <div class="content">
            <h4>Office Number: ${manager.getOffice()}</h4>
          </div>
        </div>
      </div>
    </section>
    `
}

//function to create Engineer card in HTML
const generateEngineers = (engineers) => {

    //starting engineer string
    var engineerHtml = '';

    for (let i = 0; i < engineers.length; i++) {

    // for length of engineers, append new entry
    engineerHtml += `
    <section class="column">
      <div class="card box">
        <div class="media-content">
          <h2 class="title is-4">${engineers[i].getName()}</h2>
          <p class="substitle is-6"><i class="fas fa-glasses"></i> ${engineers[i].getRole()}</p>
        </div>
        <div class="box">
          <div class="content">
            <h4>ID: ${engineers[i].getId()}</h4>
          </div>
          <div class="content">
            <h4>Email: <a href="mailto:${engineers[i].getEmail()}">${engineers[i].getEmail()}</a></h4>
          </div>
          <div class="content">
            <h4>Github: <a href="https://www.github.com/${engineers[i].getGitHub()}" target="_blank">${engineers[i].getGitHub()}</a></h4>
          </div>
        </div>
      </div>
    </section>
    `
    }

    //return new HTML blocks for each instance of new Engineer
    return engineerHtml;
}

//function to create Intern card in HTML
const generateInterns = (interns) => {
    //starting intern string
    var internHtml = '';

    for (let i = 0; i < interns.length; i++) {

    // for length of interns, append new entry
    internHtml += `
    <section class="column">
      <div class="card box">
        <div class="media-content">
          <h2 class="title is-4">${interns[i].getName()}</h2>
          <p class="substitle is-6"><i class="fas fa-graduation-cap"></i> ${interns[i].getRole()}</p>
        </div>
        <div class="box">
          <div class="content">
            <h4>ID: ${interns[i].getId()}</h4>
          </div>
          <div class="content">
            <h4>Email: <a href="mailto:${interns[i].getEmail()}">${interns[i].getEmail()}</a></h4>
          </div>
          <div class="content">
            <h4>School: ${interns[i].getSchool()}</h4>
          </div>
        </div>
      </div>
    </section>
    `
    }

    //return new HTML blocks for each instance of new Intern
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