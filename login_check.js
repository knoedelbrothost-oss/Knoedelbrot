// login_check.js

// Vordefinierte Benutzer
let users = {
    "niklas": { password: "5-Freunde", bonus: true },
};

// Lade zusätzliche Benutzer
const storedUsers = localStorage.getItem("users");
if(storedUsers){
    const extraUsers = JSON.parse(storedUsers);
    users = { ...users, ...extraUsers };
}

// Prüfen
function checkLogin(username, password) {
    if(users[username] && users[username].password === password){
        return { success: true, bonus: users[username].bonus || false };
    } else {
        return { success: false, bonus: false };
    }
}

// Bonus aktivieren
function activateBonus(username) {
    let all = JSON.parse(localStorage.getItem("users")) || {};
    if(all[username]){
        all[username].bonus = true;
        localStorage.setItem("users", JSON.stringify(all));
    }
    if(users[username]){
        users[username].bonus = true;
    }

    // Cookies aktualisieren
    document.cookie = "bonus=1; path=/";
}
