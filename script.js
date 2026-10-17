document.getElementById("f1").textContent = "Formula 1"

const scenarios = [
  {
    track: "Monaco",
    current_lap: 25,
    total_laps: 55,
    position: 3,
    current_tire: "Medium",
    tire_wear: 68,
    weather: "Dry",
    base_lap_time: 80,
    pit_stop_time_loss: 22
  },
  {
    track: "Silverstone",
    current_lap: 18,
    total_laps: 52,
    position: 5,
    current_tire: "Hard",
    tire_wear: 42,
    weather: "Dry",
    base_lap_time: 88,
    pit_stop_time_loss: 20
  },
  {
    track: "Spa",
    current_lap: 12,
    total_laps: 44,
    position: 2,
    current_tire: "Soft",
    tire_wear: 76,
    weather: "Light Rain",
    base_lap_time: 106,
    pit_stop_time_loss: 24
  },
  {
    track: "Suzuka",
    current_lap: 31,
    total_laps: 53,
    position: 7,
    current_tire: "Medium",
    tire_wear: 55,
    weather: "Dry",
    base_lap_time: 91,
    pit_stop_time_loss: 21
  },
  {
    track: "Singapore",
    current_lap: 40,
    total_laps: 62,
    position: 1,
    current_tire: "Hard",
    tire_wear: 71,
    weather: "Humid",
    base_lap_time: 103,
    pit_stop_time_loss: 28
  },
  {
    track: "Interlagos",
    current_lap: 22,
    total_laps: 71,
    position: 4,
    current_tire: "Soft",
    tire_wear: 61,
    weather: "Cloudy",
    base_lap_time: 72,
    pit_stop_time_loss: 19
  },
  {
    track: "Monza",
    current_lap: 35,
    total_laps: 53,
    position: 6,
    current_tire: "Medium",
    tire_wear: 83,
    weather: "Dry",
    base_lap_time: 78,
    pit_stop_time_loss: 21
  }
];



const random = Math.floor(Math.random() * scenarios.length)

let randomScenario = scenarios[random]

const remain_laps = randomScenario.total_laps - randomScenario.current_lap


let container = document.getElementById("race_container")

const track = document.getElementById("track")
track.textContent = "Track:    "+randomScenario.track

const laps_left = document.createElement("p")
laps_left.textContent = `Remaining laps: ${remain_laps}`

const d_position = document.createElement("p")
d_position.textContent = "Current Position: " + randomScenario.position

const tires = document.createElement("p")
tires.textContent = "Current Tires: " + randomScenario.current_tire

const tire_wear = document.createElement("p")
tire_wear.textContent = "Tire Wear: " + randomScenario.tire_wear + "%"

const weather = document.createElement("p")
weather.textContent = "Weather: " + randomScenario.weather 

const base_lap = document.createElement("p")
base_lap.textContent = "Base lap time: " + randomScenario.base_lap_time 


container.appendChild(laps_left)
container.appendChild(d_position)
container.appendChild(tires)
container.appendChild(tire_wear)
container.appendChild(weather)
container.appendChild(base_lap)




































const form = document.getElementById("formm")
form.addEventListener("submit", function(event){
    event.preventDefault()

    let value1 = document.querySelector('input[name="pit_lap"]:checked').value
    let value1_number = +value1
    let value2 = document.querySelector('input[name="tire"]:checked').value
    let value3 = document.querySelector('input[name="drive"]:checked').value


    let strategy = {
        pit_lap: value1,
        tire_compound: value2,
        driving_style: value3
    };

    console.log(strategy.tire_compound)
    console.log(strategy.driving_style)
    console.log(strategy.pit_lap)

})





// let A = [scenario1,scenario2]


// let x =document.getElementById("container")

// A.forEach(elem =>{
//     let p = document.createElement("p")
//     p.textContent = elem
//     x.appendChild(p)
// })






