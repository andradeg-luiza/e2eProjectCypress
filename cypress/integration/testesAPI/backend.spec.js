/// <reference types="cypress" />

describe('Should test at a funcional level', () => {
    before(() => {
        // cy.login('luiza@luiza.com.br', '123')
    })

    beforeEach(() => {
        // cy.resetApp()
    })

    it('Should create an account', () => {
        cy.request({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body: {
                email: "luiza@luiza.com.br",
                redirecionar: false,
                senha: "123"
            }
        }).its('body.token').should('not.be.empty')
    })

    it('Should update an account', () => {
    })

    it('Should note create an account with same name', () => {
    })

    it('Should create a transaction', () => {
    })

    it('Should get balance', () => {
    })

    it('Should remove a transaction', () => {
    })

})