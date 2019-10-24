/// <reference types = "Cypress"/>

describe("Test Framework", function() {

    //Hooks before/beforeEach/Test/Aftereach/After

    before(function() {
        
        cy.fixture('ghum').then((book) => {

            this.nook = book
        })
    })

    it("Test Cases", function(){

        //Test Steps

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get("input[name='name']:nth-child(2)").type(this.nook.name)

        cy.get("#exampleFormControlSelect1").select(this.nook.gender)

        cy.wait(3000)
        cy.get("input[name='name']:nth-child(1)").should("have.value",  this.nook.name)

        cy.get("#inlineRadio3").should("be.disabled")

        cy.get("input[name='name']:nth-child(2)").should("have.attr", "minlength", "2")

        cy.get(':nth-child(2) > .nav-link').click()

        cy.get("h4.card-title").each(($el, index, $list) => {

            const textVal = $el.text()

            if (textVal.includes("Blackberry"))
            {
                cy.get(".btn.btn-info").eq(index).click()
            }

        })

    })
})