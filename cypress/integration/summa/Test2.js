/// < reference types = "Cypress"/>


describe("My Second Test Suite", function(){

    it("My Second Test Case", function() {


        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        cy.get('.search-keyword').type("ca")

        cy.wait(2000)

        cy.get('.products').as('productLocator')
        
        //Finding Cashew and Clicking On it
        //cy.get('@productLocator').find('.product').eq(3).contains('ADD TO CART').click()

        //Another Method for Clicking on Cashews

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes("Cashews"))
            {
                $el.find('button').click()

        
            }
        })

        cy.get('.cart-icon > img').click()

        cy.contains("PROCEED TO CHECKOUT").click()

        cy.wait(2000)
        cy.contains('Place Order').click()

    })  
})

//Test Steps - Test1
        //Test Steps
        //Check the Length of the product

        //Add Capsicum to Cart from Products->Product

        //Parent-Child Relationship to add product to cart