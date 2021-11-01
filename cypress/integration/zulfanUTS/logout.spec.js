describe('Logout aplikasi', () => { 
    it('Tekan button logout', () => { 
       cy.get(`[data-test="link-profile"]`).should('exist'); 
       cy.get(`[data-test="link-profile"]`).click();
       
       cy.get(`[data-test="link-logout"]`).should('exist'); 
       cy.get(`[data-test="link-logout"]`).click(); 
    });
 })