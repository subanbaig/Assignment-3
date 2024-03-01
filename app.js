// ********************** Chapter 09-11 ****************************** //

alert("Chapter/9-11")

// Q-1
var city = prompt("Enter your City")
if(city == "Karachi" || city == "karachi"){
    document.write("Welcome to City of Lights <br>")
}
else{
    document.write("Welcome to our city <br>")
}

// Q-2
var gender = prompt("Enter your Gender")
if(gender == "Male" || gender == "male"){
    document.write("Good Morning Sir <br>")
}
else if(gender == "Female" || gender == "female"){
    document.write("Good Morning Ma'am <br>")
}
else{
    document.write("Good Morning <br>")
}

// Q-3
var color = prompt("Enter Traffic Color")
if(color == "Red" || color == "red"){
    document.write("Must Stop <br>")
}
else if(color == "Yellow" || color == "yellow"){
    document.write("Ready TO Move <br>")
}
else if(color == "Green" || color == "green"){
    document.write("Move Now <br>")
}
else{
    document.write("Wrong Color <br>")
}

// Q-4
var fuel = +prompt("Enter Fuel in Litres")
if(fuel <= 0.25){
    document.write("Please refill the fuel in your car <br>")
}
else{
    document.write("Don't need to refill <br>")
}

// Q-5
// a.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// b.
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// c. 
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// e. 
if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

// f. 
if("car" < "cat"){
    alert("car is smaller than cat");
    }

// Q-6
var mathNo = +prompt("Enter Math No.");
var islNo = +prompt("Enter ISL No.");
var scihNo = +prompt("Enter SCI No.");
var totalNo = +prompt("Enter Total No.");

var markObtain=(mathNo+islNo+scihNo);
var perc = (markObtain/totalNo)*100;

var grade; 
if(perc >= 80 && perc <=100){
    grade = "A+ <br>"
}
else if(perc >=70 && perc < 80){
    grade= "A <br>"
}
else if(perc >=60 && perc < 70){
    grade= "B <br>"
}
else(perc >60)(
    grade= "Fail <br>"
)
document.write("<h1>Mark Sheet</h1><br> Total Marks: " + totalNo + "<br>");
document.write("Marks Obtained: " + markObtain+ "<br>");
document.write("Percentage: " + perc + "% <br>");
document.write("Grade: " + grade+ "<br>");

// Q-7
var num = +prompt("Guess any number frm 1-10")
var x=5
if(num == 5){
    alert("Bingo! Correct Answer")
}
else if(num == x+1 || num == x-1 ){
    alert("Close enough to correct answer")
}
else if(num < 5 || num <=10  ){
    alert("Try Again")
}
else{
    alert("wrong number")
}

// Q-8
var num =+prompt("Enter Number")

if(num % 3 == 0){
    document.write(num +" "+"is divisible by 3 <br>")
}
else{
    document.write(num +" "+"is not divisible by 3 <br>")
}

// Q-9
var num =+prompt("Enter Number")

if(num % 2 == 0){
    document.write(num +" "+"is an Even Number. <br>")
}
else(
    document.write(num +" "+"is an Odd Number. <br>")
)

// Q-10
var temp = +prompt("Enter temperature")

if(temp >= 40){
    document.write("It's too hot outside. <br>")
}
else if(temp >= 30){
    document.write("The Weather today is normal. <br>")
}
else if(temp >= 20){
    document.write("Today's! Weather is cool. <br>")
}
else if(temp <= 10 || temp < 20){
    document.write("OMG! Today's Weather is so Cool <br>")
}

// Q-11
var num1 = +prompt("Enter First Number")
var num2 = +prompt("Enter Second Number")
var operation = prompt("Enter Operation (+,-,*,/,%)")
var result
if(operation == "+"){
    result = num1 + num2;
}
else if(operation == "-"){
    result = num1-num2;
}
else if(operation == "*"){
    result = num1*num2;
}
else if(operation == "/"){
    result = num1/num2;
}
else if(operation == "%"){
    result = num1%num2;
}
else{
    document.write("Wrong Operation <br>")
}
document.write("Result ="+ result+"<br><br><br>");

// ********************** Chapter 12-13 ****************************** //

alert("Chapter 12-13");

// Q-1
var char= prompt("Enter Alphabet");

if( (char >= "a" && char <= "z") ){
    document.write(char +" "+"Given input is Lowr case <br>");
}
else if(char >= "A" && char <= "Z"){
    document.write(char+" "+"Given Input is Upper case <br>");
}
else{
    document.write(char +" "+"Invalid Input <br>");
}

// Q-2
var int1 = +prompt("Enter First Number");
var int2 = +prompt("Enter Second Numbwe");
if(int1 > int2){
    document.write(int1+" "+"Is larger <br>");
}
else if(int2 > int1){
    document.write(int2+" "+"Is larger <br>");
}
else if(int1 = int2){
    document.write("Both are Equal <br>");
}
else{
    document.write("Worng Input <br>");
}

// Q-3
var input= +prompt("Enter any number");
if(input > 0){
    document.write(input+" "+"Input is Positive <br>")
}
else if(input < 0){
    document.write(input+" "+"Input is Negative <br>")
}
else if(input == 0){
    document.write(input+" "+"Input is Zero <br>")
}
else{
    document.write("Wrong Input <br>")
}

// Q-4
var input= prompt("Enter Alphabet");

if(input=="a" || input=="e" || input == "i" || input=="o" || input=="u" || input=="A" || input == "E" || input=="I" || input=="O" || input=="U" ){
    document.write("True, input is a vowel <br>")
}
else{
    document.write("False, input is not a vowel <br>")
}

// Q-5
var pass = prompt("Enter Your Password")
var correctPass = ("abc987654")

if(!pass){
    document.write("Please Enter Your Password <br>")
}
else if(pass == correctPass){
    document.write("Correct! The password you entered matches the original password. <br>")
}
else{
    document.write("Wrong Password <br>")
}

// Q-6
var hour = 13; 
var greeting;
if (hour < 18){
    greeting = "Good day";
}
else{
    greeting = "Good evening";
}
document.write(greeting+"<br>")

// Q-7
var time = +prompt("Enter Time in 24hr Format")
if(time >=0 && time < 1200){
    document.write("Good Morning <br><br><br>")
}
else if(time >=1200 && time < 1700){
    document.write("Good Afternoon <br><br><br>")
}
else if(time >=1700 && time < 2100){
    document.write("Good Evening <br><br><br>")
}
else if(time >=2100 && time <= 2359){
    document.write("Good Night <br><br><br>")
}
else{
    document.write("Invalid Format <br><br><br>")
}

// ********************** Chapter 10-14 ****************************** //

alert("CHAPTER 10");

// Q-1
var city ="Karachi";
if(city = "Karahi"){
    console.log("The City Of Light")
}

// Q-2
var x =10;
var y= 10;
if(x===y){
    var z = +prompt("Enter Value of Z")
}
console.log(z)

// Q-3
var zipCode = 10010;
var input = +prompt("Enter your Zip Code")
if(input == zipCode){
    document.write("Karachi <br>")
}
else{
    alert("Please write correct Zip Code")
}

// Q-4
var x=1;
if(x===1){
    x=+prompt("Enter New Value");
}
console.log(x);

alert("CHAPTER 11");

// Q-1
var a=+prompt("Enter Value of a") , b=+prompt("Enter Value of b ");
if(a !== b){
    document.write("a is not equal to b <br>")
}

// Q-2
var num1=20 , num2=10;
if(num1 > num2){
    document.write(num1+" "+"Is larger than "+" "+num2+"<br>")
}

// Q-3
var x=5;
if(x !==10){
    x=10;
    alert("New Value is assigned to variable x")
}

// Q-4
var x=100 , y=250;
if(x !== y){
    alert("Congratulations!")
}

// Q-5
var fName=prompt("Enter Your First Name");
if(fName !== "Suban"){
    alert("No Match")
}

alert("CHAPTER 12");

// Q-1
var a=5 , b=7;
if(a > b){
    alert("Larger Value")
}
else if(a = b){
    alert("Value is Equal")
}
else{
    alert("Smaller Value")
}

// Q-2
var marksObtain= +prompt("Enter Obtain Number") , totalNo= +prompt("Enter Total Number");
var perc = (marksObtain/totalNo)*100;
if(perc >=80 ){
    document.write("A+ <br>")
}
else if(perc >=70){
    document.write("A <br>")
}
else if(perc >=60){
    document.write("B <br>")
}
else if(perc < 60){
    document.write("Fail <br>")
}

// Q-3
var a =10;
if(a===10){
    alert("a is 10")
}
else{
    alert("The correct value of a is____")
}

// Q-4
var city= prompt("Enter your City");
if(city== "Karachi" || city == "karachi"){
    alert("Acknowledging it is Karachi.")
}
else if(city== "Lahore" || city =="lahore"){
    alert("Acknowledging it's Lahore.")
}
else{
    alert("Acknowledging")
}

alert("CHAPTER 13");

// Q-1
var a=7 , b=7 , c=20 , d=20;
if(a == b && c == d){
    alert("Both Are True")
}
else{
    alert("False")
}

// Q-2
var a=5 , b=5 , c=21 ,d=10;
if(a===b && c!==d){
    alert("True")
}
else{
    alert("False")
}

// Q-3
var name="Arsalan";
var age=45;
if((name == "Arsalan" || name== "Hamza") && age <  60){
    alert("Both are right")
}

// Q-4
var x1= 15, x2 = 25;
if (x1 < x2 || x1 > x2) { 
    alert("First variable is less than the second variable or greater than the Second variable,"); 
}

// Q-5
var firstName="Mirza" , lastName="Baig"
var  char1= prompt("Enter First Name") , char2 = prompt("Enter Last name")
if(firstName == char1 && lastName == char2){
    alert("Matched")
}
else{
    alert("Wrong Credentials")
}

alert("CHAPTER 14");

// Q-1
var pass = prompt("Enter your password:");
if (pass !== "") { 
    if (pass.length <= 5) { 
        alert("Password must be greater than 5"); 
    } else { 
        alert("OK"); 
    } 
}
else{
    alert("Password can't be empty")
}

// Q-2
if(a===1){
    if(c==="Max"){
        alert("OK");
    }
}

// Q-3
if(a===1 && c==="Max"){
    alert("OK");
}

// Q-4
var num1 = 10;
var num2 = 10;
if (num1 === num2) {
    if (num1 <= num2) {
        alert("Equal");
    }
}