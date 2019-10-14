/// <reference types = "Cypress"/>

describe("Checkbox Options",function(){

    it("My First Test Case", function(){

        //Test Steps

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("#checkBoxOption3").click().should("be.checked").and("have.value", "option3")

        //Uncheck

        cy.get("#checkBoxOption3").uncheck().should("not.be.checked")

        //ProperMethod

        cy.get("input[type='checkbox']").check(["option1", "option2"])
    })
})