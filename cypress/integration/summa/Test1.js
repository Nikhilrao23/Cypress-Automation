/// <reference types = "Cypress"/>

describe('My First Test Suite', function(){

    it('My First Test Case', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        cy.get('.search-keyword').type("ca")

        cy.wait(2000)

        cy.get('.product:visible').should('have.length',4)
        
        //Click on Add to Cart

        cy.get('.products').as('productLocator')

        cy.get('@productLocator').find('.product').eq(1).contains("ADD TO CART").click()

        
        //Parent-Child
        console.log("Hello Javascript")

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

        const textVeg = $el.find('h4.product-name').text()
        
        if (textVeg.includes("Cashews"))
        {
            $el.find('button').click()
        }
        })

        //Assert to Check if Brand name is right
        cy.get('.brand').should('have.text','GREENKART')

        cy.get('.brand').then(function(logoelement){

            cy.log(logoelement.text())
        })

    })
})

/*

Test Steps
1. Open Selenium Practice
2. Find the Search Box CSS and Type "Ca"
3. Wait Element in CSS
4. 

*/
