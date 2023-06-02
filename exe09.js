// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let question = Number(prompt('Digite um número para checar se é par:'))

let check = question % 2

let message = check == 0? "É um número par" : "Não é um número par"

alert(message)