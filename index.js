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
    if (conv1 == "Kilometer/hour (kph)" && conv2 == "Mile/hour (mph)"){
        ans = x * 0.621371111;
    } else if (conv1 == "Kilometer/hour (kph)" && conv2 == "Kilometer/second (km/s)"){
        ans = x / 3600;
    } else if (conv1 == "Kilometer/hour (kph)" && conv2 == "Inch/second (in/s)"){
        ans = x * 10.9361;
    } else if (conv1 == "Kilometer/hour (kph)" && conv2 == "Mach (Ma)"){
        ans = x * 0.000809848;    
    } else if (conv1 == "Kilometer/hour (kph)" && conv2 == "Kilometer/hour (kph)"){
        alert('Units are same')
    // Kph end    

    // Mph start
    } else if (conv1 == "Mile/hour (mph)" && conv2 == "Kilometer/hour (kph)"){
        ans = x / 1.609;
    } else if (conv1 == "Mile/hour (mph)" && conv2 == "Kilometer/second (km/s)"){
        ans = x / 2236.936;
    } else if (conv1 == "Mile/hour (mph)" && conv2 == "Inch/second (in/s)"){
        ans = x * 17.6;
    } else if (conv1 == "Mile/hour (mph)" && conv2 == "Mach (Ma)"){
        ans = x * 0.00130332;    
    } else if (conv1 == "Mile/hour (mph)" && conv2 == "Mile/hour (mph)"){
        alert('Units are same');
    // Mph end

    // Km/s start 
    } else if (conv1 == "Kilometer/second (km/s)" && conv2 == "Kilometer/hour (kph)"){
        ans = x * 3600;
    } else if (conv1 == "Kilometer/second (km/s)" && conv2 == "Mile/hour (mph)"){
        ans = x * 2236.936;
    } else if (conv1 == "Kilometer/second (km/s)" && conv2 == "Inch/second (in/s)"){
        ans = x * 39370.079;
    } else if (conv1 == "Kilometer/second (km/s)" && conv2 == "Mach (Ma)"){
        ans = x * 2.91545;    
    } else if (conv1 == "Kilometer/second (km/s)" && conv2 == "Kilometer/second (km/s)"){
        alert('Units are same');
    //Km/s end 
    
    //In/s start 
    } else if (conv1 == "Inch/second (in/s)" && conv2 == "Kilometer/hour (kph)") {
        ans = x / 10.9361;
    } else if (conv1 == "Inch/second (in/s)" && conv2 == "Mile/hour (mph)") {
        ans = x / 17.6;
    } else if (conv1 == "Inch/second (in/s)" && conv2 == "Kilometer/second (km/s)") {
        ans = x / 39370.079;
    } else if (conv1 == "Inch/second (in/s)" && conv2 == "Mach (Ma)") {
        ans = x / 13503.9;
    } else if (conv1 == "Inch/second (in/s)" && conv2 == "Inch/second (in/s)") {
        alert('Units are same');
    //In/s End

    //Speed of Sound start
    } else if (conv1 == "Mach (Ma)" && conv2 == "Kilometer/hour (kph)") {
        ans = x * 1234.8;
    } else if (conv1 == "Mach (Ma)" && conv2 == "Mile/hour (mph)") {
        ans = x * 767.269;
    } else if (conv1 == "Mach (Ma)" && conv2 == "Kilometer/second (km/s)") {
        ans = x * 0.343;
    } else if (conv1 == "Mach (Ma)" && conv2 == "Inch/second (in/s)") {
        ans = x * 13503.9;
    } else if (conv1 == "Mach (Ma)" && conv2 == "Mach (Ma)") {
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