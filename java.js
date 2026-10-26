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

// let arr=[1,2,3,4,5,6]
// arr.forEach((n)=>{
//     console.log(n);
// })

//Rest parameter & argument
// spread syntax (...n)
// function add(...n){               
// let sum=0;
// for(let i=0;i<n.length;i++){
// sum=sum+n[i];
// }
// return sum;
// }
// let result=add(1,2,3,4,5,6);
// console.log(result);

//spread syntax when function calling
// function add(a,b,c,d){
//     console.log(a+b+c+d);
// }
// let m=[20,30,40,50,60];
// add(...m);

// using spread syntax copy & combining array
//copy
// let arr=[10,20,30,40];
// let copy=[...arr];
// //let copy=arr
// copy.push(50);
// console.log(arr);
// console.log(copy);
// //combine
// let num=[90,80,70,60];
// let combine=[...arr,...num];
// let combine1=[arr,num];
// console.log(combine);
// console.log(combine1);

//fin min max using Math 
// let arr=[10,20,50,60,12,5,32];
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

// let student={
//     name:"Kanha",
//     age:20
// }

// let stu={
//     course:"Radhe",
//     age:21
// }
// console.log(student);
// let copy={...student};
// console.log(copy);

// let combine={...student,...stu};
// console.log(combine);

// let students=["muskan","maneesha","sita"];
// let [student1,student2,student3]=students
// console.log(student1);
// console.log(student2);
// console.log(student3);

// let students=["muskan","maneesha","sita"];
// let [student1,student2,student3]=[students[0],students[2],students[1]]
// console.log(student1);
// console.log(student2);
// console.log(student3);

// let arr=[45,57,78]
// sum=0;
// for(i=0;i<arr.length;i++){
//     sum=+arr[i];
// }
// console.log(sum);

//helper function
// function helper(a,b){
// console.log(a+b);
// }
// helper(2,2);

//use push & unshift using array
// let arr=[5,6,7];
// arr.push(48);
// arr.unshift(85);
// console.log(arr);

// let arr1=[1,2,3];
// let arr2=[4,5,6];
// for(let i=0;i<arr2.length;i++){
//     arr1.unshift(arr2[i])
// }
// console.log(arr1);

//Array.isArray use...
// let arr1=45;
// let arr2="Muskan";
// let arr3=[1,2,3,4,5];
// function check(items){
//     if(Array.isArray(items)){
//         return true;
//     }
//     return false;
// }
// console.log(check(arr1))
// console.log(check(arr2))
// console.log(check(arr3))


// let arr=[287,54,655,2,3];
// arr.forEach((n)=>){
//     console.log=arr.map
// }


// String litrals and immutability
// let str = "Hello";
// str[0]='h';
// console.log(str);
// console.log(str[0]);

//template litrals
// let a=10;
// let srt1="hii";
// console.log(`hii ${a}`);

//trim
// let str = "  Mere Kanha  ";
// console.log(str);
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());
// console.log(str.toLocaleUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str.includes("Mere"));
// console.log(str.startsWith("Me"));
// console.log(str.endsWith("nha"));

//Slicing
// let str = "JavaScript";
// console.log(str.slice(0,4));
// console.log(str.substring(2,5));

// let str = "Java Script";
// str=str.split(" ");
// console.log(str);
// console.log(str.join(""));
// console.log(str.split("").reverse().join(""));
// let str1=str;
// let result=str.split("").reverse().join("");
// if(str1===str){
//     console.log("True");
// }else console.log("false");


// let str="Hello";
// let str1=str;
// let result=str.split("").reverse().join("");
// if(str1===str){
//     console.log("True");
// }else console.log("false");

//replace
// let str = "java java java java java ";
// console.log(str.replace("java","Python"));
// console.log(str.replaceAll("java","HTML"));

//I=indexof
// let arr=[1,2,3,4,15];
// let arr1=[5,6,7,8];
// console.log(arr.indexOf(45));
// console.log(arr.indexOf(8));
// console.log(arr.concat(arr1));
// console.log(arr.reverse());

// let arr=[1,2,3];
// let sum=0;
// for(let val of arr){
//     sum=sum+val
// }

// console.log(sum);
// console.log(Math.min(...arr));
// console.log(Math.max(...arr));


//nested arr
// let arr=[[1,2,3],[4,5,6]];
// for(let i=0;i<arr.length;i++){
//     for(let val of arr[i]){
//         console.log(val);
//     }
// }

//ascendin, decending
// let arr=[1,2,3,4,5];
// console.log(arr.sort((a,b)=>b-a));
// console.log(arr.sort((a,b)=>a-b));

//object.......
let student={
    name:"Muskan",
    course:"BCA-AI"
}
console.log(student.name);
console.log(student.course);
console.log(Object.hasOwn(student,"name"));
console.log(Object.hasOwn(student,"age"));