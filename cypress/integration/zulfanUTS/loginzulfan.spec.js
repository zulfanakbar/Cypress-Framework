let user = {};
describe('Login aplikasi', () => { 
   before(() => { 
      cy.fixture('../fixtures/user.json') 
         .then((data) => { 
            user = data; 
         }); 
      }); 
   it('Buka halaman utama', () => { 
      cy.visit('localhost:8080'); 
      cy.contains('type'); 
   })
   it('Input menggunakan username yang salah', () => { 
      const wrongUsername = 'test salah'; 
      cy.get('input[name="username"]') 
         .focus() 
         .type(wrongUsername) 
         .should('have.value', wrongUsername); 
   })
   it('Input menggunakan password yang salah', () => { 
      cy.get('input[name="password"]') 
         .focus() .type(user.password) 
         .should('have.value', user.password); 
   })
   it('Tekan button login', () => { 
      cy.get('button').click(); 
   })
   it('Input menggunakan username yang benar', () => { 
      cy.get('input[name="username"]') 
         .focus() 
         .clear() 
         .type(user.username) 
         .should('have.value', user.username); 
   }); 
   it('Tekan button login lagi', () => { 
      cy.get('input[name="password"]') 
         .focus() 
         .type('{enter}'); 
   });
})