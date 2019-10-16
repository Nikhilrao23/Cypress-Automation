
/// <reference types = "Cypress"/>

describe("Test Framework", function(){

    before(function(){

        cy.fixture('ghum').then(function(holi){

            this.noli = holi
        })

    })

    it("Test Case", function(){

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get("input[name='name']:nth-child(2)").type(this.noli.name)

        cy.get("#exampleFormControlSelect1").select(this.noli.gender)

        cy.get("input[name='name']:nth-child(1)").should("have.value", this.noli.name)

        cy.get("#exampleFormControlSelect1").should("have.value", this.noli.gender)

        
        cy.get("input[name='name']:nth-child(2)").should("have.attr", "minlength", "2")

        cy.get("#inlineRadio3").should("be.disabled")

        cy.get(':nth-child(2) > .nav-link').click()

        this.noli.productName.forEach(function(element) {

            cy.addProduct(element)

          });


    })

})



/*What we are planning to do
Framework Building
1. We will use Hooks/ Annotations

*/