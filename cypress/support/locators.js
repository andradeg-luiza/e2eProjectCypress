const locators = {

    LOGIN: {
        USER: '[data-test="email"]',
        PSSWD: '[data-test="passwd"]',
        BTN_LOGIN: '.btn'
    },

    MENU: {
        SETTINGS: '[data-test="menu-settings"]',
        ACCOUNT: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENT: '[data-test="menu-movimentacao"]'
    },

    ACCOUNTS: {
       NAME: '[data-test="nome"]',
       BTN_SAVE: '.btn',
       XP_BTN_EDIT: "//table//td[contains(., 'Conta teste 2')]/..//i[@class='far fa-edit']"
    },

    MOVIMENT: {
        AMOUNT: '[data-test="valor"]',
        DESCRIPTION: '[data-test="descricao"]',
        INVOLVED: '[data-test="envolvido"]',
        BTN_SAVE: '.btn-primary'
    },

    STATEMENT: {
        LINES: '.list-group > li',
        XP_SEARCH_ELEMENT: "//span[contains(., 'Desc')]/following-sibling::small[contains(., '123')]"
    },

    MSG: '.toast-message'

}

export default locators;