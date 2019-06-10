
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
        .then(putStocksOnPage)

}

// create the function called upon in the fetch which will insert the correct informtion in to the HTMl page where wanted 

function putStocksOnPage(stocksInfo){
    let counter = 0 // set the counter outside of the forEach loop so it doesnt get reset to 0 each time the loop runs
    let stockIdCounter = 0 
    stocksInfo.feed.entry.forEach(function (stockInfo){

        let stockId = stockIdCounter += 1

        let stockElements = stockInfo.content.$t.split(",")
        let name = stockElements[0].split(": ")[1]
        let price = stockElements[1].split(": ")[1]
        let priceNum = parseInt(price)
        let change = stockElements[2].split(": ")[1]
        let changeNum = parseInt(change)

        // let priceSelected = parseFloat(document.querySelector(`#price-${stockId}`).innerText)
        // let amountInput = parseInt(document.querySelector(`#enter-amount-${stockId}`).value)
        // let result = (amountInput * priceSelected)/100
      

//  debugger
        stockTable.innerHTML += ` <tr>
        <th scope="row">${counter += 1}</th>
        <td>${name}</td>
        <td id="price-${stockId}">${priceNum}</td>
        <td>${changeNum}</td>

        <td>
            <fieldset>
            <input type="number" min="0" onKeyPress="isInputNumber(event)" class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="enter-amount-${stockId}" placeholder="Enter amount...">
            </fieldset>
         Cost:£${priceNum/100}
        
        </td>

        <td><button type="button" class="btn btn-success">Buy</button>
        </td>

      </tr>`
    }
    )

}

// now to run the get stocks function to make the above code work
getStocks()


function isInputNumber(event){

    var x = String.fromCharCode(event.which)

    if(!(/[0-9]/.test(x))){
        alert("Please input a whole number.")
        event.preventDefault()
    }

}

//------------------------------------------------------------------------------------------
