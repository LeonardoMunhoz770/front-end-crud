window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const idToken = urlParams.get("tokenid")
    const getLocalStorage = () => JSON.parse(localStorage.getItem('db_Token')) ?? []

    
    let balance = document.querySelector('#balance')

    const fillContentScreen = () => {
        const storage = getLocalStorage()
        const filteredToken = storage.find((item, index) => index == idToken)
        var token = document.querySelector('#token').value = filteredToken.Token
        var balance = document.querySelector('#balance').value = filteredToken.Balance
    }
    
    fillContentScreen()

    const setLocalStorage = (dbToken) => localStorage.setItem('db_Token', JSON.stringify(dbToken))
    const readToken = () => getLocalStorage()

    const deleteToken = (index) =>{
        const dbToken = readToken()
        dbToken.splice(index, 1)
        setLocalStorage(dbToken)
    }
    
    let btnRemove = document.querySelector("#removeToken")
    
    if(btnRemove){
        btnRemove.addEventListener('click', function(){
            deleteToken(idToken)
            let token = document.querySelector('#token').value = ""
            let balance = document.querySelector('#balance').value = ""
        })
    }

    const updateToken = (index, token, balance) => {
        const dbToken = readToken()
        dbToken[index] = token, balance
        setLocalStorage(dbToken)
    }
    

    let btnEdit = document.querySelector('#saveEditToken')

    if(btnEdit){
        btnEdit.addEventListener('click', function(){
            var token = document.querySelector('#token').value 
            var balance = document.querySelector('#balance').value
            const dbToken = readToken()
            dbToken[idToken].Balance = balance
            dbToken[idToken].Token = token
            setLocalStorage(dbToken)
        })
    }
}

