//Intellisense Help

/// < reference types = "Cypress"/>


describe('My First Test Suite', function(){


    it('My First Test Case', function(){

        //Test Steps Start Here

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        cy.get('.search-keyword').type("ca")

        cy.wait(2000)

        cy.get('.product:visible').should('have.length',4)

        //Add Capsicum to Cart
        
        cy.get('.products').find('.product').eq(2).contains("ADD TO CART").click()

        //Another Way to Add products is to Iterate through them which is:

        cy.get('.products').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()

            if(textVeg.includes("Cashews"))
            {
                $el.find('button').click()
            }

        })

        //Assert to Check if the Brand Logo is right or not

        cy.get('.brand').should('have.text','GREENKART')

        cy.get('.brand').then(function(logoelement){

            cy.log(logoelement.text())
        })
        
        

    })
})