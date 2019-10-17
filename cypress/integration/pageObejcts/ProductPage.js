class ProductPage{

getCheckoutButton()
{
    return cy.get(".nav-link.btn.btn-primary")
}

getCompleteCheckout()
{
    return cy.get(".btn.btn-success")

}


}


export default ProductPage;