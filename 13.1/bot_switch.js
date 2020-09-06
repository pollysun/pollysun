const BYN = 'BYN'
const USD = 'USD'
const EUR = 'EUR'

let currencyName = prompt (` Привет, я бот Беларуского курса валют \n Курс какой валюты вы хотите узнать?`, 'BYN, USD, EUR')

switch (currencyName) {
    case 'BYN':
    case 'белки':
    case 'byn':
        alert (BYN)
        currencyName = prompt (` Привет, я бот Беларуского курса валют \n Курс какой валюты вы хотите узнать?`, 'BYN, USD, EUR')
    break

    
    case 'USD':
    case 'баксы':
    case 'доллары':
        alert (USD)
        currencyName = prompt (` Привет, я бот Беларуского курса валют \n Курс какой валюты вы хотите узнать?`, 'BYN, USD, EUR')
    break

    case 'EUR':
    case 'eur':
        alert (EUR)
        currencyName = prompt (` Привет, я бот Беларуского курса валют \n Курс какой валюты вы хотите узнать?`, 'BYN, USD, EUR')
    break

    default:
        alert ('Перезагрузите страницу и введите валюту')

}

