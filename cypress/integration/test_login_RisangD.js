
describe('Login Test 1', () => {
    it('Should be able to login', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('#user-name').should('be.visible').type('standard_user')
      cy.get('#password').should('be.visible').type('secret_sauce')
      cy.get('#login-button').click()
    })
  })

/*
describe('Login Test 1', function () {
    it('Should be able to login', function (){
        cy.visit('https://www.saucedemo.com/')
            cy.get('#user-name').type('standard_user')
            cy.get('#password').type('secret_sauce')
            cy.get('#login-button').click()
    })
})*/

/*
describe('Log In Scenario - locked_out_user/secret_sauce', function(){
    it('Log in', function (){

            cy.visit('https://www.saucedemo.com/', {
                auth: {
                    username: 'locked_out_user',
                    password: 'secret_sauce',
                },
            })
    })
})

describe('Log In Scenario - problem_user/secret_sauce', function(){
    it('Log in', function (){

            cy.visit('https://www.saucedemo.com/', {
                auth: {
                    username: 'problem_user',
                    password: 'secret_sauce',
                },
            })
    })
})

describe('Log In Scenario - performance_glitch_user/secret_sauce', function(){
    it('Log in', function (){

            cy.visit('https://www.saucedemo.com/', {
                auth: {
                    username: 'performance_glitch_user',
                    password: 'secret_sauce',
                },
            })
    })
})

describe('Log In Scenario - no username/no password', function(){
    it('Log in', function (){

            cy.visit('https://www.saucedemo.com/', {
                auth: {
                    username: '',
                    password: '',
                },
            })
    })
})*/