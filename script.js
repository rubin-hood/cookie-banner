// Auskommentieren bzw. anpassen je nach Geschmack:
// -> Wahlweise Local Storage oder Cookies verwenden.
// Hier verwenden wir beispielhaft Local Storage:

const cookieBanner = document.getElementById("cookieBanner");
const acceptCookieBtn = document.getElementById("acceptCookieBtn");
const localStorageKey = "cookieConsentAccepted";

// Funktion, um zu prüfen, ob der User bereits zugestimmt hat
function hasUserConsented() {
  // Schauen, ob localStorage-Eintrag vorhanden ist (true/false)
  return localStorage.getItem(localStorageKey) === "true";
}

// Funktion, um das Banner anzuzeigen bzw. auszublenden
function toggleBanner() {
  if (hasUserConsented()) {
    // User hat zugestimmt, Banner ausblenden
    cookieBanner.classList.add("cookie-banner--hidden");
  } else {
    // User hat noch nicht zugestimmt, Banner anzeigen
    cookieBanner.classList.remove("cookie-banner--hidden");
  }
}

// Klick auf den Akzeptieren-Button
acceptCookieBtn.addEventListener("click", () => {
  localStorage.setItem(localStorageKey, "true");
  toggleBanner();
});

// Beim Laden der Seite prüfen, ob Banner gezeigt werden muss
document.addEventListener("DOMContentLoaded", toggleBanner);
