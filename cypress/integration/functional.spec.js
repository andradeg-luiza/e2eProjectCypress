/// <reference types="cypress" />

import loc from '../support/locators'
import '../support/commandsAccounts'

describe('Should test at a funcional level', () => {
    before(() => {
        cy.login('luiza@luiza.com.br', '123')
    })

    beforeEach(() => {
        cy.get(loc.MENU.HOME).click()
        cy.resetApp()
    })

    it.only('Should create an account', () => {
        cy.accessMenuAccount()
        cy.insertAccount('Conta de teste')
        cy.get(loc.MSG).should('contain', 'Conta inserida com sucesso!')
    })

    it('Should update an account', () => {
        cy.accessMenuAccount()
        //o locator "edit" é frágil por estar determinando a posição na página
        //por isso foi necessário o xpath
        // cy.get(':nth-child(7) > :nth-child(2) > :nth-child(1) > .far')
        cy.xpath(loc.ACCOUNTS.FN_XP_BTN_EDIT('Conta para alterar')).click()
        cy.get(loc.ACCOUNTS.NAME)
            .clear()
            .type('Conta alterada')
        cy.get(loc.ACCOUNTS.BTN_SAVE).click()
        cy.get(loc.MSG).should('contain', 'Conta atualizada com sucesso')

    })

    it('Should note create an account with same name', () => {
        cy.accessMenuAccount()
        cy.insertAccount('Conta mesmo nome')
        cy.get(loc.ACCOUNTS.BTN_SAVE).click()
        cy.get(loc.MSG).should('contain', 'status code 400')
    })

    it('Should create a transaction', () => {
        cy.get(loc.MENU.MOVIMENT).click()
        cy.get(loc.MOVIMENT.DESCRIPTION).type('Desc')
        cy.get(loc.MOVIMENT.AMOUNT).type('123')
        cy.get(loc.MOVIMENT.INVOLVED).type('Inter')
        cy.get(loc.MOVIMENT.ACCOUNT).select('Conta para movimentacoes')
        cy.get(loc.MOVIMENT.STATUS).click()
        cy.get(loc.MOVIMENT.BTN_SAVE).click()
        cy.get(loc.MSG).should('contain', 'inserida com sucesso')
        //outras possíveis validações
        cy.get(loc.STATEMENT.LINES).should('have.length', 7)
        cy.xpath(loc.STATEMENT.FN_XP_SEARCH_ELEMENT('Desc', '123')).should('exist')
    })

    it('Should get balance', () => {
        cy.get(loc.MENU.HOME).click()
        cy.xpath(loc.BALANCE.FN_XP_BALANCE_ACCOUNT('Conta para saldo'))
            .should('contain', '534,00')
    })

    it('Should remove a transaction', () => {
        cy.get(loc.MENU.EXTRATO).click()
        cy.xpath(loc.STATEMENT.FN_XP_REMOVE_ELEMENT('Movimentacao para exclusao')).click()
        cy.get(loc.MSG).should('contain', 'removida com sucesso')
    })

})