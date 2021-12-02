const { after } = require("lodash");


describe('Netflix test', function() {

    // beforeEach(function(){
    //     cy.intercept('POST', '/ichnaea/log/*', {
    //         statusCode: 201,
    //       })
    //       cy.intercept('POST', '/personalization/cl2/*', {
    //         statusCode: 201,
    //       })
          
          
    //     //cy.wait(2500)
    //     cy.visit('https://www.netflix.com/ar/');
        
    //   })

    it('Validar titulo test', function() {
        //cy.get('.nfTextField')
        //.type('leomessi@gmail.com{enter}')
        //console.log('Entro a netflix?');
        cy.title().should('eq','Netflix Argentina: Ve series online, ve películas online')
        cy.wait(2000)
    });

    it('Validar URL de Netflix', function() {
        cy.url().should('eq', 'https://www.netflix.com/ar/');
        cy.wait(2000)
    })

    it('Validar Hostname de Netflix', function() {
        cy.location('hostname').should('eq', 'www.netflix.com');
        cy.wait(2000)
    })

    it('Ir al login', function() {
        cy.get('.authLinks').click()
        cy.title().should('eq','Netflix')
    })

    it('Prueba con Google', function() {
        cy.visit('https://www.google.com');
        cy.wait(2000)
        cy.get('.gLFyf').click().type('chupame la pija colman{enter}')
    })

    it.only('Prueba con Amazon', function() {
        cy.visit('https://www.primevideo.com/');
        console.log('prueba log');
        cy.wait(2000)
        cy.title().should('eq','Bienvenido a Prime Video')
        cy.wait(2000)
        cy.location('hostname').should('eq', 'www.primevideo.com');
        cy.wait(2000)

    })
    
    
})