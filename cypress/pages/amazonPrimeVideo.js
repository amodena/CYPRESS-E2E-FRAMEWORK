class amazonPrimeVideo {

    elements = {
        usernameInput: () => cy.get('#ap_customer_name'),
        emailInput: () => cy.get('#ap_email'),
        passwordInput: () => cy.get('#ap_password'),
        passwordCheckInput: () => cy.get('#ap_password_check'),
        createAccountButton: () => cy.get('#continue'),
        tagInput: () => cy.get('body')
    }

    typeUsername(username){
        this.elements.usernameInput().type(username)
    }
    typeEmail(email,domain){
        this.elements.emailInput().type(email).type(domain)
    }
    typePassword(password){
        this.elements.passwordInput().type(password)
    }
    typePasswordCheck(passwordCheck){
        this.elements.passwordCheckInput().type(passwordCheck)
    }
    clickCreateAccount(){
        this.elements.createAccountButton().click()
    }
    findTag(tag){
        this.elements.tagInput().find(tag)
    }

}

module.exports =  new amazonPrimeVideo();