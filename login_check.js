// login_check.js

// Vordefinierte Benutzer
let users = {
    "niklas": { password: "5-Freunde", bonus: "ultra" },
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
    let bonus = false;
    if (users[username] && users[username].bonus !== false) {
        bonus = users[username].bonus;
    }
    return bonus;
}
