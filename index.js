console.log("working");

//Q1.

function a1(){
    console.log("hello");
}
a1();

//Q2.

function add(a,b){
    console.log("Sum of 3,4 is ",a+b);
}
add(3,4);

//Q3.

let myfunction = (a,b)=> console.log(a*b);
myfunction(6,9);

//Q4.

var x=21;
var girl = function(){
    console.log(x);
    var x=20;
};
girl();

//Q5.

var x=21;
girl();
console.log(x);
function girl(){
    console.log(x);
    var x=20;
};


//Q6.

var x=21;
a();
b();
console.log(a);
a=function(){
    x=20;
    console.log(x);
};
b=function(){
    x=40;
    console.log(x);
};


//Q7.

function factorial(n){
    let fact=1;
    if(n==0 || n==1){
        return fact;
    }
    else{
        for(let i=n;i>=1;i--){
            fact=fact*i;
        }
        return fact;
    }
}
console.log(factorial(7));

