///<reference types = "Cypress"/>

describe("XHR Testing with Cypress", function(){

    it("Test Case", function(){

        cy.visit("https://example.cypress.io/commands/network-requests")

        const message = "Error da dei"
        cy.server()

        cy.route({

            method: 'PUT',
            url: 'comments/*',
            status: 404,
            response:
            {
                error :  message
            },
            delay: 1000
        })

        cy.get(".network-put").click()

        cy.get(".network-put-comment").should("contain", message)
    })
})