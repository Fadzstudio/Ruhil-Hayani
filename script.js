let currentPage = 1;

let noAttempts = 0;

const maxAttempts = 3;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const attemptText = document.getElementById("attemptText");

const music = document.getElementById("bgMusic");


/* =========================
   PAGE NAVIGATION
========================= */

function nextPage(pageNumber) {

    const current = document.getElementById(`page${currentPage}`);
    const next = document.getElementById(`page${pageNumber}`);

    if (!next) return;

    current.classList.remove("active");

    setTimeout(() => {
        next.classList.add("active");
    }, 100);

    currentPage = pageNumber;

    /*
        Cuba mainkan muzik apabila user
        mula interact dengan website.
    */

    music.play().catch(() => {});
}


/* =========================
   PAGE 3
   BUTTON TAKNAK
========================= */

function runAway() {

    if (noAttempts >= maxAttempts) {
        return;
    }

    noAttempts++;

    noBtn.classList.add("running");

    /*
        Pastikan button tak keluar skrin.
    */

    const padding = 25;

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - buttonWidth - padding;
    const maxY = window.innerHeight - buttonHeight - padding;

    const randomX =
        Math.max(
            padding,
            Math.floor(Math.random() * maxX)
        );

    const randomY =
        Math.max(
            padding,
            Math.floor(Math.random() * maxY)
        );

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    /*
        Tukar mesej setiap kali button lari.
    */

    if (noAttempts === 1) {

        attemptText.innerHTML =
            "Eh tak boleh macam tu 😭";

    } else if (noAttempts === 2) {

        attemptText.innerHTML =
            "Sekali lagi je... 🥺";

    } else if (noAttempts === 3) {

        attemptText.innerHTML =
            "Okay okay... sekarang NAK dah boleh ♡";

        unlockYesButton();
    }
}


/* =========================
   UNLOCK NAK
========================= */

function unlockYesButton() {

    yesBtn.classList.add("unlocked");

    noBtn.style.position = "relative";

    noBtn.style.left = "auto";
    noBtn.style.top = "auto";

    noBtn.style.cursor = "default";
}


/* =========================
   NAK BUTTON
========================= */

function goToPage4() {

    if (noAttempts < maxAttempts) {
        return;
    }

    nextPage(4);
}


/* =========================
   MUSIC
========================= */

/*
    Browser biasanya block autoplay.

    Jadi kita cuba mainkan muzik selepas
    user menekan mana-mana button.
*/

document.addEventListener("click", function () {

    music.play().catch(() => {});

}, { once: true });
