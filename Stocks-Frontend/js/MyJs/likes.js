//--------------------------------------------------------------------------------------------------
// LIKE BUTTON 

//Display the likes on the page

const likeCountDisplay = document.querySelector('#like-count')


//--------

// run the showLikes function to fetch the likes then run the putLikesOnPage function to display the likes

fetchLikes()
.then(putLikesOnPage)
//--------

//fetch the like count from server

function fetchLikes(){

    const likesUrl = "http://localhost:3000/likes"


    return fetch(likesUrl)
    .then(r => r.json())

}

//--------

// display the likes from the server

function putLikesOnPage(likes){
    
     
    likes.forEach( function(like){
        

        likeId = like.id  // why does this only work as a global variable?

        likeCountDisplay.innerHTML = `Likes: ${like.likecount}`
    })
    
    // debugger
}


//--------

// add event listener to the like button 

    const likeBTN = document.querySelector("#likeBTN") // select the like button from html
    likeBTN.addEventListener('click', pressLikeBtn) // add event listener to the like button

//--------
    
// define the pressLikeBtn defined in the event listener for the like button 

// This function will just run a further two functions - first function to update the likes with the server and once that is done then to run a function to update likes on user interface.

        function pressLikeBtn(event){
            
            updateLikeOnServer()
            .then(data => {
                // console.log(data) - can use this to check what data we are getitng in the console 
                updateLikeOnUI(data)
            }) // why doesnt .then work here?
        }

//--------

// defining the function updateLikeOnServer from the pressLikeBtn function

function updateLikeOnServer(){
    let likeCountNum= parseInt(document.querySelector('#like-count').innerText.split(' ')[1])
    likeCountNum ++

    let CommentIdNum = likeId  // This may play up?  defined in putLikeOnPage function
    let commentURl = `http://localhost:3000/likes/${CommentIdNum}`
    // debugger

    return fetch(commentURl, { 
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


//--------

// defining the function updateLikeOnUI from the pressLikeBtn function

function updateLikeOnUI(data){
    // debugger
    // this function runs after the update action in the likes controller goes 
    // put degbugger in here to check what information we are getting parse down as "data" 

    let likeElement = document.querySelector("#like-count") // select where i want to display the updated likecount

    likeElement.innerText = `Likes: ${data.likecount}` // 
    

}

//------------------------------------------------------------------------------------------
