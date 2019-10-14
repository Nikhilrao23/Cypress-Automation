
/// <reference types = "Cypress"/>

describe("My First Test Suite", function(){

    it("My First Test Case", function(){

        //CheckBoxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("#checkBoxOption1").check().should("be.checked").and("have.value", "option1")

        //Uncheck CheckBox

        cy.get("#checkBoxOption1").uncheck().should("not.be.checked")

        //Mention Which Checkbox to Check with Globally Declaring it

        cy.get("input[type = 'Checkbox']").check(['option2','option3'])

        //Static DropDown

        cy.get("Select").select("Option2").should("have.value", "option2")

        //Dynanic Drop Down

        cy.get("#autocomplete").type("ind")

        cy.get(".ui-menu-item div").each(($el, index, $list) => {

            if ($el.text() == "India")
            {
                $el.click()
            }

        })

    })
})


//Test Steps

//How to Click a checkbox
//How to Uncheck a checkbox
//How to Mention which needs to be checked
//Static Dropdown
//Dynamic DropDown
//Assert to Check if Dynamic Dropdown is correctly selected.
//Radio Button
//Visible Or Invisible Concepts
//Alert
//Confirm
//Window:Alert
//window:Confirm