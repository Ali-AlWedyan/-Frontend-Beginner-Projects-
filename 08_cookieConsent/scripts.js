const cookieConsent = document.querySelector(".cookie-container");
const cookieConsentButton = document.querySelector(".cookie-container button");
const reset = document.querySelector(".reset");

function isCookie(){
    if(localStorage.getItem("cookieConsent") == "true"){
        cookieConsent.style.display = "none";
        return true;
    }
    cookieConsent.style.display = "flex";
}

cookieConsentButton.addEventListener("click", e =>{
    localStorage.setItem("cookieConsent", "true");
    cookieConsent.style.display = "none";
});

reset.addEventListener("click", e=> {
    localStorage.removeItem("cookieConsent");
    cookieConsent.style.display = "flex";
});


isCookie();