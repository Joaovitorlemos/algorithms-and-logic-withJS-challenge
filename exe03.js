// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let script = 23

let check = (typeof script)

let message = check == 'number'? "É um número" : "Não é um número"

alert(message)