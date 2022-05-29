const locators = {

    LOGIN: {
        USER: '[data-test="email"]',
        PSSWD: '[data-test="passwd"]',
        BTN_LOGIN: '.btn'
    },

    MENU: {
        SETTINGS: '[data-test="menu-settings"]',
        ACCOUNT: '[href="/contas"]',
        RESET: '[href="/reset"]'
    },

    ACCOUNTS: {
       NAME: '[data-test="nome"]',
       BTN_SAVE: '.btn',
       XP_BTN_EDIT: "//table//td[contains(., 'Conta teste 2')]/..//i[@class='far fa-edit']"
    },

    MSG: '.toast-message'

}

export default locators;