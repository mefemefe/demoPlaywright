const BasePage = require('./basePage');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);

        this.usernameTxt = '#username';
        this.passwordTxt = '#password';
        this.loginBtn = '#log-in';
    }

    async navigate() {
        await super.navigate('index.html');
    }

    async login(username, password) {
        await this.page.fill(this.usernameTxt, username);
        await this.page.fill(this.passwordTxt, password);
        await this.page.click(this.loginBtn);
    }
}

module.exports = LoginPage;