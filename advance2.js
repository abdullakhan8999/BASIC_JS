// 4) Seetha is working as a professor in a college and she is having 100+ student records and she wants
// to convert student’s names into uppercase. Write a program to help Seetha to Change the student
// name into uppercase.
// Ans:

const changeUppercase = (arr) => {
    let i = 0;
    while (i < arr.length) {
        console.log(arr[i].toUpperCase());
        i++;
    }
}
const names = ["divya", "seetha", "shanmugi", "mohan khan", "mohan tata"];
changeUppercase(names);