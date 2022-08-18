window.onload = () => {
    const getLocalStorage = () => JSON.parse(localStorage.getItem('db_Token')) ?? []

    let list = document.querySelector('#contentTokenList')

    const fillContentScreen = () => {
        const storage = getLocalStorage()
        
        storage.forEach((element, index) => {
            list.innerHTML +=`
            <div class="containerInformationsToken">
                <div class="edit">
                    <a href="../editToken/index.html?tokenid=${index}">
                        <img src="../../public/iconEdition.svg" class="iconEdition">
                    </a> 
                    <p>${element.Token}</p>
                </div>
                <p>${element.Balance}</p>
            </div>
            
            `
        });
    }

    fillContentScreen()
}

