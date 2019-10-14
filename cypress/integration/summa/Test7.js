/// <reference types = "Cypress"/>

describe("My First Test Suite", function(){

    it("My First Test Case", function(){

        cy.visit("http://www.qaclickacademy.com/practice.php")

        cy.get("#opentab").then(function(blob){

            const curr = blob.prop('href')

            cy.visit(curr)

        })
    })
})




//This Method Doesn't work because it changes the Unique domain and not Sub-domain.
/*
Prop Method - Returns properties and methods of the selected element
*/