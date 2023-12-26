//* Part 1 User first choice

let bankDataBase = [];



let userChoice = prompt(`type "login" to enter to your account || "signup" to creat your account || "change password" to set a new password`);

if (userChoice == `signup`) {
    //* fullname check
    let nom = prompt(`Your full name`)

    while(nom.length < 5) {
        nom = prompt(`your name is not valide / should containe more than 5 characters`)
    }
    let tableau = nom.split(" ");
    for (var i = 0; i < tableau.length; i++) {
        tableau[i] = tableau[i].charAt(0).toUpperCase() + tableau[i].slice(1).toLocaleLowerCase();
    }
    let nom2 = tableau.join(" ");
    console.log(nom2);

    //* email chack
    let email = prompt(`your unique Email`)
    email = email.trim().toLocaleLowerCase();
    console.log(email);
}