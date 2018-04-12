// Terminología de JavaScript
/*
    
*/

// var database = [{
//         username: "andrei",
//         password: "supersecret"
//     },
//     {
//         username: "henry",
//         password: "supersecret"
//     },
//     {
//         username: "pepe",
//         password: "supersecret"
//     },
//     {
//         username: "roman",
//         password: "supersecret"
//     },

// ];

// var newsFeed = [{
//         username: "Bobby",
//         timeline: "So tired from all that learning!"
//     },
//     {
//         username: "Sally",
//         timeline: "Javascript is sooooo cool!"
//     },
//     {
//         username: "Mitch",
//         timeline: "Javascript is preeetyy cool!"
//     }
// ];

// var userPrompt = prompt("What's your username?");
// var passwordPrompt = prompt("What's your username?");

// function isUserValid(user, pass) {
//     for (i = 0; i < database.length; i++) {
//         if (user === database[i].username && pass === database[i].password) {
//             return true;
//         }
//     }
//     return false;
// }

// function signIn(user, pass) {
//     if (isUserValid(user, pass)) {
//         console.log(newsFeed);
//     } else {
//         alert("Sorry, your username and password are incorrect. Please try again after refresh.");
//     }
// }

// signIn(userPrompt, passwordPrompt);

var ul = document.getElementById("ul");
var userInput = document.getElementById("input");
var enter = document.getElementById("enter");

function inputLength() {
    return userInput.value.length;
}

function listItem() {
    var li = document.createElement("li");
    li.className = "list-item";
    li.addEventListener("click", done);
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = "";

    function done() {
        li.classList.toggle("done");
    }

    var liClass = document.getElementsByClassName("list-item");
    var i;
    for (let i = 0; i < liClass.length; i++) {
        var button = document.createElement("button");
        var txt = document.createTextNode("close");
        button.className = "uk-close uk-button uk-button-danger uk-margin-left";
        button.appendChild(txt);
        liClass[i].appendChild(button);
    }

    var close = document.getElementsByClassName("uk-close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}

function listItemAfterClick() {
    if (inputLength() > 0) {
        listItem();
    }
}

function listItemAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        listItem();
    }
}


enter.addEventListener("click", listItemAfterClick);

userInput.addEventListener("keypress", listItemAfterKeyPress);