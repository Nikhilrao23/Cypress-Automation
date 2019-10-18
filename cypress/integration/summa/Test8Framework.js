// /// <reference types = "Cypress"/>

// import Homepage from "../pageObejcts/HomePage"
// import ProductPage from "../pageObejcts/ProductPage"

// describe ("Test Framework", function(){

//     before(function() {

//         // Runs Before all the tests Once

//         cy.fixture('example').then(function(book){

//             this.nook = book

//         })
//     })

//     it("First Test Case", function() {
//         //Created Object for your class
//         const homePage =new Homepage()
//         const productPage = new ProductPage()

//         cy.visit("https://rahulshettyacademy.com/angularpractice/")

//         homePage.getName().type(this.nook.name)

//         homePage.getGender().select(this.nook.gender)

//         homePage.getTwoWayDataBinding().should("have.value", this.nook.name)

//         homePage.getName().should("have.attr", "minlength", "2")

//         homePage.getEntrepreneur().should("be.disabled")

//         homePage.getShopButton().click()

//         this.nook.mobileProduct.forEach(function(element){

//             cy.productAdd(element)
//         })

//         productPage.getCheckoutButton().click()

//         productPage.getCompleteCheckout().click()

//         cy.get("#country").type("India")

//         cy.wait(5000)

        
//         cy.get('.suggestions > ul > li > a').click()

//         cy.get("#checkbox2").click({force:true})

//         cy.get("input[type ='submit']").click()

//         //cy.get('.alert').should("have.include", "Success! Thank you! Your order will be delivered in next few weeks :-).")

//         cy.get('.alert').then(function(text){

//             const textEle = text.text()

//             expect(textEle.includes("Success")).to.be.true
//         })
//     })
// })

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