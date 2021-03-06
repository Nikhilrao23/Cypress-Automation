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
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })

Cypress.Commands.add('pAdd', (pName)  => {
    cy.get("h4.card-title").each(($el, index, $list) => {

        const textName = $el.text()

        if(textName.includes(pName))
        {
            cy.get(".btn.btn-info").eq(index).click()

        }

    })
})

// Cypress.Commands.add("productAdd", (mobileProduct) => {

//     cy.get("h4.card-title").each(($el, index, $list) => {

//         const text = $el.text()
    
//         if(text.includes(mobileProduct))
//         {
//             cy.get(".btn.btn-info").eq(index).click()
//         }
    
    
//     })

// })

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
