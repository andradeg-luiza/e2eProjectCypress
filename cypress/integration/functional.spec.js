/// <reference types="cypress" />

import loc from '../support/locators'
import '../support/commandsAccounts'

describe('Should test at a funcional level', () => {
    before(() => {
        cy.login('luiza@luiza.com.br', '123')
        cy.resetApp()
    })

    it('Should create an account', () => {
        cy.accessMenuAccount()
        cy.insertAccount('Conta teste 2')
        cy.get(loc.MSG).should('contain', 'Conta inserida com sucesso!')
    })

    it('Should update an account', () => {
        cy.accessMenuAccount()
        //o locator "edit" é frágil por estar determinando a posição na página
        //por isso foi necessário o xpath
        // cy.get(':nth-child(7) > :nth-child(2) > :nth-child(1) > .far')
        cy.xpath(loc.ACCOUNTS.XP_BTN_EDIT).click()
        cy.get(loc.ACCOUNTS.NAME)
            .clear()
            .type('Conta 2 alterada')
        cy.get(loc.ACCOUNTS.BTN_SAVE).click()
        cy.get(loc.MSG).should('contain', 'Conta atualizada com sucesso')

    })

    it('Should note create an account with same name', () => {
        cy.accessMenuAccount()
        cy.insertAccount('Conta 2 alterada')
        cy.get(loc.ACCOUNTS.BTN_SAVE).click()
        cy.get(loc.MSG).should('contain', 'status code 400')
    })
})