'use strict'

const tempToken = {
    Token: 'LEO',
    Balance: 10.250
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_Token')) ?? []

const setLocalStorage = (dbToken) => localStorage.setItem('db_Token', JSON.stringify(dbToken))

const createToken = (token) =>{
    //Pegar informações do banco de dados e transformar em um JSON
    const dbToken = getLocalStorage()

    //Armazena na variável Token
    dbToken.push(token)

    //Manda a nova informação para o Banco
    setLocalStorage(dbToken)
}

//READ
const readToken = () => getLocalStorage()

//UPDATE
const updateToken = (index, token) => {
    const dbToken = readToken()
    dbToken[index] = token
    setLocalStorage(dbToken)
}

//DELETE
const deleteToken = (index) =>{
    const dbToken = readToken()
    dbToken.splice(index, 1)
    setLocalStorage(dbToken)
}

let btn = document.querySelector('#buttonSave')

if(btn){
    btn.addEventListener('click', function(){
        let field_Token = document.querySelector('#field_Token').value
        let field_Balance = document.querySelector('#field_Balance').value
        if(field_Token == "" || field_Balance == ""){
            alert('Fill in all fields')
        }else{
        const tempToken = {
            Token: `${field_Token}`,
            Balance: `${field_Balance}`
        }
        createToken(tempToken)     
        document.querySelector('#field_Token').value = ''
        document.querySelector('#field_Balance').value = ''
    }
    })
}