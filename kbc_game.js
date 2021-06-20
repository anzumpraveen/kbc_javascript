var que_list=["print type(type(int) ","L = ['a','b','c','d']\nprint(''.join(L))","chr(ord('A'))","y = 8\n z = lambda x : x * y\nprint (z(6))"]
var opt_list=[["type 'int'","type 'type'","Error","0"],["Error","None","abcd","[‘a’,’b’,’c’,’d’]"],["A","B","a","Error"],["None of the above","14","64","48"]]
var fifty_list=[["type 'type'","type 'int'"],["None","abcd"],["A","Error"],["None of the above","48"]]
var ans_list=[2,3,1,4]
var sol_list=[1,2,1,2] 
lifelinecount = 0
var readlineSync=require("readline-sync")
function lifeline(index){
    var j=0 
    if(lifelinecount === 0){
        while(j<fifty_list[index].length){
            console.log(`${j+1} ${fifty_list[index][j]}`)
            j++
        }
        var user_ans=readlineSync.questionInt("choose your option")
        lifelinecount++
        if (user_ans==sol_list[index]){
            return true
        }
            
        else{
            return false
        }
    }       
    else{
        console.log('you Already used 5050')
        return "no"
    }
}  
       
function option(index){
    j=0
    while (j<opt_list[index].length){
        console.log(`  ${j+1} ${opt_list[index][j]}`)
        j++
    }     
    var user_ans1=readlineSync.questionInt("choose your options or 5050 lifeline")
    if (user_ans1==ans_list[index]){
        return true
    }    
    if (user_ans1== 5050){
        return(lifeline(index))
    }
    else{
        return false
    }
       
}

function que(){
    index=0
    while (index<que_list.length){
        console.log(`${index+1} ${que_list[index]}`)
        result=option(index)
        if (result == "no"){
            index--

        }
        else if (result == true){
            console.log("Congratulation")
        }  
        else{
            console.log("you Losse !")
            break 
        }
        index++
    }
        
}
    
que()