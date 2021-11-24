describe('Login Test SauceDemo', () => {
    it('Visit login page and test with standard user', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
        cy.get('#password').type('secret_sauce').should('have.value', 'secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include', '/inventory.html')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
        cy.url().should('include', '')
    });

    it('Visit login page and test with locked out user', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('locked_out_user').should('have.value', 'locked_out_user')
        cy.get('#password').type('secret_sauce').should('have.value', 'secret_sauce')
        cy.get('#login-button').click()
        cy.get('#login_button_container > div > form > div.error-message-container.error > h3').contains('Sorry, this user has been locked out.')
    });
    
    it('Visit login page and test with problem user', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('problem_user').should('have.value', 'problem_user')
        cy.get('#password').type('secret_sauce').should('have.value', 'secret_sauce')
        cy.get('#login-button').click()
        cy.get('#item_0_img_link > img').invoke('attr', 'src').then((firstSrc) => {
            const src1 = firstSrc
            cy.get('#item_1_img_link > img').invoke('attr', 'src').then((otherSrc) => {
                expect(otherSrc).to.equal(src1)
            })
        })
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
        cy.url().should('include', '')
    });
});