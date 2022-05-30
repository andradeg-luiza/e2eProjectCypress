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

    it('Should create a transaction', () => {
        cy.get(loc.MENU.MOVIMENT).click()
        cy.get(loc.MOVIMENT.DESCRIPTION).type('Desc')
        cy.get(loc.MOVIMENT.AMOUNT).type('123')
        cy.get(loc.MOVIMENT.INVOLVED).type('Inter')
        cy.get(loc.MOVIMENT.BTN_SAVE).click()
        cy.get(loc.MSG).should('contain', 'inserida com sucesso')
        //outras possíveis validações
        cy.get(loc.STATEMENT.LINES).should('have.length', 7)
        cy.xpath(loc.STATEMENT.XP_SEARCH_ELEMENT).should('exist')
    })

})