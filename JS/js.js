//functions for Daniel Shiang's CS601 final project


//WORK PAGE FUNCTIONS
//function for quiz1
function cancerQuiz1(){

    let a = parseInt(document.getElementById("input1").value);

    
   if (a > 100 || a < 0) {
        q1.innerHTML = `Your answer of ${a}% is out of bounds. Please enter a number between 1-100`;

    } else if (a < 40 ) {
        q1.innerHTML = `Your answer of ${a}% is a bit low. Hint: It's greater than 38%.`;

    } else if (a > 40){
        q1.innerHTML = `Your answer of ${a}% is a bit high. Hint: It's lower than 42%.`;
        
    } else if (a == 40){
        q1.innerHTML = `Your answer of ${a}% is CORRECT! 40% of Americans will develop cancer in their lifetime.`;
    } else {
        q1.innerHTML = `Please enter a real number, in integer form.`;
        alert("Numbers only between 1-100"); 
    }
    
}

//function for quiz1
function cancerQuiz2(){

    let a = parseInt(document.getElementById("input2").value);

    
   if (a > 100 || a < 0) {
        q2.innerHTML = `Your answer of ${a}% is out of bounds. Please enter a number between 1-100`;

    } else if (a < 20 ) {
        q2.innerHTML = `Your answer of ${a}% is a bit low. Hint: It's greater than 18%.`;

    } else if (a > 20){
        q2.innerHTML = `Your answer of ${a}% is a bit high. Hint: It's lower than 22%.`;
        
    } else if (a == 20){
        q2.innerHTML = `Your answer of ${a}% is CORRECT! 20% of Americans will die of cancer in their lifetime.`;
    } else {
        q2.innerHTML = `Please enter a real number, in integer form.`;
        alert("Numbers only between 1-100"); 
    }
    
}



//MUSIC PRODUCTION PAGE FUNCTIONS
//upvote button on music production page, return DOM message
function upvote(){
    musicresponse.innerHTML = "❤️ RIGHT ON! Let's pray for his return and more hits to come ❤️";
    
    let likes = 0;
    likes++;

    likecount.innerHTML = `+${likes} 🔥🔥🔥`;

    alert("You are a real one!");
}

//downvote button on music production page, return DOM message
function downvote(){
    musicresponse.innerHTML = "Looks like we got a hater here 💩";

    let nolikes = 0;
    nolikes++;

    likecount.innerHTML = `-${nolikes} 👎👎👎`;
}


//reload page button on all pages
function restartFunc(){
        
    while (confirm("Press OK to proceed")){
        if(confirm("You want to restart application?") == true){
            location.reload();
            break;
        }else{
            alert("Thank you for coming by!");
            break;
        }
    }
}