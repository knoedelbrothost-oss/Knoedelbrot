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
    let all = JSON.parse(localStorage.getItem("users")) || {};
    if(all[username]){
        // Bonus bleibt wie gespeichert
        localStorage.setItem("users", JSON.stringify(all));
    }

    // Cookie setzen oder löschen
    let bonusValue = users[username] ? users[username].bonus : false;
    if(bonusValue && bonusValue !== false){
        document.cookie = "bonus=" + bonusValue + "; path=/";
    } else {
        document.cookie = "bonus=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    }
}
