const prompt = require('prompt-sync')()



async function chatbotAi(){
    console.log("Hello, Which location do you need the weather for?")
    let isRunning = true

    while(isRunning){
        console.log("Pick A Location")
        console.log("1. New York City, New York")
        console.log("2. Boston, MA")
        console.log("3. London, UK")
        let locationChoice = prompt("Enter Option Here:>")

        if(locationChoice === "1"){
            weatherApiNY()
            isRunning = false
        } else if(locationChoice === "2"){
            isRunning = false
            weatherApiBoston()
            isRunning = false
        }else if(locationChoice === "3"){
            weatherApiLondon()
            isRunning = false
        }else{
            console.log("Please Pick One Of The Options Available")
            locationChoice = prompt("Enter Option Here:>")
    
        }
    }

}
chatbotAi()
console.log("-")
async function repeatchatBot(){
    let isRunning = true

    while(isRunning){
        console.log("Would You Like To Find Another Locations Weather?")
        console.log("Yes or No")


        if
    }
}

async function weatherApiNY(requestURL){
    let response = await fetch("http://api.weatherstack.com/current?access_key=fdb8a0b75a11eb306257a54d42c99684&query=New York City")
    let data = await response.json()
    console.log(data.location.region)
    console.log(data.location.localtime)
    console.log(data.current.temperature)
    console.log("Picture Of Current Temperature:")
    console.log(data.current.weather_icons[0])

}

async function weatherApiBoston(requestURL){
    let response = await fetch("http://api.weatherstack.com/current?access_key=fdb8a0b75a11eb306257a54d42c99684&query=Boston")
    let data = await response.json()
    console.log(data.location.region)
    console.log(data.location.localtime)
    console.log(data.current.temperature)
    console.log("Picture Of Current Temperature:")
    console.log(data.current.weather_icons[0])
}

async function weatherApiLondon(requestURL){
    let response = await fetch("http://api.weatherstack.com/current?access_key=fdb8a0b75a11eb306257a54d42c99684&query=London")
    let data = await response.json()
    console.log(data.location.region)
    console.log(data.location.localtime)
    console.log(data.current.temperature)
    console.log("Picture Of Current Temperature:")
    console.log(data.current.weather_icons[0])
}
