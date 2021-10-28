describe('Log In', function(){
    it('Log in', function (){
        cy.visit('http://siakad.polinema.ac.id/')
            cy.get('#username').type('1941720166')
            cy.get('#password').type('Daniswara123')
            cy.get('.form-actions > .btn').click()
    })
})