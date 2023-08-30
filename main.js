function broadCast(functionParameter) {
    functionParameter()
}



function weatherStation(humidity){
    function announceRain() {
        console.log("Grab an umbrella. It's going to rain today.")
    }
    function announceClear() {
        console.log("Grab your shades and sunscreen. It's going to be sunny and hot today.")
    }

    if (humidity >= 95) {
        announceRain();
    } else {
        announceClear();
    }
}

weatherStation(96);
weatherStation(94);