function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mul(a,b){
    return a*b
}
function div(a,b){
    return a/b
}
function opr(){
    if (sym=="+"){
        console.log(add(user1,user2))
    }
    else if(sym=="-"){
        console.log(sub(user1,user2))
    }
    else if(sym=="*"){
        console.log(mul(user1,user2))
    }
    else if (sym=="/"){
        console.log(div(user1,user2))
    }
}
var readlineSync=require("readline-sync")
var user1=readlineSync.questionInt("enter the numer ")
var user2=readlineSync.questionInt("enter the secons number")
var sym=readlineSync.question("enter the question")
opr(sym)