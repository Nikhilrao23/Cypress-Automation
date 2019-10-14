/// <reference types = "Cypress"/>

describe("My First Test Suite", function(){

    it("My First Test Case", function(){

        //Test Steps

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        cy.get(".search-keyword").type("ca")

        cy.get(".products").as("productLocator")

        cy.wait(3000)

        cy.get("@productLocator").find(".product").eq(1).contains("ADD TO CART").click()

        cy.get("@productLocator").find(".product").each(($el, index, $list) => {

            const textVeg = $el.find("h4.product-name").text()

            if(textVeg.includes("Cashews"))
            {
                $el.find('button').click()

            }

        })

        cy.get('.cart-icon').click()

        cy.contains("PROCEED TO CHECKOUT").click()

        cy.wait(2000)
        cy.contains("Place Order").click()
    })
})