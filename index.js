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
    } else if (conv1 == "Kilometer/hour" && conv2 == "Kilometer/hour"){
        alert('Units are same')
    // Kph end    

    // Mph start
    } else if (conv1 == "Mile/hour" && conv2 == "Kilometer/hour"){
        ans = x / 1.609;
    } else if (conv1 == "Mile/hour" && conv2 == "Kilometer/second"){
        ans = x / 2236.936;
    } else if (conv1 == "Mile/hour" && conv2 == "Inch/second"){
        ans = x * 17.6;
    } else if (conv1 == "Mile/hour" && conv2 == "Mach"){
        ans = x * 0.00130332;    
    } else if (conv1 == "Mile/hour" && conv2 == "Mile/hour"){
        alert('Units are same');
    // Mph end

    // Km/s start 
    } else if (conv1 == "Kilometer/second" && conv2 == "Kilometer/hour"){
        ans = x * 3600;
    } else if (conv1 == "Kilometer/second" && conv2 == "Mile/hour"){
        ans = x * 2236.936;
    } else if (conv1 == "Kilometer/second" && conv2 == "Inch/second"){
        ans = x * 39370.079;
    } else if (conv1 == "Kilometer/second" && conv2 == "Mach"){
        ans = x * 2.91545;    
    } else if (conv1 == "Kilometer/second" && conv2 == "Kilometer/second"){
        alert('Units are same');
    //Km/s end 
    
    //In/s start 
    } else if (conv1 == "Inch/second" && conv2 == "Kilometer/hour") {
        ans = x / 10.9361;
    } else if (conv1 == "Inch/second" && conv2 == "Mile/hour") {
        ans = x / 17.6;
    } else if (conv1 == "Inch/second" && conv2 == "Kilometer/second") {
        ans = x / 39370.079;
    } else if (conv1 == "Inch/second" && conv2 == "Mach") {
        ans = x / 13503.9;
    } else if (conv1 == "Inch/second" && conv2 == "Inch/second") {
        alert('Units are same');
    //In/s End

    //Speed of Sound start
    } else if (conv1 == "Mach" && conv2 == "Kilometer/hour") {
        ans = x * 1234.8;
    } else if (conv1 == "Mach" && conv2 == "Mile/hour") {
        ans = x * 767.269;
    } else if (conv1 == "Mach" && conv2 == "Kilometer/second") {
        ans = x * 0.343;
    } else if (conv1 == "Mach" && conv2 == "Inch/second") {
        ans = x * 13503.9;
    } else if (conv1 == "Mach" && conv2 == "Mach") {
        alert('Units are same');    
    //Speed of Sound End

    // Invalid inputs
    } else if (conv1 == "Speed Unit" || conv2 == ""){
        alert('Please input units');
    } else if (conv1 == "" || conv2 == "Speed Unit"){
        alert('Please input units');
    } else {
        alert('Invalid operation')
    }

    document.getElementById("answer").value = ans;
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
        timeAns = c / 730
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