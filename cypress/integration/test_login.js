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

/*describe('Log In Scenario - standard_user/secret_sauce', function(){
    it('Log in', function (){
        cy.visit('https://www.saucedemo.com/')
            cy.get('#user-name').type('standard_user')
            cy.get('#password').type('secret_sauce')
            cy.get('#login-button').click()
    })
})*/

    /*it('should able to login', () => {
        cy.request({
            URL: "https://www.saucedemo.com/",
            method: 'POST',
            body:{
                user: {
                    email: "standard_user", password: "secret_sauce"
                }
            }
        })
    }).then(res => cy.log(res))
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