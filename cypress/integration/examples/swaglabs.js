describe("First test suite",function(){
    it("First test case",function(){
        cy.visit("https://www.saucedemo.com/"),
        cy.get('[data-test=username]').type('standard_user'),
        cy.get('[data-test=password]').type('secret_sauce'),
        cy.get('#login-button').click(),
        cy.get('#item_4_title_link > .inventory_item_name').click();
        cy.get('.inventory_details_name').should('contain',"Sauce Labs Backpack");
        cy.get('.btn_primary').click(),
        cy.get('path').click(),
        cy.get('.btn_action').click(),
        cy.get('[data-test=firstName]').type('Trupti'),
        cy.get('[data-test=lastName]').type('Dadhich'),
        cy.get('[data-test=postalCode]').type('306401'),
        cy.get('.btn_primary').click();
        cy.get('.inventory_item_name').should('contain',"Sauce Labs Backpack");
        cy.get('.btn_action').click();
        cy.get('.complete-header').should('contain','THANK YOU FOR YOUR ORDER')
    })
})