describe('Checkout Test SauceDemo', () => {
    it('Normal Checkout with 1 item', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
        cy.get('#password').type('secret_sauce').should('have.value', 'secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include', '/inventory.html')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#shopping_cart_container > a > span').contains('1')
        cy.get('#shopping_cart_container > a').click()
        cy.url().should('include', '/cart.html')
        cy.get("#cart_contents_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.item_pricebar > div").invoke('text').then((text) => {
            const actualprice = text
            cy.get('#checkout').click()
            cy.url().should('include', '/checkout-step-one.html')
            cy.get('#first-name').type('First Name').should('have.value', 'First Name')
            cy.get('#last-name').type('Last Name').should('have.value', 'Last Name')
            cy.get('#postal-code').type('65141').should('have.value', 65141)
            cy.get('#continue').click()
            cy.url().should('include', '/checkout-step-two.html')
            cy.get('#checkout_summary_container > div > div.summary_info > div.summary_subtotal_label').contains(actualprice)
        });
        cy.get('#finish').click()
        cy.url().should('include', '/checkout-complete.html')
        cy.get('#checkout_complete_container > h2').contains('THANK YOU FOR YOUR ORDER')
    });
})