//--------------------------------------------------------------------------------------------------

// ADD COMMENTS 

// run these two funtions - firest want to fetch comments
fetchComments()
    .then(putCommentsOnPage)

// select the section where i want the new comments to be displayed
const commentSection = document.querySelector('#comment-list')

//run 
function fetchComments() {

    const likesUrl = "http://localhost:3000/comments"


    return fetch(likesUrl)
        .then(r => r.json())

}


function putCommentsOnPage(Comments) {
    //  debugger

    commentSection.innerHTML = ""

    Comments.forEach(function (comment) {

        addCommentToUI(comment)

    })

}


//-----------------------------------------------------------------------------------------

// ADD EVENT LISTENER TO COMMENT SUBMIT BUTTON

const commentBTN = document.querySelector("#commentSubmit") // select the like button from html
commentBTN.addEventListener('click', pressCommentSubmitBtn) // add event listener to the like button

// displays the comments on user interface
function pressCommentSubmitBtn(event) {

    event.preventDefault()
    const nameInput = document.querySelector('#inputName').value
    const commentInput = document.querySelector('#inputComment').value
    // debugger
    addCommentToServer(nameInput, commentInput)
        .then(resp => addCommentToUI(resp))
}

// back the comment up with server 

function addCommentToServer(nameInput, commentInput) {

    const commentUrl = "http://localhost:3000/comments"
    //  debugger
    return fetch(commentUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameInput,
            comment: commentInput
        })
    }).then(resp => resp.json()) // make sure to pass as json so in the addCommmentToUI function below the data passed is as we need


}

// update comment on UI

function addCommentToUI(data) {

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

    let commentComment = document.createElement("p")
    commentComment.innerText = `${data.comment}` //comment
    commentLi.append(commentComment)


    let commentBr2 = document.createElement("br") // create break

    commentLi.append(commentBr2) // append br

    let commentBr3 = document.createElement("br") // create break

    commentLi.append(commentBr3) // append br

    let editButton = document.createElement("button") // create edit button 
    editButton.id = `edit-comment-${data.id}`
    editButton.className = "btn btn-outline-warning btn-sm"
    editButton.type = "button"
    editButton.innerHTML = `Edit`
    editButton.dataset.toggle = "modal"
    editButton.dataset.target = "#commentModal"
    editButton.dataset.id = data.id

    // inside the modal
    editButton.addEventListener('click', () => pressEditButton(data))

    commentLi.append(editButton) // append edit

    //-----

    let deleteButton = document.createElement("button") // create delete button 
    deleteButton.id = `delete-comment-${data.id}`
    deleteButton.className = "btn btn-outline-danger btn-sm"
    deleteButton.type = "button"
    deleteButton.innerHTML = `Delete`
    deleteButton.addEventListener('click', () => pressDeleteButton(commentID))

    commentLi.append(deleteButton) // append delete

    //modal

    let commentModalDiv = document.createElement("div")
    commentModalDiv.className = "modal fade"
    commentModalDiv.id = "commentModal"
    commentModalDiv.tabindex = "-1"
    commentModalDiv.role = "dialog"
    // commentModal.aria-labelledby="exampleModalLabel" 
    // commentModal.aria-hidden="true"

    commentLi.append(commentModalDiv)

    //-- end of LI

    commentSection.append(commentLi) // append list item to comment section 


    //reset form 
    form = document.querySelector("#comment-form")
    form.reset()

}

//----------------

// ADD EVENT LISTENER FUNCTOINS TO COMMENT EDIT BUTTON

//-------------------------------------------------------

// for EDIT button

const modalBody = document.querySelector('.modal-body')

function pressEditButton(data) {
    
    // let modelNameInput = document.querySelector(`#name-model-${data.id}`).value
    // let modelNameInput = document.querySelector(`#comment-model-${data.id}`).value

    //  debugger
        modalBody.innerHTML = `

        <form id="modal-comment-form">
            <div class="form-group">    
                <label>Name:</label>
                <textarea id="name-model-${data.id}" type="text" class="form-control" >${data.name} </textarea>
            </div>
            <div class="form-group">
                <label>Comment:</label>
                <textarea id="comment-model-${data.id}" type="text-area" class="form-control" >${data.comment}</textarea>
            </div>

        

        <div id="commentModalBtn" class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button id="modal-save" type="button" class="btn btn-primary">Save changes</button> 
      </div>

      </form>
      `

             let commentId = data.id

        modalBody.querySelector("#modal-save").addEventListener('click', (event) => {
            event.preventDefault()

            let nameNew = document.querySelector(`#name-model-${data.id}`).value
            let commentNew = document.querySelector(`#comment-model-${data.id}`).value

    pressModalSave(commentId, nameNew, commentNew)})


      // create save button in model
// const modelButtons = document.querySelector("#commentModalBtn")

//             let SaveBtn = document.createElement("button")
//             SaveBtn.id=`model-save-${data.id}`
//             SaveBtn.type="button"
//             SaveBtn.className="btn btn-primary"
//             SaveBtn.innerText = "Save Changes"

//             modelButtons.append(SaveBtn)

//             let commentId = data.id

//             // these values are not passing the updated values ************************************************
//             let nameNew = document.querySelector(`#name-model-${data.id}`).value
//             let commentNew = document.querySelector(`#comment-model-${data.id}`).value

//             SaveBtn.addEventListener('click', () => pressModalSave(commentId, nameNew, commentNew))


    

}


function pressModalSave(commentId, nameNew, commentNew){

    // debugger
    alert("Update saved!")


    editCommentOnServer(commentId, nameNew, commentNew)
    .then( resp => editCommentOnUI(resp))


}



//----
function editCommentOnServer(commentId, nameNew, commentNew) {

    let commentUrl = `http://localhost:3000/comments/${commentId}`

//    debugger

    return fetch(commentUrl, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: nameNew,
            comment: commentNew
        })
    }).then(resp => resp.json())
 
}

//----

function editCommentOnUI(comment){
    // debugger
    let currentComment = document.querySelector(`#liId-${comment.id}`)
    currentComment.querySelector("strong").innerText = comment.name
    currentComment.querySelector("p").innerText = comment.comment



}

// //----------------------------------------------------

// // for DELETE button

function pressDeleteButton(data) {

    alert("Are you sure you want to delete this comment?")
    // debugger
    deleteCommentFromServer(data)
        .then(deleteCommentFromUI(data))

    //  console.log("delete")
}

//--------
function deleteCommentFromServer(data) {

    const commentURL = `http://localhost:3000/comments/${data}`

    return fetch(commentURL, {
        method: 'DELETE'
    }).then(resp => resp.json())
}

//--------
function deleteCommentFromUI(data) {


    const removeComment = document.querySelector(`#liId-${data}`)
    // debugger
    removeComment.remove()


}