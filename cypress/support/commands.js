
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

//----------Login custom Commnad------------------------------//
 Cypress.Commands.add('logintoAmazon', (email, password) => { 
    
    cy.visit('/')
    cy.get('#nav-link-accountList').click()
    cy.get("input[name='email']").type(email)
    cy.get('#continue').click()
    cy.get('#ap_password').type(password)
    cy.get('#signInSubmit').click()
    
    
 })


//----------Search item Commnad------------------------------// 

 Cypress.Commands.add('searchandselect', (item) => {

    cy.get('#twotabsearchtextbox').type(item+"{enter}")
    cy.get('[data-cel-widget="search_result_2"]')
    .contains('TV')
    .click()
      })  





//----------- Add-to-Cart Command------------------------------//
Cypress.Commands.add('addtocart', () => {

    cy.get('#add-to-cart-button').click()
    cy.wait(300)
    
    //Check for modal and click on concel
    cy.get('body').then($body => {
        if ($body.find(".a-popover-header").length > 0) {
            
            cy.wait(200)
            cy.get('.a-button-close').click();
          
        } else {
          
            cy.log("Modal does not open")
        }
        })

}) 


//------------------Proceed to Cheeck Command ------------------------------//  

Cypress.Commands.add('proceedtocheckout', (item) => {
   
    cy.wait(300)
   
    cy.get('input[name="proceedToRetailCheckout"]').click()

      }) 


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })