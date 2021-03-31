//Calculate Tip
function calculateTip() {
    let billAmt = document.getElementById("billAmount").value;
    let serviceQual = document.getElementById("serviceQual").value;
    tipPercentage = serviceQual / 100;
    let numOfPeople = document.getElementById("peopleamt").value;

    
    //validate input
    if(billAmt < numOfPeople){
      alert("Bill amount cann't be less than number of people!");
      return;
    }
    else if(numOfPeople % 1 != 0){
      alert("Number of people cann't be in decimal points!");
      return;
    }
    else if (billAmt === "" || serviceQual === "" || numOfPeople === "") {
      alert("Please enter values");
      return;
    }
    else if(billAmt <= 0 ){
      alert("Please enter a valid bill amount!");
      return;
    }
    else if(serviceQual <= 0 || serviceQual > 100){
      alert("Please enter the tip percentage between 1 to 100!");
      return;
    }
    else if(numOfPeople < 1){
      alert("Num Of People can not be less than 1!");
      return;
    }
    //Check if the no. people is equal to 1
    else if (numOfPeople == 1) {
      document.getElementById("each").style.display = "none";
      document.getElementById("each1").style.display = "none";
    } 
    else {
      document.getElementById("each").style.display = "block";
      document.getElementById("each1").style.display = "block";
    }
  
    //Calculate tip
    let total = (billAmt * tipPercentage) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //fix two digits after decimal point
    total = total.toFixed(2);
    
    //Calculate total amount to be paid per tip
    let perperson =  (billAmt / numOfPeople);
    //since, total is in string so we need to convert it into number before adding.
    let paid = perperson + parseFloat(total);
    //fix two digits after decimal point
    paid = paid.toFixed(2);

    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    
    //Display the total amout per person needs to pay
    document.getElementById("totalAmoutWithTipPerPerson").style.display = "block";
    document.getElementById("tobepaid").innerHTML = paid;

  }
  
//Hide the tip & total amount - on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("totalAmoutWithTipPerPerson").style.display = "none";
document.getElementById("each1").style.display = "none";
  
//onclick of calculate button - function call
document.getElementById("calculate").onclick = function() {
  calculateTip();
};