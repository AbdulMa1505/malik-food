// const display =document.getElementById("display");
// function appendToDisplay(input){
//     display.value +=input;

// }
// function clear(){
//     display.value="";
// }
// function calculate(){
//     try{
//         display.value=eval(display.value);
//     }
//     catch(error){
//         display.value="error";
//     }
// 
// console.log(document);
// document.title="abdul";
// // document.body.style.backgroundColor="hsl(0,0%,15%)";
// const Element=  document.getElementById("fruits");


// const newFruit = document.createElement("li");
// const mango =document.getElementById("mango");
// newFruit.textContent="StarFruit";
// newFruit.style.backgroundColor="blue";
// newFruit.style.fontStyle="bold";
// // document.body.append(newFruit)
// const allFruits =document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newFruit,allFruits[1]);


// MyEmoji.addEventListener("mouseover ",changeColor);
// const myButton =document.getElementById("myButton");
// myButton.classList.add("enable");
// myButton.classList.remove("enable");
// myButton.addEventListener("mouseover",event=>{
//     event.target.classList.add("hover");
// })
// myButton.addEventListener("mouseout",event=>{
//     event.target.classList.remove("hover")
// })
function WalkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dogWalked =true;
            if(dogWalked){
                resolve("you walk the Dog");

            }
            else{
                reject("you did'nt walk the dog");
            }
        },5000)
    })
}
function cleanKitchen(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const cleanKitchen =true;
        if(cleanKitchen){
            resolve("you clean the kitchen");

        }
        else{
            reject("you did not clean the kitchen");
        }
    },1500)
});
}

function DumpRubbish(){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const dumpRubbish =false;
        if(dumpRubbish){
            resolve("you dumped the rubbish");

        }
        else{
            reject("you've not dumped the rubbish");
        }
       
    },500);
   });
}
// method chaining promises
WalkDog().then(value=>{console.log(value ); return cleanKitchen()
    .then(value=>{console.log(value); return DumpRubbish()
        .then(value=>{console.log(value).catch(error=>console.error(error));

        })})});
async  function doChores(){
   try{
    const walkDogResult = await WalkDog();
    console.log(walkDogResult);
      
    const dumpRubbishResult =await DumpRubbish();
    console.log(dumpRubbishResult);

    const cleanKitchenResult =await cleanKitchen();
    console.log(cleanKitchenResult);
    console.log("you finished all the chores ")
   }
   catch(error){
    console.error(error); 
   }

}


