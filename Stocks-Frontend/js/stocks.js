
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
    
    stocksInfo.feed.entry.forEach(function (stockInfo){

        let stockElements = stockInfo.content.$t.split(",")
        let name = stockElements[0]
        let price = stockElements[1]
        let change = stockElements[2]

        stockTable.innerHTML += ` <tr>
        <th scope="row">${counter += 1}</th>
        <td>${name}</td>
        <td>${price}</td>
        <td>${change}</td>

        <td>
            <fieldset>
        <select id = "selColor">
         <option >Select Quantity </option>
         <option>1</option>
         <option>2</option>
         <option>3</option>
         <option>4</option>
         <option>5</option>
         <option>6</option>
         <option>7</option>
        </select>
        </fieldset>
         Cost:£0.00
        
        </td>

        <td><button type="button" class="btn btn-success">Buy</button>
        </td>

      </tr>`
    }
    )

}
// now to run the get stocks function to make the above code work
getStocks()

//--------------------------------------------------------------------------------------------------

// LIKE BUTTON 

//create a like button to like the companies page 

const likeCountDisplay = document.querySelector('#like-count')

function showLikes(){

    const likesUrl = "http://localhost:3000/likes"



    return fetch(likesUrl)
    .then(r => r.json())
    .then(putLikesOnPage)

}

function putLikesOnPage(likes){

    likes.forEach( function(like){

        likeCountDisplay.innerHTML = `Likes: ${like.likecount}`
        

    })

}

showLikes()

//-------------------------------------------------------------------------------------

// add event listener to the like button 

