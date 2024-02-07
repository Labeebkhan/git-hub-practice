// let array:string[] = ["Labeeb","khan","zaain"];
// function arrays() {
//     function addvalue(item:string){
//         array.splice(2,0,item);
//         return array;
//     }
//     function removevalue(){
//         array.pop();
//         return array;
//     }
//     return{addvalue,removevalue};
// }
// let hello = arrays();
// console.log(hello.addvalue("Ali"));
// console.log(hello.removevalue());
type cartype = {company:string , isused:string , year:number} 
let car:cartype[] = [{
    company:"Toyota",
    isused:"Used",
    year:2018
},
{
    company:"Honda",
    isused:"New",
    year:2020
},
{
    company:"Ford",
    isused:"used",
    year:2015
}]
for(let i = 0; i<=car.length-1 ;i++){
    console.log(`Company name = ${car[i].company}, And the year of assembly = ${car[i].year}.`);
}