describe('Log In Scenario - standard_user/secret_sauce', function(){
    it('Log in', function (){
        /*cy.visit('https://www.saucedemo.com/')
            cy.get('#user-name').type('standard_user')
            cy.get('#password').type('secret_sauce')
            cy.get('#login-button').click()*/

            cy.visit('https://www.saucedemo.com/', {
                auth: {
                    username: 'standard_user',
                    password: 'secret_sauce',
                },
            })
    })
})