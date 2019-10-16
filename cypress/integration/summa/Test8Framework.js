/// <reference types = "Cypress"/>
import Homepage from "../pageObejcts/HomePage"
describe ("Test Framework", function(){

    before(function() {

        // Runs Before all the tests Once

        cy.fixture('example').then(function(book){

            this.nook = book

        })
    })

    it("First Test Case", function() {

        const homepage = new Homepage()

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get("input[name = 'name']:nth-child(2)").type(this.nook.name)

        cy.get("#exampleFormControlSelect1").select(this.nook.gender)

        cy.get("input[name = 'name']:nth-child(1)").should("have.value", this.nook.name)

        cy.get("input[name = 'name']:nth-child(2)").should("have.attr", "minlength", "2")

        cy.get("#inlineRadio3").should("be.disabled")

        cy.get(":nth-child(2) > .nav-link").click()

        cy.get('h4.card-title').each(($el, index, $list) => {

            if($el.text().includes("Blackberry"))
            {
                cy.get('button.btn.btn-info').eq(index).click()

            }

            
        })


    })
})

/*
Testing Steps
1. Building a Framework
2. Create a Before Hook
3. Add Options on Example JSON
4. Include fixture with example.json
5. What is this Keyword and why it needs to be used
6. Use this keyword to enter name and gender
    //Assert to check if the same is used
7.Check if the Minlength is 2
8.Check if the Enterpreneur is disabled
*/