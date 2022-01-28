//      Console & Alert     //
alert("Hello World - Alert");
console.log("Hello World - Console");

//      Write the hour      //
let now = new Date();
console.log("Este ora: ", now.getHours(),":", now.getMinutes());


//      Sum 2 numbers & Validate the input      //
let number1 = (prompt("Enter first value:"));
if(parseInt(number1)){
    let number2 = (prompt("Enter second value: "))
    if(parseInt(number2)){
        alert(parseInt(number1)+ parseInt(number2));
    } else{
        alert("error for the second input");
    }
} else{
    alert("error for the first input");
}


//      Write each letter of a word     //
let word = prompt("Enter a word");
for(let i = 0; i<word.length; i++){
    console.log(word[i]);
}


//      Get the number of letters in a word     //
let word2 = prompt("Enter the 2nd word");
let num = 0;
for(let i =0; i<word2.length; i++){
    if(word2[i] !== " "){
        num++;
    }
}

console.log("numarul literelor din cuvantul ", word2," este ", num);


//      Write the reverse of word       //
let word3 = prompt("Enter the 3rd word");
let word3reverse = "";
for(let i = word3.length-1; i>=0; i--){
    if(word3[i] !== " "){
        word3reverse += word3[i];
    }
}
console.log("cuvantul ", word3, " rasturnat, arata: ", word3reverse);


//      Sum of odd numbers      // 
let number3 = prompt("Enter a number"); 
let j=0;
function sum(){
    for(let i=0; i<=number3; i++){
        if(i%2 !== 0){
            j+= i;
        }
    }
    console.log("suma finala este:", j);
}
if(parseInt(number3)){
    sum();
} else{
    alert("Enter a number");
}