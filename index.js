export {};
import inquirer from "inquirer";

const answers= await inquirer.prompt(
    [
{
        type : "number",
        name : "numberOne",
        message:"Enter first number:"
},
{
    type : "number",
    name : "numberTwo",
    message:"Enter second number:"
},
{
    type : "list",
    name : "operator",
    choices:["+","-","*","/"],
    message:"Choose Operator:"
},
    ]
);


var numberOne = answers.numberOne, numberTwo = answers.numberTwo, operator = answers.operator;


if(numberOne&&numberTwo&&operator)
{

    var result=0;
    if(operator==="+")
    {
        result=numberOne+numberTwo;
    }
    else if(operator==="-")
    {
        
            result=numberOne-numberTwo;
    }
    else if(operator==="/")
    {
        
            result=numberOne/numberTwo;
    }
    else if(operator==="*")
    {
        
            result=numberOne*numberTwo;
    }
    console.log("Result:",result);
}
else
{
    console.log("Enter valid input values")
}