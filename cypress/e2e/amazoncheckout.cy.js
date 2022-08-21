
const selector= require("../support/selectors.js")
const data = require("../fixtures/testdata.json");




describe('Verify amazon workflow from login to check-out screen', () => {


  it('login to amazon app ', () => {

     //---------Loginto Amazon App---------------------------------//   
     cy.logintoAmazon(data.email,data.password)
     cy.url().should('contain', '/?ref_=nav_ya_signin')

  });


  it('login to amazon app, search TV item,add to cart and proceed to checkout screen', () => {

     //---------Loginto Amazon App---------------------------------//   
     cy.logintoAmazon(data.email,data.password)

      //------Verify element on Homepage after login----------------//
     cy.get(selector.amazonlogo).should('be.visible')
     cy.get(selector.searchbar).should('be.visible')
     cy.get(selector.username).should('have.text',"Hello, Max")

   //-------Enter item to Search bar and Select first element--------// 
     cy.searchandselect(data.myitem)    
 
   //------Verify elements after selecting TV item--------------//
     cy.get(selector.instock).should('contains.text',"In Stock.")
     cy.get(selector.buynowbtn).should('contains.text',"Buy Now")
     cy.get(selector.addtocartbtn).should('have.text',"Add to Cart")
 
   //-------Add selected item to cart---------------------//
     cy.addtocart()
 
   //-------verify item added to cart-----------------------//   
     cy.get(selector.addedtocarttext) .should('contains.text',"Added to Cart")
 
   //------Proceed to Checkout-----------------------------//
     cy.proceedtocheckout() 
 
   //-------Verify Address Screen is displayed after Checkout ----   
     cy.get(selector.shipaddress).should('have.text',"Select a shipping address")
  
    
  });

   
   
  
  


})