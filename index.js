/*Version 01
var T=["Wrong answer","OK","OK","Runtime Error","OK"];
var Results=[1,2,4,5,4];
var points=0;

for (let index = 0; index < T.length; index++) 
{
    debugger;
    const element = T[index];
  if (element==="OK")
    {
        //Results.push("Okay");
        //This is what should be returned in the function
        console.log(element);
        points++;
        
    }
    else
    {
        console.log("Wrong Answer");
    }
    
      var finalScore=points*100/Results.length;
    
}
console.log(finalScore);*/

//Version 02

function solution(T, R) {
    // write your code in JavaScript (Node.js 8.9.4)
    

var points=0;
for (let index = 0; index < T.length; index++) {
    const element = T[index];
    debugger;
    for (let index = 0; index < R.length; index++) 
{
   
    const element = R[index];
  if (element==='OK')
    {
        //Results.push("Okay");
        //This is what should be returned in the function
        //console.log(element);
        points++;
        
    }
    else
    {
        console.log("Wrong Answer");
    }
    
      var finalScore=points*100/T.length;
    
}
return finalScore;

}

}

console.log(solution(['test1a', 'test2', 'test1b', 'test1c', 'test3'], ['Wrong answer', 'OK', 'Runtime error', 'OK', 'Time limit exceeded']));
    
