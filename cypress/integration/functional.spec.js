/// <reference types="cypress" />

describe('Should test at a funcional level', () => {
    before(() => {
        cy.visit('http://barrigareact.wcaquino.me/')
        cy.get('[data-test="email"]').type('luiza@luiza.com.br')
        cy.get('[data-test="passwd"]').type('123')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Bem vindo')
    })

    it('Should create an account', () => {
        cy.get('[data-test="menu-settings"]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test="nome"]').type('Conta teste')
        cy.get('.btn').click()
        cy.get('.toast-success > .toast-message').should('contain', 'Conta inserida com sucesso!')
    })
})