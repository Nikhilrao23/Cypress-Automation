/// <reference types = "Cypress"/>

describe("My First Test Suite", function(){

    it("My First Test Case", function(){

        //Test Steps

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //CheckBox

        cy.get("#checkBoxOption3").check().should("be.checked").and("have.value", "option3")

        //UnCheck Option

        cy.get("#checkBoxOption3").uncheck().should("not.be.checked")

        //Mention Which Options to be checked

        cy.get("input[type = 'checkbox']").check(['option2','option3'])


        //Static Dropdown

        cy.get("#dropdown-class-example").select("Option2").should("have.value", "option2")

        //Dynamic Dropdown

        cy.get("#autocomplete").type("Ca")

        cy.get(".ui-menu-item div").each(($el, index, $list) => {

            if ($el.text() == "Cambodia")
            {
                $el.click()
            }

        })

        //Assertion to check if DropDown is selected

        cy.get("#autocomplete").should("have.value", "Cambodia")

        //Radio Button

        cy.get("input[value = 'radio3']").click().should("be.checked")

        //Visible and Invisible BOxes

        cy.get("#displayed-text").should("be.visible")

        cy.get("#hide-textbox").click()

        cy.get("#displayed-text").should("not.be.visible")

        cy.get("#show-textbox").click()

        cy.get("#displayed-text").should("be.visible")



    })
})