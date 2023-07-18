startProgram();

function startProgram(){
    let username = 'Aldo';
    let age = 23;

    happyBirthday(username, age);
}


//diatas ini adalah argument
//dibawah ini mesti passing the parameter biar nyambung
//karena variable nya ga bisa kedetek kalo didalam breces function lain



function happyBirthday(username, age){
    console.log("Happy birthday to you")
    console.log("Happy birthday to you")
    console.log("Happy birthday dear ", username)
    console.log("Happy birthday to you")
    console.log("You are, ", age, " years old")
}
