// 3. Assume that the input will be a word with an odd letter count. Print the output as given below.
// start with the middle letter from the first line. Next line two letters from the middle. 
// Continue still you print all letters in the last line. Then start with the first letter and 
// continue with the remaining letters.
// Ans:
// C
// C O
// C O M
// C O M E
// C O M E W
// C O M E W E
// C O M E W E L

const printletters = (str, n) => {
    let i = parseInt(n / 2), output = "";
    while (i < n) {
        output += str[i]
        i++;
    }
    i = 0;
    while (i < parseInt(n / 2)) {
        output += str[i]
        i++;
    }
    i = 0;
    for (i; i < n; i++) {
        let result = ""
        for (let j = 0; j <= i; j++) {
            result += output[j] + " ";
        }
        console.log(result)
    }
}
let str = "WELCOME";
let n = str.length;
printletters(str, n)
str = "abdull";
n = str.length;
printletters(str, n)
