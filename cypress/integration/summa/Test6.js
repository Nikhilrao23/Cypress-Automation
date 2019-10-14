/// <reference types = "Cypress"/>

describe("Mouse Hover", function(){

    it("Test Case", function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Verify Mouse Hover to view Top and Click On it
        //cy.get(".mouse-hover-content").invoke('show')

        //Force To Click Button
       

        cy.contains("Top").click({ force: true })

        cy.url().should("include", "top")




    })
})

/*
Test Steps

1. Move to the Mouse Hove Func
2. Keep the mouse pointing to it and click on TOP

2 Methods
1. JQuery - To Make it Visible
2. Cypress Command - No need of hovering, can directly click on it

*/