const locators = {

    LOGIN: {
        USER: '[data-test="email"]',
        PSSWD: '[data-test="passwd"]',
        BTN_LOGIN: '.btn'
    },

    MENU: {
        HOME:'[data-test="menu-home"]',
        SETTINGS: '[data-test="menu-settings"]',
        ACCOUNT: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENT: '[data-test="menu-movimentacao"]',
        EXTRATO: '[data-test="menu-extrato"]'
    },

    ACCOUNTS: {
       NAME: '[data-test="nome"]',
       BTN_SAVE: '.btn',
       FN_XP_BTN_EDIT: name =>`//table//td[contains(., '${name}')]/..//i[@class='far fa-edit']`
    },

    MOVIMENT: {
        AMOUNT: '[data-test="valor"]',
        DESCRIPTION: '[data-test="descricao"]',
        INVOLVED: '[data-test="envolvido"]',
        ACCOUNT: '[data-test="conta"]',
        STATUS: '[data-test="status"]',
        BTN_SAVE: '.btn-primary'
    },

    STATEMENT: {
        LINES: '.list-group > li',
        FN_XP_SEARCH_ELEMENT: (desc, value) => `//span[contains(., '${desc}')]/following-sibling::small[contains(., '${value}')]`,
        FN_XP_REMOVE_ELEMENT: account => `//span[contains(., '${account}')]/../../..//i[@class='far fa-trash-alt']`
    },

    BALANCE: {
        FN_XP_BALANCE_ACCOUNT: name => `//td[contains(.,'${name}')]/../td[2]`
    },

    MSG: '.toast-message'

}



export default locators;