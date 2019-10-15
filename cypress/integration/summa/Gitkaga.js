/// <reference types = "Cypress"/>

describe("Test Suite", function(){

    it("Test Case", function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // cy.get(".mouse-hover-content").invoke('show')

        // cy.contains("Top").click()

        // cy.url().should("include", "top")

        //Another Method

        cy.contains("Reload").click({force:true})


    })
})