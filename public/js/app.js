//* Part 1 User first choice

let bankDataBase = [];



// let userChoice = prompt(`type "login" to enter to your account || "signup" to creat your account || "change password" to set a new password`);

const userSignUp =()=> {
    // //* fullname check
    // let nom = prompt(`Your full name`);
    // while(nom.split(" ").join("").length < 5 ) {
        
    //     nom = prompt(`your name is not valide / should containe more than 5 characters `)
    // };

    // while(nom.includes("*"||"/"||`!` ||"@"||"#"||"$"||"%"||"^"||"&"||"*"||"()"||"_")) {
    //     nom = prompt(`your name is not valide / should not containe numbers or special characters such as : @ / * ,`)
    // };

    // let tableau = nom.split(" ");
    // for (let i = 0; i < tableau.length; i++) {
    //     tableau[i] = tableau[i].charAt(0).toUpperCase() + tableau[i].slice(1).toLocaleLowerCase();
    // }
    // let nom2 = tableau.join(" ");
    // console.log(nom2);

    //* email check

    let email = prompt(`your unique Email`);
    email = email.trim().toLocaleLowerCase();
    if (email === "") {
        email = prompt(`make sure you entered your email`);
    }else if (email.includes(" ")) {
        email = prompt(`avoide using spaces inside email adress`);
    }else if (email.indexOf("@") === -1) {
        email = prompt(`use the character "@" to complete you email`)
    }

    console.log(email);

    // let age = prompt(`Enter your age please`).trim();
    // age = 
    // console.log(age);
}
userSignUp()