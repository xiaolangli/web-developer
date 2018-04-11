// Terminología de JavaScript
/*
    
*/

var database = [{
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "henry",
        password: "supersecret"
    },
    {
        username: "pepe",
        password: "supersecret"
    },
    {
        username: "roman",
        password: "supersecret"
    },

];

var newsFeed = [{
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo cool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preeetyy cool!"
    }
];

var userPrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your username?");

function isUserValid(user, pass) {
    for (i = 0; i < database.length; i++) {
        if (user === database[i].username && pass === database[i].password) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, your username and password are incorrect. Please try again after refresh.");
    }
}

signIn(userPrompt, passwordPrompt);