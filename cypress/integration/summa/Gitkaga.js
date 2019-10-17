/// <reference types = "Cypress"/>

describe("Test Framework", function(){

    before(function(){

        //Will run once before Test

    })

    it("Test Case", function(){

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get("input[name = 'name']:nth-child(2)").type("Nikhil")

        cy.get("#exampleFormControlSelect1").select("Female")


        
    })
})