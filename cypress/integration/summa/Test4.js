/// <reference types = "Cypress"/>

describe ("My First Test Suite", function(){

    it ("My First Test Case", function(){

        cy.visit("http://www.qaclickacademy.com/practice.php")

        cy.get("#alertbtn").click()

        cy.get("input[value ='Confirm']").click()

        //Window:Alert

        cy.on('window:alert', (str) => {

            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //Window:Confirm

        cy.on('window:confirm', (str) => {

            expect(str).to.equal('Hello , Are you sure you want to confirm?')

        })

        //New Tab with Deleting Target using Jquery

        cy.get("#opentab").invoke("removeAttr", "target").click()
        

        // Assertion to Verify the URL
        cy.url().should('have.include', 'qaclickacademy')
        //Previous Screen
        cy.go('back')

        //Forward Screen
        cy.go('forward')


    })
})