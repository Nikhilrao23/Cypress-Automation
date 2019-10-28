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

        this.nook.productName.forEach(function(ele){

            cy.selectProduct(ele)
        })

        cy.get(".btn.btn-primary").click()

        cy.get(".btn.btn-success").click()

        cy.get('#country').type("India")

        cy.wait(5000)

        cy.get(".suggestions > ul > li > a").click()

        cy.get("#checkbox2").click({force:true})

        cy.get("input[type ='submit']").click()

        cy.get('.alert').then(function(sucText){

            const success = sucText.text()
            expect(success.includes("Success")).to.be.true
        })

    })
})