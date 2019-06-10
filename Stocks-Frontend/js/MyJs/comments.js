//--------------------------------------------------------------------------------------------------

// ADD COMMENTS 

// run these two funtions - firest want to fetch comments
fetchComments()
.then(putCommentsOnPage)

// select the section where i want the new comments to be displayed
const commentSection = document.querySelector('#comment-list')

//run 
function fetchComments(){

    const likesUrl = "http://localhost:3000/comments"


    return fetch(likesUrl)
    .then(r => r.json())

}


function putCommentsOnPage(Comments){
    //  debugger

    commentSection.innerHTML =""
  
    Comments.forEach( function(comment){

        addCommentToUI(comment)

    })
    
}


//-----------------------------------------------------------------------------------------

// ADD EVENT LISTENER TO COMMENT SUBMIT BUTTON

const commentBTN = document.querySelector("#commentSubmit") // select the like button from html
commentBTN.addEventListener('click', pressCommentSubmitBtn) // add event listener to the like button

// displays the comments on user interface
function pressCommentSubmitBtn(event){

    event.preventDefault()
    const nameInput = document.querySelector('#inputName').value
    const commentInput = document.querySelector('#inputComment').value
// debugger
    addCommentToServer(nameInput, commentInput).then(resp => addCommentToUI(resp))
}

// back the comment up with server 

function addCommentToServer(nameInput, commentInput){

 const commentUrl = "http://localhost:3000/comments"
// debugger
return fetch(commentUrl, {  
    method: 'POST',
    headers: {
            'Content-Type': 'application/json'
                },
    body: JSON.stringify({name: nameInput, comment: commentInput})
    }).then(resp => resp.json()) // make sure to pass as json so in the addCommmentToUI function below the data passed is as we need
 

} 

// update comment on UI

function addCommentToUI(data){
    //  debugger

    commentSection.innerHTML += `<hr><li><strong>${data.name}:</strong> <br> ${data.comment}</li><br>
    <button id="edit-comment" data-id=${data.id} class="btn btn-outline-warning btn-sm" type="button" >Edit</button> 
    <button id="delete-comment" data-id=${data.id} class="btn btn-outline-danger btn-sm" type="button" >Delete</button> <br>
    <hr>`
    
    // const commentId = data.id

    // commentEventListener(commentID)
    
    // let commentHr = document.createElement("hr")
    // let commentLi = document.createElement("li")
    // let commentStrong = document.createElement("strong")
    // commentStrong.innerText = `${data.name}:`
    // commentLi.append(commentStrong)
    // let commentBr = document.createElement()

}

//-----------------------------------------------------------------------------------------

// ADD EVENT LISTENER TO COMMENT EDIT BUTTON

function commentEventListener(commentID){
    debugger
}

// editBtns = document.querySelectorAll("#edit-comment")

// editComment = event => {
//     event.preventDefault()
//     debugger
// }