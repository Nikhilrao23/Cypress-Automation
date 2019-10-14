/// <reference types = "Cypress"/>

describe("Web Tables", function(){

    it("Test Case", function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("tr td:nth-child(2)").each(($el, index, $list) => {

            const text = $el.text()

            if (text.includes("Python"))
            {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                    const priceText = price.text()
                    expect(priceText).be.equal('25')
                }
                
            )
            }

        })

    })
})
/*
Test Steps To Identify Web Elements

1. Visit the Site
2. Get the CSS selector for Course name
3. Use Each Method to iterate over them
4. Find the Python Text and Move to the next Sibling Element 
5. Check if the Amount is right with comparing it


*/