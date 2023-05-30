let user_score = 0;
let computer_score = 0;
let max_score = -1;
let username = "";
let user;
let computer;

document.getElementById("playZone").style.display = "none";
document.getElementById("showChoice").style.display = "none";
document.getElementById("replay").style.display = "none";


document.getElementById("submit").addEventListener("click", function() {
    username = document.getElementById("name").value;
    max_score = document.getElementById("score").value;
    if (max_score == null || max_score == "" || max_score < 2 || max_score > 50)
        alert("Max Score Should be between 2 and 50")
    else if (username == "" || username.length < 3 || username.length > 10)
        alert("The name Should be between 3 and 10 caracters")
    else {
        document.getElementById("inputdiv").style.display = "none";
        document.getElementById("submit").style.display = "none";
        document.getElementById("playZone").style.display = "block";
        document.getElementById("showScore").style.display = "block";
        document.getElementById("showScore").innerHTML = username + " <span style=\"margin-right: 250px;\">" + user_score +"/" + max_score + "</span>" + computer_score + "/" + max_score + " Computer";
    }
    
})

function random_choice () {
    var all_choice = ['rock', 'paper', 'scissors'];
    var random_index = Math.floor(Math.random() * 3);
    return all_choice[random_index];
}

function play_game (user_choice, computer_choice) {
    if (user_choice == computer_choice) {
        return("It's a tie!");
    }
    else if (user_choice == 'rock' && computer_choice == 'paper') {
        return("Computer wins!");
    }
    else if (user_choice == 'rock' && computer_choice == 'scissors') {
        return("You wins!");
    }
    else if (user_choice == 'paper' && computer_choice == 'rock') {
        return("You wins!");
    }
    else if (user_choice == 'paper' && computer_choice == 'scissors') {
        return("Computer wins!");
    }
    else if (user_choice == 'scissors' && computer_choice == 'rock') {
        return("Computer wins!");
    }
    else if (user_choice == 'scissors' && computer_choice == 'paper') {
        return("You wins!");
    }
    else {
        return("Invalid input!");
    }
}

function check_best () {
    if (user_score > computer_score)
        return("user");
    else if (user_score < computer_score)
        return("computer");
    else
        return("tie");
}

function setChoice(choice) {
    let comp = random_choice();
    let res = play_game(choice, comp);
    if (res == "You wins!") {
        user_score++;
    }
    else if (res == "Computer wins!") {
        computer_score++;
    }
    if (check_best() == "user") {
        user = "top";
        computer = "bottom";
    }
    else if (check_best() == "computer") {
        user = "bottom";
        computer = "top";
    }
    else {
        user = computer = "";}

    document.getElementById("showScore").innerHTML = "<span style=\"margin-right: 250px;\" class=\"" + user+ "\">"+ username + " " + user_score +"/" + max_score + "</span><span class=\"" + computer + "\">" + computer_score + "/" + max_score + " Computer </span>";
    document.getElementById("inputBtn").style.display = "none";
    document.getElementById("choose").style.display = "none";
    document.getElementById("showChoice").style.display = "block";
    document.getElementById("showChoice").innerHTML = '<div id="prechild"><h3>'+ username +'</h3><img id="myImage" src="assets/' + choice + '.jpg">' + '<img id="myImage" src="assets/' + comp + '.jpg"><h3>computer</h3></div>';
    
    setTimeout(() => {
        document.getElementById("showChoice").style.display = "none";
        if (user_score >= max_score || computer_score >= max_score) {
            document.getElementById("replay").style.display = "block";
            if (user_score >= max_score)
                document.getElementById("howWin").innerHTML = '<h1>You win!</h1>';
            else
                document.getElementById("howWin").innerHTML = '<h1>You Lose!</h1>';
        }
        else {
            document.getElementById("inputBtn").style.display = "block";
            document.getElementById("choose").style.display = "block";
        }

    }, 2000)
    
}

function playAgain() {
    user_score = 0;
    computer_score = 0;
    document.getElementById("replay").style.display = "none";
    document.getElementById("inputBtn").style.display = "block";
    document.getElementById("choose").style.display = "block";
    document.getElementById("showScore").innerHTML = username + " <span style=\"margin-right: 250px;\">" + user_score +"/" + max_score + "</span>" + computer_score + "/" + max_score + " Computer";
}
