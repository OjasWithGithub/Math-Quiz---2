function login(){
    player_1 = document.getElementById("Plr_1").value 
    localStorage.setItem("Plr_1_name",player_1);
    player_2 = document.getElementById("Plr_2").value 
    localStorage.setItem("Plr_2_name",player_2);

    window.location = "index.html";
}
