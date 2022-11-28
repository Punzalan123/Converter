function convertspeed() {
    let inpu = document.getElementById("inp").value;
    x = parseFloat(inpu);
    // let answ = document.getElementById("answer").value;
    let conv1 = document.getElementById("conversions1").value;
    let conv2 = document.getElementById("conversions2").value;

    if (!(x > 0) || x < 0){
        alert('Please enter a valid number');
        return x;
    }
    // Kph start
    if (conv1 == "Kilometer/hour" && conv2 == "Mile/hour"){
        ans = x * 0.621371111;
    } else if (conv1 == "Kilometer/hour" && conv2 == "Kilometer/second"){
        ans = x / 3600;
    } else if (conv1 == "Kilometer/hour" && conv2 == "Inch/second"){
        ans = x * 10.9361;
    } else if (conv1 == "Kilometer/hour" && conv2 == "Mach"){
        ans = x * 0.000809848;    
    }
    // Kph end    

    // Mph start
    else if (conv1 == "Mile/hour" && conv2 == "Kilometer/hour"){
        ans = x * 1.60934;
    } else if (conv1 == "Mile/hour" && conv2 == "Kilometer/second"){
        ans = x / 2236.936;
    } else if (conv1 == "Mile/hour" && conv2 == "Inch/second"){
        ans = x * 17.6;
    } else if (conv1 == "Mile/hour" && conv2 == "Mach"){
        ans = x * 0.00130332;    
    }
    // Mph end

    // Km/s start 
    else if (conv1 == "Kilometer/second" && conv2 == "Kilometer/hour"){
        ans = x * 3600;
    } else if (conv1 == "Kilometer/second" && conv2 == "Mile/hour"){
        ans = x * 2236.936;
    } else if (conv1 == "Kilometer/second" && conv2 == "Inch/second"){
        ans = x * 39370.079;
    } else if (conv1 == "Kilometer/second" && conv2 == "Mach"){
        ans = x * 2.91545;    
    } 
    //Km/s end 
    
    //In/s start 
    else if (conv1 == "Inch/second" && conv2 == "Kilometer/hour") {
        ans = x / 10.9361;
    } else if (conv1 == "Inch/second" && conv2 == "Mile/hour") {
        ans = x / 17.6;
    } else if (conv1 == "Inch/second" && conv2 == "Kilometer/second") {
        ans = x / 39370.079;
    } else if (conv1 == "Inch/second" && conv2 == "Mach") {
        ans = x / 13503.9;
    }
    //In/s End

    //Speed of Sound start
    else if (conv1 == "Mach" && conv2 == "Kilometer/hour") {
        ans = x * 1234.8;
    } else if (conv1 == "Mach" && conv2 == "Mile/hour") {
        ans = x * 767.269;
    } else if (conv1 == "Mach" && conv2 == "Kilometer/second") {
        ans = x * 0.343;
    } else if (conv1 == "Mach" && conv2 == "Inch/second") {
        ans = x * 13503.9;
    }
    //Speed of Sound End

    // Invalid inputs
    else if(conv1 == conv2 && !(conv1 == "Speed Unit" || conv2 == "Speed Unit")) {
        alert('Units are same')
    } else if (conv1 == "Speed Unit" || conv2 == ""){
        alert('Please input units')
    } else if (conv1 == "" || conv2 == "Speed Unit"){
        alert('Please input units')
    } else {
        alert('Invalid operation')
    }

    document.getElementById("answer").value = ans;
}

const clearSpeed = () => {
    document.getElementById("inp").value = '';
    document.getElementById("answer").value = ''; 
}

const convertTime = () => {
    a = document.getElementById('timeConversions1').value;
    b = document.getElementById('timeConversions2').value;
    TimeInput = document.getElementById('timeInput').value;
    c = parseFloat(TimeInput);

    if (!(c > 0)){
        alert('Please enter a valid number');
        return c
    }else if (a == b && !(a == 'Time Unit' || b == 'Time Unit')){
        alert('Units are same');
        return c
    }

    // Millisecond Start
    if(a == 'Millisecond' && b == 'Second'){
        timeAns = c / 1000
    } else if(a == 'Millisecond' && b == 'Minute'){
        timeAns = c / 60000
    } else if(a == 'Millisecond' && b == 'Hour'){
        timeAns = c / 3600000
    } else if(a == 'Millisecond' && b == 'Day'){
        timeAns = c / 86400000
    } else if(a == 'Millisecond' && b == 'Week'){
        timeAns = c / 604800000
    } else if(a == 'Millisecond' && b == 'Month'){
        timeAns = c / 2629800000
    } else if(a == 'Millisecond' && b == 'Year'){
        timeAns = c / 31557600000 
    }
    // Millisecond End

    // Second Start
    else if(a == 'Second' && b == 'Millisecond'){
        timeAns = c * 1000
    } else if(a == 'Second' && b == 'Minute'){
        timeAns = c / 60
    } else if(a == 'Second' && b == 'Hour'){
        timeAns = c / 3600
    } else if(a == 'Second' && b == 'Day'){
        timeAns = c / 86400
    } else if(a == 'Second' && b == 'Week'){
        timeAns = c / 604800
    } else if(a == 'Second' && b == 'Month'){
        timeAns = c / 2629800
    } else if(a == 'Second' && b == 'Year'){
        timeAns = c / 31557600
    }
    // Second End
    
    // Minute Start
    else if(a == 'Minute' && b == 'Millisecond'){
        timeAns = c * 60000
    } else if(a == 'Minute' && b == 'Second'){
        timeAns = c * 60
    } else if(a == 'Minute' && b == 'Hour'){
        timeAns = c / 60
    } else if(a == 'Minute' && b == 'Day'){
        timeAns = c / 1440
    } else if(a == 'Minute' && b == 'Week'){
        timeAns = c / 10080
    } else if(a == 'Minute' && b == 'Month'){
        timeAns = c / 43830
    } else if(a == 'Minute' && b == 'Year'){
        timeAns = c / 525960
    }
    // Minute End

    // Hour Start
    else if(a == 'Hour' && b == 'Millisecond'){
        timeAns = c * 3600000
    } else if(a == 'Hour' && b == 'Second'){
        timeAns = c * 3600
    } else if(a == 'Hour' && b == 'Minute'){
        timeAns = c * 60
    } else if(a == 'Hour' && b == 'Day'){
        timeAns = c / 24
    } else if(a == 'Hour' && b == 'Week'){
        timeAns = c / 168
    } else if(a == 'Hour' && b == 'Month'){
        timeAns = c / 730.5
    } else if(a == 'Hour' && b == 'Year'){
        timeAns = c / 8766
    }
    // Hour End

    // Day Start
    else if(a == 'Day' && b == 'Millisecond'){
        timeAns = c * 86400000
    } else if(a == 'Day' && b == 'Second'){
        timeAns = c * 86400
    } else if(a == 'Day' && b == 'Minute'){
        timeAns = c * 1440
    } else if(a == 'Day' && b == 'Hour'){
        timeAns = c * 24
    } else if(a == 'Day' && b == 'Week'){
        timeAns = c / 7
    } else if(a == 'Day' && b == 'Month'){
        timeAns = c / 30.4375
    } else if(a == 'Day' && b == 'Year'){
        timeAns = c / 365.25
    }
    // Day End
    
    // Week Start
    else if(a == 'Week' && b == 'Millisecond'){
        timeAns = c * 604800000
    } else if(a == 'Week' && b == 'Second'){
        timeAns = c * 604800
    } else if(a == 'Week' && b == 'Minute'){
        timeAns = c * 10080
    } else if(a == 'Week' && b == 'Hour'){
        timeAns = c * 168
    } else if(a == 'Week' && b == 'Day'){
        timeAns = c * 7
    } else if(a == 'Week' && b == 'Month'){
        timeAns = c / 4.34524
    } else if(a == 'Week' && b == 'Year'){
        timeAns = c / 52.1429
    }
    // Week End 

    // Month Start
    else if(a == 'Month' && b == 'Millisecond'){
        timeAns = c * 2629800000
    } else if(a == 'Month' && b == 'Second'){
        timeAns = c * 2629800
    } else if(a == 'Month' && b == 'Minute'){
        timeAns = c * 43830
    } else if(a == 'Month' && b == 'Hour'){
        timeAns = c * 730.5
    } else if(a == 'Month' && b == 'Day'){
        timeAns = c * 30.4375
    } else if(a == 'Month' && b == 'Week'){
        timeAns = c * 4.34524
    } else if(a == 'Month' && b == 'Year'){
        timeAns = c / 12
    }
    // Month End

    // Year Start
    else if(a == 'Year' && b == 'Millisecond'){
        timeAns = c * 31557600000
    } else if(a == 'Year' && b == 'Second'){
        timeAns = c * 31557600
    } else if(a == 'Year' && b == 'Minute'){
        timeAns = c * 525960
    } else if(a == 'Year' && b == 'Hour'){
        timeAns = c * 8766
    } else if(a == 'Year' && b == 'Day'){
        timeAns = c * 365.25
    } else if(a == 'Year' && b == 'Week'){
        timeAns = c * 52.1429
    } else if(a == 'Year' && b == 'Month'){
        timeAns = c * 12
    }
    // Year End
    
    // Invalid inputs start
    else if(a == 'Time Unit' || b == 'Time Unit'){
        alert('Please input units');
        return c
    } else{
        alert('Invalid Operation');
        return c
    }
    // Invalid inputs end

    document.getElementById('timeAnswer').value = timeAns;

}

const clearTime = () => {
    document.getElementById("timeInput").value = '';
    document.getElementById("timeAnswer").value = ''; 
}

const convertLen = () => {
    a = document.getElementById('lenConversions1').value;
    b = document.getElementById('lenConversions2').value;
    lenInput = document.getElementById('lenInput').value;
    c = parseFloat(lenInput);

    if (!(c > 0)){
        alert('Please enter a valid number');
        return c
    }else if (a == b && !(a == 'Length Unit' || b == 'Length Unit')){
        alert('Units are same');
        return c
    }
    
    // Millimeter Start
    if(a == 'Millimeter' && b == 'Centimeter'){
        lenAns = c / 10
    } else if(a == 'Millimeter' && b == 'Decimeter'){
        lenAns = c / 100
    } else if(a == 'Millimeter' && b == 'Meter'){
        lenAns = c / 1000
    } else if(a == 'Millimeter' && b == 'Kilometer'){
        lenAns = c / 1000000
    } else if(a == 'Millimeter' && b == 'Inch'){
        lenAns = c / 25.4
    } else if(a == 'Millimeter' && b == 'Foot'){
        lenAns = c / 304.8
    } else if(a == 'Millimeter' && b == 'Yard'){
        lenAns = c / 914.4
    } else if(a == 'Millimeter' && b == 'Mile'){
        lenAns = c / 1609344
    }
    // Millimeter End

    // Centimeter Start
    else if(a == 'Centimeter' && b == 'Millimeter'){
        lenAns = c * 10
    } else if(a == 'Centimeter' && b == 'Decimeter'){
        lenAns = c / 10
    } else if(a == 'Centimeter' && b == 'Meter'){
        lenAns = c / 100
    } else if(a == 'Centimeter' && b == 'Kilometer'){
        lenAns = c / 100000
    } else if(a == 'Centimeter' && b == 'Inch'){
        lenAns = c / 2.54
    } else if(a == 'Centimeter' && b == 'Foot'){
        lenAns = c / 30.48
    } else if(a == 'Centimeter' && b == 'Yard'){
        lenAns = c / 91.44
    } else if(a == 'Centimeter' && b == 'Mile'){
        lenAns = c / 160934.4
    }
    // Centimeter End

    // Decimeter Start
    else if(a == 'Decimeter' && b == 'Millimeter'){
        lenAns = c * 100
    } else if(a == 'Decimeter' && b == 'Centimeter'){
        lenAns = c * 10
    } else if(a == 'Decimeter' && b == 'Meter'){
        lenAns = c / 10
    } else if(a == 'Decimeter' && b == 'Kilometer'){
        lenAns = c / 10000
    } else if(a == 'Decimeter' && b == 'Inch'){
        lenAns = c / 0.254
    } else if(a == 'Decimeter' && b == 'Foot'){
        lenAns = c / 3.048
    } else if(a == 'Decimeter' && b == 'Yard'){
        lenAns = c / 9.144
    } else if(a == 'Decimeter' && b == 'Mile'){
        lenAns = c / 16093.44
    }
    // Decimeter End

    // Meter Start
    else if(a == 'Meter' && b == 'Millimeter'){
        lenAns = c * 1000
    } else if(a == 'Meter' && b == 'Centimeter'){
        lenAns = c * 100
    } else if(a == 'Meter' && b == 'Decimeter'){
        lenAns = c * 10
    } else if(a == 'Meter' && b == 'Kilometer'){
        lenAns = c / 1000
    } else if(a == 'Meter' && b == 'Inch'){
        lenAns = c * 39.37007874
    } else if(a == 'Meter' && b == 'Foot'){
        lenAns = c * 3.280839895
    } else if(a == 'Meter' && b == 'Yard'){
        lenAns = c * 1.0936132983
    } else if(a == 'Meter' && b == 'Mile'){
        lenAns = c / 1609.344
    }
    // Meter End

    // Kilometer Start
    else if(a == 'Kilometer' && b == 'Millimeter'){
        lenAns = c * 1000000
    } else if(a == 'Kilometer' && b == 'Centimeter'){
        lenAns = c * 100000
    } else if(a == 'Kilometer' && b == 'Decimeter'){
        lenAns = c * 10000
    } else if(a == 'Kilometer' && b == 'Meter'){
        lenAns = c * 1000
    } else if(a == 'Kilometer' && b == 'Inch'){
        lenAns = c * 39370.07874
    } else if(a == 'Kilometer' && b == 'Foot'){
        lenAns = c * 3280.839895
    } else if(a == 'Kilometer' && b == 'Yard'){
        lenAns = c * 1093.6132983
    } else if(a == 'Kilometer' && b == 'Mile'){
        lenAns = c / 1.609344
    }
    // Kilometer End

    // Inch Start
    else if(a == 'Inch' && b == 'Millimeter'){
        lenAns = c * 25.4
    } else if(a == 'Inch' && b == 'Centimeter'){
        lenAns = c * 2.54
    } else if(a == 'Inch' && b == 'Decimeter'){
        lenAns = c * 0.254
    } else if(a == 'Inch' && b == 'Meter'){
        lenAns = c / 39.37007874
    } else if(a == 'Inch' && b == 'Kilometer'){
        lenAns = c / 39370.07874
    } else if(a == 'Inch' && b == 'Foot'){
        lenAns = c / 12
    } else if(a == 'Inch' && b == 'Yard'){
        lenAns = c / 36
    } else if(a == 'Inch' && b == 'Mile'){
        lenAns = c / 63360
    }
    // Inch End

    // Foot Start
    else if(a == 'Foot' && b == 'Millimeter'){
        lenAns = c * 304.8
    } else if(a == 'Foot' && b == 'Centimeter'){
        lenAns = c * 30.48
    } else if(a == 'Foot' && b == 'Decimeter'){
        lenAns = c * 3.048
    } else if(a == 'Foot' && b == 'Meter'){
        lenAns = c * 0.3048
    } else if(a == 'Foot' && b == 'Kilometer'){
        lenAns = c / 3280.839895
    } else if(a == 'Foot' && b == 'Inch'){
        lenAns = c * 12
    } else if(a == 'Foot' && b == 'Yard'){
        lenAns = c / 3
    } else if(a == 'Foot' && b == 'Mile'){
        lenAns = c / 5280
    }
    // Foot End

    // Yard Start
    else if(a == 'Yard' && b == 'Millimeter'){
        lenAns = c * 914.4
    } else if(a == 'Yard' && b == 'Centimeter'){
        lenAns = c * 91.44
    } else if(a == 'Yard' && b == 'Decimeter'){
        lenAns = c * 9.144
    } else if(a == 'Yard' && b == 'Meter'){
        lenAns = c * 0.9144
    } else if(a == 'Yard' && b == 'Kilometer'){
        lenAns = c / 1093.6132983
    } else if(a == 'Yard' && b == 'Inch'){
        lenAns = c * 36
    } else if(a == 'Yard' && b == 'Foot'){
        lenAns = c * 3
    } else if(a == 'Yard' && b == 'Mile'){
        lenAns = c / 1760
    }
    // Yard End    

    // Mile Start
    else if(a == 'Mile' && b == 'Millimeter'){
        lenAns = c * 1609344
    } else if(a == 'Mile' && b == 'Centimeter'){
        lenAns = c * 160934.4
    } else if(a == 'Mile' && b == 'Decimeter'){
        lenAns = c * 16093.44
    } else if(a == 'Mile' && b == 'Meter'){
        lenAns = c * 1609.344
    } else if(a == 'Mile' && b == 'Kilometer'){
        lenAns = c * 1.609344
    } else if(a == 'Mile' && b == 'Inch'){
        lenAns = c * 63360
    } else if(a == 'Mile' && b == 'Foot'){
        lenAns = c * 5280
    } else if(a == 'Mile' && b == 'Yard'){
        lenAns = c * 1760
    }
    // Mile End    

    // Invalid inputs start
    else if(a == 'Length Unit' || b == 'Length Unit'){
        alert('Please input units');
        return c
    } else{
        alert('Invalid Operation');
        return c
    }
    // Invalid inputs end

    document.getElementById('lenAnswer').value = lenAns;
}
const clearLen = () => {
    document.getElementById("lenInput").value = '';
    document.getElementById("lenAnswer").value = ''; 
}

const convertWeight = () => {
    a = document.getElementById('WeightConversions1').value;
    b = document.getElementById('WeightConversions2').value;
    WeightInput = document.getElementById('WeightInput').value;
    c = parseFloat(WeightInput);

    if (!(c > 0)){
        alert('Please enter a valid number');
        return c
    }else if (a == b && !(a == 'Weight Unit' || b == 'Weight Unit')){
        alert('Units are same');
        return c
    }

    // Milligram Start
    if(a == 'Milligram' && b == 'Gram'){
        WeightAns = c / 1000
    } else if(a == 'Milligram' && b == 'Kilogram'){
        WeightAns = c / 1000000
    } else if(a == 'Milligram' && b == 'Ounce'){
        WeightAns = c / 28349.5
    } else if(a == 'Milligram' && b == 'Pound'){
        WeightAns = c / 453592
    } else if(a == 'Milligram' && b == 'Carrat'){
        WeightAns = c / 200
    } else if(a == 'Milligram' && b == 'Ton'){
        WeightAns = c / 1000000000
    }
    // Milligram End

    // Gram Start
    else if(a == 'Gram' && b == 'Milligram'){
        WeightAns = c * 1000
    } else if(a == 'Gram' && b == 'Kilogram'){
        WeightAns = c / 1000
    } else if(a == 'Gram' && b == 'Ounce'){
        WeightAns = c / 28.3495
    } else if(a == 'Gram' && b == 'Pound'){
        WeightAns = c / 453.592
    } else if(a == 'Gram' && b == 'Carrat'){
        WeightAns = c / 0.2
    } else if(a == 'Gram' && b == 'Ton'){
        WeightAns = c / 1000000
    }
    // Gram End

    // Kilogram Start
    else if(a == 'Kilogram' && b == 'Milligram'){
        WeightAns = c * 1000000
    } else if(a == 'Kilogram' && b == 'Gram'){
        WeightAns = c * 1000
    } else if(a == 'Kilogram' && b == 'Ounce'){
        WeightAns = c * 35.273990723
    } else if(a == 'Kilogram' && b == 'Pound'){
        WeightAns = c * 2.2046244202
    } else if(a == 'Kilogram' && b == 'Carrat'){
        WeightAns = c * 5000
    } else if(a == 'Kilogram' && b == 'Ton'){
        WeightAns = c / 1000
    }
    // Kilogram End

    // Ounce Start
    else if(a == 'Ounce' && b == 'Milligram'){
        WeightAns = c * 28349.5
    } else if(a == 'Ounce' && b == 'Gram'){
        WeightAns = c * 28.3495
    } else if(a == 'Ounce' && b == 'Kilogram'){
        WeightAns = c / 35.273990723
    } else if(a == 'Ounce' && b == 'Pound'){
        WeightAns = c / 16
    } else if(a == 'Ounce' && b == 'Carrat'){
        WeightAns = c * 141.7475
    } else if(a == 'Ounce' && b == 'Ton'){
        WeightAns = c / 35273.990723
    }
    // Ounce End

    // Pound Start
    else if(a == 'Pound' && b == 'Milligram'){
        WeightAns = c * 453592
    } else if(a == 'Pound' && b == 'Gram'){
        WeightAns = c * 453.592
    } else if(a == 'Pound' && b == 'Kilogram'){
        WeightAns = c * 0.453592
    } else if(a == 'Pound' && b == 'Ounce'){
        WeightAns = c * 16
    } else if(a == 'Pound' && b == 'Carrat'){
        WeightAns = c * 2267.96
    } else if(a == 'Pound' && b == 'Ton'){
        WeightAns = c / 2204.6244202
    }
    // Pound End

    // Carrat Start
    else if(a == 'Carrat' && b == 'Milligram'){
        WeightAns = c * 200
    } else if(a == 'Carrat' && b == 'Gram'){
        WeightAns = c * 0.2
    } else if(a == 'Carrat' && b == 'Kilogram'){
        WeightAns = c * 0.0002
    } else if(a == 'Carrat' && b == 'Ounce'){
        WeightAns = c / 141.7475
    } else if(a == 'Carrat' && b == 'Pound'){
        WeightAns = c / 2267.96
    } else if(a == 'Carrat' && b == 'Ton'){
        WeightAns = c / 5000000
    }
    // Carrat End

    // Ton Start
    else if(a == 'Ton' && b == 'Milligram'){
        WeightAns = c * 1000000000
    } else if(a == 'Ton' && b == 'Gram'){
        WeightAns = c * 1000000
    } else if(a == 'Ton' && b == 'Kilogram'){
        WeightAns = c * 1000
    } else if(a == 'Ton' && b == 'Ounce'){
        WeightAns = c * 35273.990723 
    } else if(a == 'Ton' && b == 'Pound'){
        WeightAns = c * 2204.6244202
    } else if(a == 'Ton' && b == 'Carrat'){
        WeightAns = c * 5000000
    }
    // Ton End


    // Invalid inputs start
    else if(a == 'Weight Unit' || b == 'Weight Unit'){
        alert('Please input units');
        return c
    } else{
        alert('Invalid Operation');
        return c
    }
    // Invalid inputs end
    document.getElementById('WeightAnswer').value = WeightAns;
}

const clearWeight = () => {
    document.getElementById("WeightInput").value = '';
    document.getElementById("WeightAnswer").value = ''; 
}

const convertTemp = () => {
    a = document.getElementById('tempConversions1').value;
    b = document.getElementById('tempConversions2').value;
    tempInput = document.getElementById('tempInput').value;
    c = parseFloat(tempInput);

    if (!(c > 0)){
        alert('Please enter a valid number');
        return c
    }else if (a == b && !(a == 'Temperature Unit' || b == 'Temperature Unit')){
        alert('Units are same');
        return c
    }

    // Celsius Start
    if(a == 'Celsius' && b == 'Fahrenheit'){
        tempAns = c * (9/5) + 32
    } else if(a == 'Celsius' && b == 'Kelvin'){
        tempAns = c + 273.15
    }
    // Celsius End

    // Fahrenheit Start
    else if(a == 'Fahrenheit' && b == 'Celsius'){
        tempAns = (c - 32) * (5/9)
    } else if(a == 'Fahrenheit' && b == 'Kelvin'){
        tempAns = (c - 32) * (5/9) + 273.15
    }
    // Fahrenheit End

    // Kelvin Start
    else if(a == 'Kelvin' && b == 'Celsius'){
        tempAns = c - 273.15
    } else if(a == 'Kelvin' && b == 'Fahrenheit'){
        tempAns = 1.8 * (c - 273.15) + 32
    }
    // Kelvin End
    
    // Invalid inputs start
    else if(a == 'Temperature Unit' || b == 'Temperature Unit'){
        alert('Please input units');
        return c
    } else{
        alert('Invalid Operation');
        return c
    }
    // Invalid inputs end
    document.getElementById('tempAnswer').value = tempAns;
}

const clearTemp = () => {
    document.getElementById("tempInput").value = '';
    document.getElementById("tempAnswer").value = ''; 
}