// Github lInk

// First Function Convert Kilometer to Meter

function kilometerToMeter(kilometer){
    if(kilometer < 0){
        return "Invalid Input. Distance can't be a negative number.";
    }else{
        var meter;
        meter = kilometer*1000;
        return meter;
    }
}

// Second Function Budget Calculator

function budgetCalculator(watch,phone,laptop){
    if(watch < 0 || phone < 0 || laptop < 0){
        return "invalid Input. It can't be negative";
    }
    var watchCost  = watch * 50;    //Each watch cost $50
    var phoneCost = phone * 100;    //Each phone cost $100
    var laptopCost = laptop * 500;  //Each laptop cose $500
    var totalCost = watchCost + phoneCost + laptopCost;
    return totalCost;
}

// Third Function Calculate Hotel Cost second10EachDayCost

function hotelCost(day){
    var first10EachDayCost = 100; 
    var second10EachDayCost = 80;
    var otherDayCost = 50;
    if(day <= 10){
        var cost = day * first10EachDayCost;
    } else if(day <= 20){
        cost = (first10EachDayCost * 10) + ((day - 10) * second10EachDayCost);
    } else {
        cost = (first10EachDayCost * 10) + (second10EachDayCost * 10) + ((day - 20) * otherDayCost);
    }
    return cost;
}

// Fourth Functoin to find the largest string from an array 

function megaFriend (arr){
    if(arr.length == 0 ){
        return "Your Friend list is empty. ";
    }
    var largestElement = arr[0];
    for( var i = 0; i < arr.length; i++){
        var element = arr[i];
        if(element.length > largestElement.length){
            largestElement = element;
        }
    }
    return largestElement;
}
