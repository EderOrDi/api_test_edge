const res = require("express/lib/response");

let url = "https://reqres.in/api/users/"

function connectAPI(req, res) {
    fetch(url).then(res => {
        if (res.ok) {
            console.log('Successful connection');    
        }else{
            console.log('Not connected');
        }
        return res.json()
    }).then((resp) => {})
}
/* Get Users */
async function getUsers(res) {
    let list
    list = await fetch(url).then(res =>{
        return res.json()
    })
    res.send(list)
}

/* Create User */
async function createUser(req, res) {
    let userResponse
    userResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: req.first_name,
            last_name: req.last_name,
            email: req.email,
            avatar: req.avatar
        })
    }).then(res => { return res.json()
    }).catch(error => console.log('ERROR')) 
    res.send(userResponse)
}

async function updateUser(req, res) {
    let userUpdate
    userUpdate = await fetch(url,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: req.first_name,
            last_name: req.last_name,
            email: req.email,
            avatar: req.avatar
        }),    
    })
    .then((response) => response.json())
    res.send(userUpdate) 
}

let urlLogin = "https://reqres.in/api/register"


module.exports = {
    connectAPI,
    getUsers,
    createUser,
    updateUser
}
