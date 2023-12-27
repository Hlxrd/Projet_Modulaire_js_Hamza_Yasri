//* Part 1 User first choice

let bankDataBase = [{nom : "hamza" , email :"hamzaraja@" ,age :24 , password: 1516171819}];



// let userChoice = prompt(`type "login" to enter to your account || "signup" to creat your account || "change password" to set a new password`);

const userSigningUp =()=> {
    // //* fullname check
        let nom = prompt(`Your full name`);
        while(nom.split(" ").join("").length < 5 ) {
            
            nom = prompt(`your name is not valide / should containe more than 5 characters `)
        };

        while(nom.includes("*"||"/"||`!` ||"@"||"#"||"$"||"%"||"^"||"&"||"*"||"()"||"_")) {
            nom = prompt(`your name is not valide / should not containe numbers or special characters such as : @ / * ,`)
        };

        let tableau = nom.split(" ");
        for (let i = 0; i < tableau.length; i++) {
            tableau[i] = tableau[i].charAt(0).toUpperCase() + tableau[i].slice(1).toLocaleLowerCase();
        }
        nom = tableau.join(" ");
        

    // //* email check

    let email = prompt(`your unique Email`);
    email = email.trim().toLocaleLowerCase();
    if (email === "") {
        email = prompt(`make sure you entered your email`);
    }else if (email.includes(" ")) {
        email = prompt(`avoide using spaces inside email adress`);
    }else if (email.indexOf("@") === -1) {
        email = prompt(`use the character "@" to complete you email`);
    }
    if (bankDataBase.some(newUser => newUser.email === email)) {
        email = (`email already exists please enter a valide email`);
    }

    // //* age check

    let age = parseInt(prompt(`Enter your age please`).trim());
    if (age.length === 0 || age.length >= 3) {
        email = prompt(`please enter a valide age`);
    }
    
    // //* password check
    
    let password = prompt(`Choose a password`);
    password = password.trim();
    if (password.includes(` `) || password.length < 7 || password.includes("*"||"/"||`!` ||"@"||"#"||"$"||"%"||"^"||"&"||"*"||"()"||"_" )== false) {
        password = prompt(`unvalide password . please avoide using spaces , using specific characters or entering less than 7 characters`);
    };

    //* password confirmation
    let confirmPassword = prompt(`please confirme your password`);
if (password == confirmPassword) {
    let newUser = {nom , email , age ,password};
    newUser.money = 2000;
    bankDataBase.push(newUser);
    console.log(bankDataBase);
    
}else if (password != confirmPassword) {
    
    alert(`You have been blocked`);
    userSigningUp();
}
}

let userlogin = []

const userLogingIn = () =>{
let email= prompt(`enter your `)
if (email != bankDataBase[0].nom) {
    userlogin.push(newUser)
    console.log(userlogin);
}
}

const userChoice =()=>{
    //* user choice check
    let userChoice = prompt(`type "login" to enter to your account || "signup" to creat your account || "change password" to set a new password`);

    switch (userChoice) {
        case `signup`:
            userSigningUp()
            break;
    
        case `login`:
            userLogingIn()
            break;
    }
}
userChoice()
