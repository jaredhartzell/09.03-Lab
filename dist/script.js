let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", myLineUp);

function myLineUp(event) 
{
    // Prevent the page from standard refresh with the submit button
    event.preventDefault();

    let status = document.querySelector('input[name="status"]:checked').value;
    let gameDate = document.getElementById("gameDate").value;
    let checkedPlayers = document.querySelectorAll('input[name="player"]:checked');

    // We'll use an array to store player selections
    let players = [];

    // Push player to the end of the array, if a checked-player
    for (let player of checkedPlayers) 
    {
        players.push(player.value);
    }

    // Create String
    let lineup = "Status: " + status + ", Date: " + gameDate + ", Players: " + players.join(", ");

    // Print to the console
    console.log(status);
    console.log(gameDate);
    console.log(players);
    console.log(lineup);

    // Print to the webpage
    document.getElementById("lineup").innerHTML = lineup;
}