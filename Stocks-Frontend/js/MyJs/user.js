//--------------------------------------------------------------------------------------------------

// ADD userS 

// run these two funtions - firest want to fetch users
fetchUsers()
    .then(putUsersOnPage)

// select the section where i want the new users to be displayed
const userSection = document.querySelector('#userList')

//run 
function fetchUsers() {

    const userUrl = "http://localhost:3000/users"


    return fetch(userUrl)
        .then(r => r.json())

}





  //    <h4>Shoreline</h4>
  //    <p class="text-black-50 mb-0">Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>




function putUsersOnPage(users) {
    //  debugger

    userSection.innerHTML = ""

    // const userArray = []

    users.forEach(function (user) {
// debugger
        // userSection

        addUserToUI(user)

        
        // const updatedArray = userArray.push(user.name)
        })


   

}


//------------------------------- stock model ------------------------------------------
const userModalBody = document.querySelector("#tableBodyX")

function pressStocksButton(user){

    userModalBody.innerHTML =""
 let p = 1

        user.stocks.forEach(stock => {
            
            let stockTR = document.createElement('tr')

    
              
            let row = document.createElement("th")
            // stocksTableTH.scope = "row"  
            row.innerHTML =  `${p++}`
            stockTR.append(row)

            const stockTD1 = document.createElement('td')
            stockTD1.innerText = stock.name
            // stockli.value = stock.id
            stockTR.append(stockTD1)

            const stockTD2 = document.createElement('td')
            stockTD2.innerText = stock.price
            stockTR.append(stockTD2)

            const stockTD3 = document.createElement('td')
            stockTD3.innerText = stock.change
            stockTR.append(stockTD3)

            const stockTD4 = document.createElement('td')
            stockTD4.innerText = stock.quantity
            stockTR.append(stockTD4)

            userModalBody.append(stockTR)

    
        })



}


const userBTN = document.querySelector("#userSubmit") 
userBTN.addEventListener('click', pressUserSubmitBtn) 

function pressUserSubmitBtn(event){
    event.preventDefault()

    const userNameInput = document.querySelector('#inputUserName').value
    const imageURL = document.querySelector('#inputUserImgUrl').value
    
    addUserToServer(userNameInput, imageURL)
        .then(resp => addUserToUI(resp))

  
}

function addUserToServer(userNameInput, imageURL){

    const userUrl = "http://localhost:3000/users"

    return fetch(userUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: userNameInput,
            img_url: imageURL
        })
    }).then(resp => resp.json()) //

}

function addUserToUI(user){



    let userLI = document.createElement("li")
    userLI.className = "userFliter"
    userLI.id = `user-li-${user.id}`
    
        let userDiv1 = document.createElement("div")
        userDiv1.id = `div1-${user.id}`
        userDiv1.className = "row align-items-center no-gutters mb-4 mb-lg-5"
        userLI.append(userDiv1)

            let userDiv2 = document.createElement("div")
            userDiv2.id = `div2-${user.id}`
            userDiv2.className = "col-xl-8 col-lg-7"
            userDiv1.append(userDiv2)

                let userImg = document.createElement("img")
                userImg.className = "img-fluid mb-3 mb-lg-0"
                userImg.id = `userImg-${user.id}`
                userImg.src = `${user.img_url}`
                userImg.alt =""
                userImg.width="200"
                userImg.height="100"
                userDiv2.append(userImg)


            let userDiv3 = document.createElement("div")
            userDiv3.id = `div3-${user.id}`
            userDiv3.className = "col-xl-4 col-lg-5"
            userDiv1.append(userDiv3)

                let userDiv4 = document.createElement("div")
                userDiv4.id = `div4-${user.id}`
                userDiv4.className = "featured-text text-center text-lg-left"
                userDiv3.append(userDiv4)

                    let userName = document.createElement("h4")
                    userName.id = `name-${user.id}`
                    userName.innerHTML =  `${user.name} `
                    userDiv4.append(userName)

                    let userProfit = document.createElement("p")
                    userProfit.id = `profit-${user.id}`
                    userProfit.innerHTML =`Profit: ${user.profit} `
                    userDiv4.append(userProfit)

                    let stocksModal = document.createElement("button")
                    stocksModal.id = `stocks-${user.id}`
                    stocksModal.className = "btn-sm btn-outline-success"
                    stocksModal.innerHTML =`Investements`
                    stocksModal.dataset.toggle = "modal"
                    stocksModal.dataset.target = "#stocksModal"
                    stocksModal.addEventListener('click', () => pressStocksButton(user))

                    userDiv4.append(stocksModal)

                    let editUserButton = document.createElement("button") // create edit button 
                    // editUserButton.id = `edit-user-${user.id}`
                    // editUserButton.className = "btn btn-outline-warning btn-sm"
                    editUserButton.type = "button"
                    editUserButton.innerHTML = `Edit`
                    editUserButton.className = "btn-sm btn-outline-warning"
                    editUserButton.dataset.toggle = "modal"
                    editUserButton.dataset.target = "#editUserModal"
                    editUserButton.dataset.id = user.id
                    editUserButton.addEventListener('click', () => pressEditUSerButton(user))

                    userDiv4.append(editUserButton)

                    let deleteUserButton = document.createElement("button") // create delete button 
                    deleteUserButton.id = `delete-user-${user.id}`
                    deleteUserButton.className = "btn-sm btn-outline-danger"
                    deleteUserButton.type = "button"
                    deleteUserButton.innerHTML = `Delete`
                    deleteUserButton.dataset.toggle = "modal"
                    deleteUserButton.dataset.target = "#deleteUserModal"
                    deleteUserButton.dataset.id = user.id
                    deleteUserButton.addEventListener('click', () => pressDeleteUSerButton(user))

                    userDiv4.append(deleteUserButton) // append delete

    userSection.prepend(userLI)


    getStocksAndUsersAndPutStocksOnPage () 
    // //reset form 
    // userForm = document.querySelector("#user-form")
    // userForm.reset()

}

//--------------------------------- EDIT USER -----------------------------------------------------------

const editUsermodalBody = document.querySelector('.edit-modal-body')


function pressEditUSerButton(user){

    editUsermodalBody.innerHTML = `

    <form id="modal-edit-user-form">
        <div class="form-group">    
            <label>Name:</label>
            <textarea id="user-name-model-${user.id}" type="text" class="form-control" >${user.name} </textarea>
        </div>
        <div class="form-group">
            <label>Enter New Image URL:</label>
            <textarea id="image-model-${user.id}" type="text-area" class="form-control" >${user.img_url}</textarea>
        </div>

    

    <div id="userEditModalBtn" class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    <button id="modal-save-user" type="button" class="btn btn-primary">Save changes</button> 
    </div>

  </form>
  `

         let userID = user.id

        editUsermodalBody.querySelector("#modal-save-user").addEventListener('click', (event) => {
        event.preventDefault()

        let nameUserNew = document.querySelector(`#user-name-model-${user.id}`).value
        let imageNew = document.querySelector(`#image-model-${user.id}`).value

pressModalSave(userID, nameUserNew, imageNew)})

}

function pressModalSave(userID, nameUserNew, imageNew){

    alert("User updated!")


    editUserOnServer(userID, nameUserNew, imageNew)
    .then( resp => editUserOnUI(resp))
}


function editUserOnServer(userID, nameUserNew, imageNew){

    let userURL = `http://localhost:3000/users/${userID}`

    //    debugger
    
        return fetch(userURL, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: nameUserNew,
                img_url: imageNew
            })
        }).then(resp => resp.json())

    

}

function  editUserOnUI(user){

    let currentUser = document.querySelector(`#user-li-${user.id}`)
    currentUser.querySelector("h4").innerText = user.name
    let imgUpdate = currentUser.querySelector("img")
    imgUpdate.src = user.img_url


}


//--------------------------------- DELETE USER -----------------------------------------------------------



function pressDeleteUSerButton(user){

    let deleteUserModal = document.querySelector(".delete-modal-body")

    let quesiton = document.createElement("p")
    quesiton.innerHTML = `Are you sure you want to delete ${user.name}?`
    deleteUserModal.append(quesiton)


}



//--------------------------------


{/* <script> */}

  //pie

  const script = document.createElement("script")

  var ctxP = document.getElementById("pieChart").getContext('2d');
  var myPieChart = new Chart(ctxP, {
    type: 'pie',
    data: {
      labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
      datasets: [{
        data: [300, 50, 100, 40, 120],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
      }]
    },
    options: {
      responsive: true
    }
  })
  
  script.append(myPieChart)

// </script>