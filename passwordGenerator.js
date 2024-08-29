// spread oprerator
var numbers =[1,2,3,4,5];
var names=["lolo","archimedes","Abdallah","sadat"];
let maximum=Math.max(...numbers);
let minimum=Math.min(...numbers);
// let username=["Archimedes","James","Samuel"];
// let nameCharacter=[...username];
// let nameJoined =[...username,...names];
// console.log(maximum);
// console.log(minimum);
// console.log(nameJoined);
// function openFridge(...x){
//     console.log(x);

// } 
// rest parameters
// const food1="sushi";
// const food2="pizza";
// const food3="hanburger";
// openFridge(food1,food2,food3);
// large numbers sumation using rest parameters
function Sum(...numbers){
    let result=0;
    for(let number of numbers){
        result +=number;
    }
    return `your result is ${result}`;
}
const TotalSum=Sum(1,2,3,4);
console.log(TotalSum);
const fullName=(...fullname)=>{
    return fullname.join(" ");
}
console.log(fullName("Abdul","Malik","I"));