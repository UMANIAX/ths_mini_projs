window.onload = function tellTime(){

    const a = new Date().toLocaleTimeString();
    document.getElementById("clock_div").innerHTML = a;
    setTimeout(tellTime, 1000);
};


