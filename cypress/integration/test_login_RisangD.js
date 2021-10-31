it('Login Test Normal', () => {
    it('Should be Can Login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    })
})

it('Log In Scenario - locked_out_user/secret_sauce', () => {
    it('Should be Locked User', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    })
})

it('Log In Scenario - problem_user/secret_sauce', () => {
    it('Should be something problem', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('problem_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    })
})


it('Log In Scenario - performance_glitch_user/secret_sauce', () => {
    it('Should be something glitched', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('performance_glitch_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    })
})


it('Log In Scenario - wihout username/password', () => {
    it('Should be cant logged in', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type(' ')
    cy.get('#password').type(' ')
    cy.get('#login-button').click()
    })
})
/*describe('Login Tests', function () {
    it('Successfull login', function () {
        cy.visit('https://www.saucedemo.com/')
        
        cy.get(':nth-child(1) > .form-control')
        .type('test@test.com')

        cy.get(':nth-child(2) > .form-control')
        .type('test')

        cy.get('.btn')
        .click()

        cy.url()
        .should('contain', 'http://localhost:4100/')
        cy.get(':nth-child(4) > .nav-link')
        .should('have.attr', 'href', '/@test')
        cy.get(':nth-child(3) > .nav-link')
        .should('have.attr', 'href', '/settings')
        cy.get('.container > .nav > :nth-child(2) > .nav-link')
        .should('have.attr', 'href', '/editor')
    })
})*/


/*describe('Login Test 1', () => {
    it('Should be able to login', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('#user-name').should('be.visible').type('standard_user')
      cy.get('#password').should('be.visible').type('secret_sauce')
      cy.get('#login-button').click()
    })
  })*/

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