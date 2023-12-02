// pobranie referencji do formularza logowania, przycisku logowania i wiadomosci bledu
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// nasluchiwanie zdarzen przycisku logowania
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
  // pobranie wartosci z pol logowania (login i haslo)
    const username = loginForm.username.value;
    const password = loginForm.password.value;

  // sprawdzenie, czy obie wartosci sa puste
  // jezeli sa puste, wyswietla sie komunikat o poprawnym logowaniu
  // i przeladowuje sie strona, w przeciwnym wypadku wyswietla sie blad
    if (username === "" && password === "") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
