// ----------------------------search bars-----------------------------

function filterStocks(){



    const searchBar = document.querySelector('#stocksSearchBar')
    searchBar.addEventListener('keyup', (e) => {
        let term = e.target.value.toLowerCase()
        let stockItems = document.getElementsByClassName('stocksFilter')
        Array.from(stockItems).forEach((stockItem) => {
            let name = stockItem.textContent
            if (name.toLowerCase().indexOf(term)!= -1) {
                stockItem.style.display = 'inline-block'
            } else {
                stockItem.style.display = 'none'
            }
        })
})

}

function filterUsers(){



    const searchBarUsers = document.querySelector('#userSeachBar')
    searchBarUsers.addEventListener('keyup', (e) => {
        let term = e.target.value.toLowerCase()
        let userItems = document.getElementsByClassName('userFliter')
        Array.from(userItems).forEach((userItem) => {
            let name = userItem.textContent
            if (name.toLowerCase().indexOf(term)!= -1) {
                userItem.style.display = 'inline-block'
            } else {
                userItem.style.display = 'none'
            }
        })
})

}