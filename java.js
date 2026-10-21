// let a=10;
// a=12;
// console.log(a);
// console.log(typeof a);


// let b= "eirtheit";
// console.log(typeof b);

// let c=true;
// console.log(typeof c);

// let d;
// console.log(typeof d);

// let e=20;
// e="muskan";
// console.log(typeof e);

// let f="45"
// f=Number (f);
// console.log(typeof f);

// console.log(10+5);
// console.log(10-5);
// console.log(10*5);
// console.log(10/5);
// console.log(10%3);
// console.log(10**5);
// console.log("5"+4);
// console.log("5"-4);
// console.log(10+"5"-4);
// console.log(5==5);
// console.log(5==="5");
// console.log(5=="5");

// let a=15;
// a="muskan";
// for(let i=1;i<=10;i++){
//     console.log(i)
// }

// let a=12;
// do{
//     console.log(a)
//     a++
// }while(a<=20);

// for(i=1;i<=10;i++){
//     if(i==4){
//         continue;
//     }
//     console.log(i);
// }

// for(i=1;i<=10;i++){
//     if(i==8){
//         break;
//     }
//     console.log(i);
// }

// let sum=0;
// while(a!=0){
//     let d=a%d;
//     sum=sum*10+d;
//     a=Math.floor(a/10);
// }
// console.log(sum);

// let a = +prompt("Enter a Number: ");

// for(i = 2; i <= a/2; i++) {

//     if(a % i == 0) {
//         console.log("Not Prime");
//         break;
//     }
//     else {
//         console.log("Prime");
//     }
// }

// let add=(a,b)=>{
//     console.log(a+b)
// }
// add(4,5);

// let add=function(a,b){
//     console.log(a+b);
// }
// add(4,5);

// function add(a, b) {
//     return a + b;
// }
// console.log(add(6, 6));

// let add=(n)=>{
//     console.log(n);
// }
// add(5);

// let add=n=>{
//     return n;
// }
// console.log(add(5));

// let mul=(a,b)=>a*b
// console.log(mul(5,5))

// let student={
//     name: "Muskan Gupta",
//     marks: "99",
//     course: "BCA(AI",
//     city: "Bareilly"
// }
// console.log(student.name);
// student.name="MUSKAN"
// console.log(student.name);
// console.log(student.city="Mumbai")

//explicit
// let student=()=>{
//     return{
//     name: "Muskan Gupta",
//     marks: "99",
//     course: "BCA(AI)",
//     city: "Bareilly"
//     }}
//     console.log(student().course);

// implicit
// let student=()=>({
//     name: "Muskan Gupta",
//     marks: "99",
//     course: "BCA(AI)",
//     city: "Bareilly"
// });
//     console.log(student().course);

// let student = {
//     name: "Muskan Gupta",
//     marks: "99",
//     course: "BCA(AI)",
//     city: "Bareilly",

//     regular:function(){
//         console.log(this.name);
//     }
//     ,
//     arrow:()=>{
//         console.log(this.name)
//     }
// }
// student.regular();
// student.arrow();

//this keyword use
// function student(name,age){
//     this.name=name;
//     this.age=age;
// }
// let student1=new student("radhe",20)
// let student2=new student("kanha",20)

// console.log(student1);
// console.log(student2)

// callback function
// let add = () => {
//     console.log(45);
// };

// let result = (callback) => {
//     console.log(3);
//     callback();
// }
// result(add);


// Callback function
// let add = () => {
//     console.log(45);
// };

// let result = (callback) => {
//     console.log(3);
//     callback();
// };
// result(add);

//regular function callback
// let result=(add)=>{
//     console.log(5)
//     add();
// }
// result(()=>{
//     console.log(45);
// })

// setTimeout(function (){
//     console.log("Muskan")
// },5000)

// for(i=0;i<10;i++){
//     setTimeout(function (){
//     console.log("Muskan")
// },5000)
// }
