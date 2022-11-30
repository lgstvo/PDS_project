const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const by = require('selenium-webdriver').By;
let chromeOptions = { 'args': ['--disable-infobars'] };

const capabilities = webdriver.Capabilities.chrome();
capabilities.set('chromeOptions', chromeOptions);
capabilities.setPageLoadStrategy('normal');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function test() {
    let driver = new webdriver.Builder()
        .withCapabilities(capabilities)
        .usingServer('http://localhost:9515')
        .forBrowser('chrome')
        .build();
    driver.get('http://localhost:3000');

    await sleep(2500);
    const nav = await driver.findElement(by.name('navCadastro'));
    nav.click();
    await sleep(2500);
    const name = await driver.findElement(by.name('formName'));
    const telefone = await driver.findElement(by.name('formTelefone'));
    const email = await driver.findElement(by.name('formEmail'));
    const pwd = await driver.findElement(by.name('formSenha'));
    const pdwConfirm = await driver.findElement(by.name('formSenhaConfirm'));
    const tipo = await driver.findElement(by.name('formTipo'));
    const curriculo = await driver.findElement(by.name('formCurriculo'));
    const check = await driver.findElement(by.name('formTerm'));
    const button = await driver.findElement(by.name('cadastrar'));

    await name.sendKeys('José');
    await telefone.sendKeys('(31)998653245')
    await email.sendKeys('jose_junior@gmail.com')
    await pwd.sendKeys('03049502')
    await pdwConfirm.sendKeys('03049502')
    await tipo.sendKeys('Sou aluno')
    await check.click()
    await sleep(2500);
    await button.click()
    await sleep(1000);
    
    var a = driver.switchTo().alert();
    a.accept();
    await sleep(1000);
    driver.get('http://localhost:3000/login');

    await sleep(1000);
    const id = await driver.findElement(by.id('email'));
    const pwLogin = await driver.findElement(by.id('pwd'));

    await sleep(1000);
    await id.sendKeys('jose_junior@gmail.com')
    await pwLogin.sendKeys('03049502')

    await sleep(1000);
    const button_login = await driver.findElement(by.id('button-login'));

    await button_login.click();
}


test();