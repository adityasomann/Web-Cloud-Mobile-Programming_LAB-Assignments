
//First prompt the user to play Rock, paper Scissors
var Input = prompt("Play Rock, Paper and Scissors");
alert("You chose : " + Input);

//The computer choses the values at random--> Assign Rock Paper Scissors each to a set percentage
var Value_ss = Math.random();
if (Value_ss <= 0.35)
{
    Values_ss = "Rock";
}
else if(Value_ss <= 0.65)
{
    Value_ss = "Paper";
}
else
{
    Value_ss = "Scissors";
}
//Prompt the user about what the computer has chosen
alert("Computer chose :" + Value_ss);

//Function comparing the user's choice and the computer's choice
function compareVal(c1,c2) {
    if(c1===c2)
    {
        //Prompt the user that the result is tied.
        return "The result is a tie!";
    }

    if(c1==="Rock")
    {
        if(c2==="Scissors")
        {
            //Prompt the user that rock has won.
            return "Rock Wins";
        }
        else
        {
            //Prompt the user that paper has won.
            return "Paper Wins";
        }
    }

    if(c1==="Paper"){
        if(c2==="Rock"){
            //Prompt the User that Paper has Won.
            return "Paper Wins";
        }
        else{
            //Prompt the User that scissors has won.

            return "Scissors Wins";
        }
    }

    if(c1==="Scissors wins"){
        if(c2==="Rock"){
            //Prompt the user that rock has won.

            return "Rock Wins";
        }
        else{
            //Prompt the user that scissors has won.
            return "Scissors has won";
        }
    }
}

console.log(compareVal(Input,Value_ss));

var c = compareVal(Input,Value_ss);

//Prompting the User the final result.
alert(c);

