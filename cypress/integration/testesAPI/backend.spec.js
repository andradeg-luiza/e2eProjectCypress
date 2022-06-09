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
                //essa propriedade foi adicionada porque essa api é usada por outros sistemas
                redirecionar: false, 
                senha: "123"
            }
        }).its('body.token').should('not.be.empty')
            .then(token => {
                cy.request({
                    url: 'https://barrigarest.wcaquino.me/contas',
                    method: 'POST',
                    //a api é antiga, atualmente se usa no lugar do JWT bearer
                    headers: {Authorization: `JWT ${token}`}, 
                    body: {
                        nome: 'Conta via rest'
                    }
                }).as('response')
            })
        //poderia simplificar com o it, mas estou usando recursos diferentes
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', 'Conta via rest')
        })
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