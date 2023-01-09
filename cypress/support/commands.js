// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })











// Cypress.Commands.add('login',()=>{
//     cy.visit('',
//     cy.get('[name=loginEmail]')).type('testblacktech2@gmail.com')
//     cy.get('[name=password]').type('123456789')
//     cy.hash().should('eq','#/')
// })

Cypress.Commands.add("parseXlsx",(inputFile)=>{
    return cy.task('parseXlsx',{filePath:inputFile})
})




Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(err);
  return false;
})


const COMMAND_DELAY = 500;


for (const command of ['visit', 'click', 'trigger', 'type', 'clear', 'reload', 'contains']) {
    Cypress.Commands.overwrite(command, (originalFn, ...args) => {
        const origVal = originalFn(...args);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(origVal);
            }, COMMAND_DELAY);
        });
    });
} 