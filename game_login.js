
function addUser() {
 

    //Set "player1_name" using localStorage.setItem() function
	  //Set "player2_name" using localStorage.setItem() function
    player1_name=localStorage.setItem("player1_name");
    player1_name=localStorage.setItem("player2_name");
    localStorage.setItem("player1_name");
    window.location = "game_page.html";
}

