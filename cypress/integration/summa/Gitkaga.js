//Automation Framework Building

/// <reference types = "Cypress"/>

describe("Test Framework", function(){

    before(function(){

        //Runs before every test once

        cy.fixture('ghum').then(function(vivi){

            this.bub = vivi
        })
    })

    it("Test Case", function(){

        //Test Steps

        //Environmental Variables
        cy.visit(Cypress.env('url') + "/angularpractice/")

        cy.get("input[name = 'name']:nth-child(2)").type(this.bub.name)

        cy.get("#exampleFormControlSelect1").select(this.bub.gender)

        cy.get("input[name = 'name']:nth-child(1)").should("have.value", this.bub.name )

        cy.get("#exampleFormControlSelect1").should("have.value", this.bub.gender)

        cy.get("input[name = 'name']:nth-child(2)").should("have.attr", "minlength", "2")

        cy.get("#inlineRadio3").should("be.disabled")

        cy.get(':nth-child(2) > .nav-link').click()

        this.bub.pName.forEach(function(ele){

            cy.pAdd(ele)

        })
        
        cy.get('.nav-link.btn.btn-primary').click()

        cy.get(".btn.btn-success").click()

        cy.get("#country").type("India")

        cy.wait(5000)

        cy.get('.suggestions > ul > li > a').click()

        cy.get("#checkbox2").click({force:true})

        cy.get("input[type ='submit']").click()

        cy.get(".alert").then(function(successText) {

            const sucText = successText.text()

            expect(sucText.includes("Success")).to.be.true

        })


    })
})