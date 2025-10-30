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
            window.location.href = "https://auth.knödelbrot.de/profile.html";
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


    let pumpkinCount = 10; // Startanzahl der Kürbisse
    const maxPumpkins = 300; // Maximal erlaubte Kürbisse

    function createPumpkins(count) {
        const currentPumpkins = document.querySelectorAll('.pumpkin').length;
        const allowed = Math.min(count, maxPumpkins - currentPumpkins);
        if (allowed <= 0) return;

        for (let i = 0; i < allowed; i++) {
            const pumpkin = document.createElement('div');
            pumpkin.classList.add('pumpkin');
            document.body.appendChild(pumpkin);

            // zufällige Startposition
            const startY = Math.random() * window.innerHeight;
            const duration = 15 + Math.random() * 6; // 15–21 Sekunden
            const size = 50 + Math.random() * 100;  // 50–150px
            pumpkin.style.top = `${startY}px`;
            pumpkin.style.width = `${size}px`;
            pumpkin.style.height = `${size}px`;
            pumpkin.style.animationDuration = `${duration}s`;
            pumpkin.style.animationDelay = `${Math.random() * 5}s`;

            // kleine sinusförmige Auf-und-ab Bewegung
            const wobble = 50 + Math.random() * 100; // maximale Abweichung
            pumpkin.style.setProperty('--y-wobble', `${wobble * Math.sin(Math.random() * Math.PI * 2)}px`);

            pumpkin.addEventListener('click', () => {
                createPumpkins(2);
                pumpkinCount += 2;
            });
        }
    }

    createPumpkins(pumpkinCount);

    setInterval(() => {
        createPumpkins(1);
    }, 1000);

}
