const { after } = require("lodash");
import amazonPrimeVideo from '../pages/amazonPrimeVideo';

describe('startSessionPageTest', function() {

    before(function(){          
        cy.visit('https://www.primevideo.com/')
      })
    beforeEach(function(){          
        cy.wait(1000)
      })
    it('Ir al login', function() {
        cy.get('span > #pv-nav-sign-in').click()
    })
    it('Validad cambio de título a --> Iniciar sesión en Amazon', function() {
        cy.get('h1').contains('Iniciar sesión')
    })
})

describe('loginToAmazonPrimeErrorTest', function() {

    before(function(){          
        cy.visit('https://www.primevideo.com/')
        cy.get('span > #pv-nav-sign-in').click()
      })

    beforeEach(function(){          
        cy.wait(500)
      })

    it('Completar campo EMAIL', function() {
        cy.get('#ap_email').type('xxx@mail.com')
    })
    it('Completar campo PASSWORD', function() {
        cy.get('#ap_password').type('holamundo')
    })
    // Por defecto el checkbox está desclickeado, se clickea y se vuelve a desclickear
    it('Desclickear RECUERDAME', function() {
        cy.get('label > input').click() //activado
        cy.wait(500)
        cy.get('label > input').click() //desactivado
    })
    it('Click en INICIAR SESION', function() {
        cy.get('#signInSubmit').click()
    })
    it('Validar mensaje de error (cookies deshabilitadas)', function() {
        cy.get('h1').contains('Habilita las cookies para continuar')
        cy.get('html').find('p')
    })
})

describe('createAccountError (using POM)', function() {

    before(function(){          
        cy.visit('https://www.primevideo.com/')
      })

    beforeEach(function(){          
        cy.wait(500)
      })

    it('Go create account', function() {
        cy.get('.dv-push-left > .dv-copy-button > .dv-overlay').click()
        cy.get('#createAccountSubmit').click()
    })

    it('Create account (error)', function() {
        let randomNumber = Math.random()
        amazonPrimeVideo.typeUsername('Alan axel')
        amazonPrimeVideo.typeEmail(Date.now(),'@mail.com')
        amazonPrimeVideo.typePassword(randomNumber)
        amazonPrimeVideo.typePasswordCheck(randomNumber)
        amazonPrimeVideo.clickCreateAccount()
        cy.get('h1').contains('Habilita las cookies para continuar')
    })
    
})

describe('findTag', function() {

    before(function(){          
        cy.visit('https://www.primevideo.com/')
      })
    beforeEach(function(){          
        cy.wait(500)
      })
    it('Create account (error)', function() {
        amazonPrimeVideo.findTag('p')
        
    })
})
