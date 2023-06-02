// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let question = Number(prompt('Digite um número para checar se é par:'))

let check = question % 2

let message = check != 0? "É um número ímpar" : "Não é um número ímpar"

alert(message)