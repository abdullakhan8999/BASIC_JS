// 2. Write a program to get input (‘How are you’) and by default, it should be good in the prompt text
// box.
const sayHello1 = () => {
    let person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
        document.getElementById("demo").innerHTML =
            "Hello " + person + "! How are you today?";
    }
}

