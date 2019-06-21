
//------------------------------------------------------------------------------------------

// LIST STOCKS
// fetch and list stocks in table from api

// set and select variable for where I want my stocks to be listed from HTML page
const stockTable = document.querySelector('#stockTable')

// create a function to fetch the stocks from api, put them in json format and run putStocksOnPage fucntion which will be deifned below
function getStocks(){

    const stockURL = "https://spreadsheets.google.com/feeds/list/0AhySzEddwIC1dEtpWF9hQUhCWURZNEViUmpUeVgwdGc/1/public/basic?alt=json"

    return fetch(stockURL)
        .then(r => r.json())

}

async function getStocksAndUsersAndPutStocksOnPage () {
    const stocks = await getStocks()
    const users = await fetchUsers()

// debugger
    putStocksOnPage(stocks, users)
}

// create the function called upon in the fetch which will insert the correct informtion in to the HTMl page where wanted 

function putStocksOnPage(stocksInfo, users_list){
    let counter = 0 // set the counter outside of the forEach loop so it doesnt get reset to 0 each time the loop runs
    let stockIdCounter = 0 
    let x = 0 
    stockTable.innerHTML=""


    stocksInfo.feed.entry.forEach(function (stockInfo){

        // debugger
        let users_listy = users_list
        let stockId = stockIdCounter += 1
        
        let stockElements = stockInfo.content.$t.split(",")
        let name = stockElements[0].split(": ")[1]
        let price = stockElements[1].split(": ")[1]
        let priceNum = parseInt(price)
        let change = stockElements[2].split(": ")[1]
        let changeNum = parseInt(change)    

      let stocksTableTR = document.createElement("tr")

      let stocksTableTH = document.createElement("th")
      stocksTableTH.scope = "row"  
      stocksTableTH.innerHTML = `${counter += 1}`
      stocksTableTR.append(stocksTableTH)

      let stocksTableName = document.createElement("td")
      stocksTableName.innerHTML = `${name}`
      stocksTableName.id = `name-${stockId}`
      stocksTableTR.append(stocksTableName)

      let stocksTableChange = document.createElement("td")
      stocksTableChange.innerHTML=`${priceNum}`
      stocksTableChange.id = `price-${stockId}`
      stocksTableTR.append(stocksTableChange)

      let stocksTablePrice = document.createElement("td")
      stocksTablePrice.innerHTML = `${changeNum}`
      stocksTablePrice.id = `change-${stockId}`
      stocksTableTR.append(stocksTablePrice)

      let stocksQuantity = document.createElement("td")
      let stocksQuantityFieldset = document.createElement("input")
      stocksQuantityFieldset.type="number"
      stocksQuantityFieldset.min= "0"
      stocksQuantityFieldset.onKeyPress=`isInputNumber(event)`
      stocksQuantityFieldset.className = "form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" 
      stocksQuantityFieldset.id=`enter-amount-${stockId}`
      stocksQuantityFieldset.placeholder="Enter amount..."
      let stocksCost = document.createElement("h5")
      stocksCost.innerHTML = ` Cost:£${priceNum/100}`
      stocksQuantity.append(stocksQuantityFieldset)
      stocksQuantity.append(stocksCost)
    
      stocksTableTR.append(stocksQuantity)

      let stockUser = document.createElement("td")
      stockUser.id="userDropDown"
      let userSelect = document.createElement("select")
      userSelect.id = `userSelect-${x += 1}`

      users_listy.forEach(x => {
        //   debugger
        const option = document.createElement('option')
        option.innerText = x.name
        option.value = x.id
        userSelect.append(option)

    })


      stockUser.append(userSelect)
      stocksTableTR.append(stockUser)

      
      let stockBuy= document.createElement("td")
      let stockBuyBTN= document.createElement("button")
      stockBuyBTN.type="button"
      stockBuyBTN.className = "btn btn-success"
      stockBuyBTN.innerHTML= `Buy`
      stockBuyBTN.addEventListener('click', () => createStock(stockId))
      stockBuy.append(stockBuyBTN)
      stocksTableTR.append(stockBuy)
      

      stockTable.append(stocksTableTR)
    }
    
    )

    // adduserList(users)


}



// now to run the get stocks function to make the above code work
getStocksAndUsersAndPutStocksOnPage()


function isInputNumber(event){

    var x = String.fromCharCode(event.which)

    if(!(/[0-9]/.test(x))){
        alert("Please input a whole number.")
        event.preventDefault()
    }

}

//------------------------------------------------------------------------------------------

function createStock(stockId){

    alert("Added to portfolio")

    let name = document.querySelector(`#name-${stockId}`).innerText
    let price = parseFloat( document.querySelector(`#price-${stockId}`).innerText)
    let change = parseFloat( document.querySelector(`#change-${stockId}`).innerText)
    let quan =parseFloat( document.querySelector(`#enter-amount-${stockId}`).value)
    let userid = parseInt(document.querySelector(`#userSelect-${stockId}`).value)

    // createStockOnServer(name, price, change, quan, userid)

    // const stockstUrl = "http://localhost:3000/stocks"

    return fetch("http://localhost:3000/stocks", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            price: price,
            change: change,
            quantity: quan,
            user_id: userid
        })
    }).then(resp => resp.json())


   
    debugger

}