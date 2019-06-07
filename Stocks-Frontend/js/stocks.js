
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

}

function putLikesOnPage(likes){
    // debugger
    likes.forEach( function(like){
        likeCountDisplay.innerHTML = `Likes: ${like.likecount}`
    })
}

showLikes()
.then(putLikesOnPage)

//-------------------------------------------------------------------------------------

    const likeBTN = document.querySelector("#likeBTN") // select the like button from html
    likeBTN.addEventListener('click', pressLikeBtn) // add event listener to the like button
    
//define the pressLikeBtn defined in the event listener for the like button 
    // likesNumber = parseInt(like.likecount)

        function pressLikeBtn(event){
            
            updateLikeOnServer()
            .then(data => {
                console.log(data)
                updateLikeOnUI(data)
            }) // why doesnt .then work here?
        }

function updateLikeOnServer(){
    let likeCountNum= parseInt(document.querySelector('#like-count').innerText.split(' ')[1])
    likeCountNum ++

    return fetch("http://localhost:3000/likes/4", { 
            method: 'PATCH',  // this will then call upon update method in stocks controller - make sure patch is called in application.rb under resources
            headers: {
             'Content-Type': 'application/json',
             "Accept": "application/json"
            },
            body: JSON.stringify({ // here is what we want to send back - so will send back likes to server
             likecount: likeCountNum
                })
            })
    .then(resp => resp.json())
    // .then(console.log)
    }



function updateLikeOnUI(data){
    // this function runs after the update action in the likes controller goes 
    // put degbugger in here to check what information we are getting parse down as "data" 

    let likeElement = document.querySelector("#like-count") // select where i want to display the updated likecount

    likeElement.innerText = `Likes: ${data.likecount}` // 
    

}