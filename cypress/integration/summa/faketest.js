/// <reference types = "Cypress"/>

describe("My First Test Suite", function(){

    it("Test Case", function(){

        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.server()

        cy.route(
            {
                method: 'PUT',
                url: 'comments/*',
                status: 404,
                response:
                {
                    error: "Hey Comment doesn't exist"
                },
                delay: 1000
            }
        ).as('Update Comment')

    cy.get('.network-put').click()

    cy.get('.network-put-comment').should('contain', 'Hey Comment doesn\'t exist')
    
    })
})