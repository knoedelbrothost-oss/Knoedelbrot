function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if(parts.length === 2) return parts.pop().split(";").shift();
    return null;
}

function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=0; path=/';
}

function initHeader() {
    const loginLink = document.getElementById("loginLink");

    if(!loginLink) return;

    const loginStatus = getCookie("login");

    if(loginStatus === "1") {
        // Wenn angemeldet: Login zu Logout
        loginLink.textContent = "Logout";
        loginLink.addEventListener("click", function(e){
            e.preventDefault();
            deleteCookie("login");
            deleteCookie("bonus");
            // nach Logout auf Startseite
            window.location.href = "index.html";
        });
    } else {
        // Wenn nicht angemeldet: normaler Login-Link
        loginLink.textContent = "Login";
        loginLink.addEventListener("click", function(e){
            e.preventDefault();
            localStorage.setItem("redirectAfterLogin", window.location.href);
            window.location.href = "login.html";
        });
    }

    // Mobile Menü Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');
    menuToggle.addEventListener("click", function(){
        menu.classList.toggle("active");
    });
}
