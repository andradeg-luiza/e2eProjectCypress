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
        cy.get('[href="/reset"]').click()
        cy.get('[data-test="menu-settings"]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test="nome"]').type('Conta teste 2')
        cy.get('.btn').click()
        cy.get('.toast-success > .toast-message').should('contain', 'Conta inserida com sucesso!')
    })

    it('Should update an account', () => {
        cy.get('[data-test="menu-settings"]').click()
        cy.get('[href="/contas"]').click()
        //o locator "edit" é frágil por estar determinando a posição na página
        // cy.get(':nth-child(7) > :nth-child(2) > :nth-child(1) > .far')
        cy.xpath("//table//td[contains(., 'Conta teste 2')]/..//i[@class='far fa-edit']").click()
        cy.get('[data-test="nome"]')
            .clear()
            .type('Conta 2 alterada')
        cy.get('.btn').click()
        cy.get('.toast-success > .toast-message').should('contain', 'Conta atualizada com sucesso')

    })
})