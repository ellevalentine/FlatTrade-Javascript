//--------------------------------------------------------------------------------------------------

// ADD COMMENTS 

// run these two funtions - firest want to fetch comments
fetchUsers()
    .then(putUsersOnPage)

// select the section where i want the new comments to be displayed
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

        let userLI = document.createElement("li")
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
                        stocksModal.innerHTML =`Investements`
                        stocksModal.dataset.toggle = "modal"
                        stocksModal.dataset.target = "#stocksModal"
                        stocksModal.addEventListener('click', () => pressStocksButton(user))

                        userDiv4.append(stocksModal)

        userSection.append(userLI)

        // const updatedArray = userArray.push(user.name)
        })


   

}


const userModalBody = document.querySelector(".user-modal-body")

function pressStocksButton(user){

    userModalBody.innerHTML = `

        <form id="modal-user-form">
            <div class="form-group">    
                <label>Name:</label>
                <textarea id="name-model-${user.id}" type="text" class="form-control" >${user.name} </textarea>
            </div>
            <div class="form-group">
                <label>profit:</label>
                <textarea id="user-model-${user.id}" type="text-area" class="form-control" >${user.profit}</textarea>
            </div>

        

        <div id="userModalBtn" class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button id="modal-save" type="button" class="btn btn-primary">Save changes</button> 
      </div>

      </form>
      `


    
}