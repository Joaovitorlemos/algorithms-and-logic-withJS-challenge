// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let script = true

let check = (typeof script)

let message = check == 'boolean'? "É um booleano" : "Não é um booleano"

alert(message)