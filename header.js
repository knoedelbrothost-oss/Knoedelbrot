function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
}

function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=0; path=/';
}

function bonusAvailable() {
    const bonusEl = document.getElementById("bonus");
    const normalEl = document.getElementById("normal");

    if (!bonusEl || !normalEl) return;

    if (getCookie("bonus") !== null) {
        bonusEl.style.display = "block";
        normalEl.style.display = "none";
    } else {
        bonusEl.style.display = "none";
        normalEl.style.display = "block";
    }
}

function initHeader() {
    const loginLink = document.getElementById("loginLink");
    if (!loginLink) return;

    const loginStatus = getCookie("login");

    if (loginStatus === "1") {
        // Benutzer ist eingeloggt → Login-Link durch Profil ersetzen
        loginLink.textContent = "Profil";
        loginLink.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "/profile.html";
        });
    } else {
        // Benutzer ist nicht eingeloggt → Login-Link korrekt setzen
        loginLink.textContent = "Login";
        loginLink.addEventListener("click", function (e) {
            e.preventDefault();

            // Aktuelle Seite merken (z. B. bonusprogramm.html)
            const redirectURL = encodeURIComponent(window.location.href);

            // Weiterleitung direkt zu auth.knödelbrot.de mit Redirect-Parameter
            window.location.href = "https://auth.knödelbrot.de/login.html?redirect=" + redirectURL;
        });
    }

    // Menü-Toggle (Mobile)
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
}
