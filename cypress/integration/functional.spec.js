/// <reference types="cypress" />

import loc from '../support/locators'

describe('Should test at a funcional level', () => {
    before(() => {
        cy.login('luiza@luiza.com.br', '123')
        cy.resetApp()
    })

    it('Should create an account', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.ACCOUNT).click()
        cy.get(loc.ACCOUNTS.NAME).type('Conta teste 2')
        cy.get(loc.ACCOUNTS.BTN_SAVE).click()
        cy.get(loc.MSG).should('contain', 'Conta inserida com sucesso!')
    })

    it('Should update an account', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.ACCOUNT).click()
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
})