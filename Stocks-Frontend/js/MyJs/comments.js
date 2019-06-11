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
    addCommentToServer(nameInput, commentInput)
    .then(resp => addCommentToUI(resp))
}

// back the comment up with server 

function addCommentToServer(nameInput, commentInput){

 const commentUrl = "http://localhost:3000/comments"
//  debugger
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
      
// put the name comment delete button and edit button all inside the li tag so that we can letter call that li with its id to remove it from UI
let commentID = data.id

//---- LI start
    let commentLi = document.createElement("li") // creating list item tag
    commentLi.id = `liId-${data.id}`

    let commentHr = document.createElement("hr") // horizontial rule
    
    commentLi.append(commentHr) // append hr

        let commentStrong = document.createElement("strong") //name
        commentStrong.innerText = `${data.name}:`
        commentLi.append(commentStrong)

        let commentBr = document.createElement("br") //break
        commentLi.append(commentBr)

        let commentComment = `${data.comment}` //comment
        commentLi.append(commentComment)


    let commentBr2 = document.createElement("br") // create break

    commentLi.append(commentBr2) // append br

    let commentBr3 = document.createElement("br") // create break

    commentLi.append(commentBr3) // append br
 
    let editButton = document.createElement("button") // create edit button 
          editButton.id= `edit-comment-${data.id}`
          editButton.className= "btn btn-outline-warning btn-sm"
          editButton.type="button"
          editButton.innerHTML = `Edit`
          editButton.addEventListener('click', pressEditButton(commentID))


    commentLi.append(editButton) // append edit

    let deleteButton = document.createElement("button") // create delete button 
    deleteButton.id= `delete-comment-${data.id}`
    deleteButton.className= "btn btn-outline-danger btn-sm"
    deleteButton.type="button"
    deleteButton.innerHTML = `Delete`
    deleteButton.addEventListener('click', () => pressDeleteButton(commentID))
 
commentLi.append(deleteButton) // append delete

//-- end of LI

commentSection.append(commentLi) // append list item to comment section 



}

//----------------

// ADD EVENT LISTENER FUNCTOINS TO COMMENT EDIT BUTTON

//-------------------------------------------------------

// for EDIT button

function pressEditButton(data){

    // editCommentOnServer()
    // .then(editCommentOnUI)

console.log("edit")
}

// //----------------------------------------------------

// // for DELETE button

 function pressDeleteButton(data){
 // debugger
     deleteCommentFromServer(data)
     .then(deleteCommentFromUI(data))

    //  console.log("delete")
 }

 //--------
function deleteCommentFromServer(data){

    const commentURL = `http://localhost:3000/comments/${data}`
      
      return fetch(commentURL, {
          method: 'DELETE'
      }).then(resp => resp.json())
  }

//--------
function deleteCommentFromUI(data){



    const removeComment = document.querySelector(`#liId-${data}`)
// debugger
    removeComment.remove()

     
}