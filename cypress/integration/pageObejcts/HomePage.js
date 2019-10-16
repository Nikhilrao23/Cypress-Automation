class Homepage {

getName(){

    return cy.get("input[name = 'name']:nth-child(2)")
}

getEmail()
{
    return cy.get("input[name = 'email']")
    
}

getPwd()
{
    return cy.get("#exampleInputPassword1")
}

getGender()

{
    return cy.get("#exampleFormControlSelect1")

}

getEntrepreneur() 
{

    return cy.get("#inlineRadio3")
}

getShopButton()
{
    return cy.get(":nth-child(2) > .nav-link")
}

}

export default Homepage;