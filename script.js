const INITIAL_ENERGY = 10
const MIN_ENERGY = 0
const LOW_ENERGY_THRESHOLD = 3

let energy = INITIAL_ENERGY
while (energy >= MIN_ENERGY) {

    console.log(`Current energy level: ${energy}`)

    if (energy === MIN_ENERGY) {
        console.log('The robot is sad... 😢 It needs recharging!')
    } else if (energy <= LOW_ENERGY_THRESHOLD) {
        console.log('The robot is starting to feel tired.... 🥱')
    } else {
        console.log('The robot is happy and awake! 😊')
    }

    energy--
}

console.log('The program is complete. The robot is resting.')