let energy = 100;

function updateBattery() {
    const chargeLevel = document.getElementById('chargeLevel');
    chargeLevel.style.height = `${energy}%`;
    chargeLevel.className = '';

    if (energy <= 25) {
        chargeLevel.classList.add('red');
        robotStatus.textContent = 'The robot is sad... 😢 It needs recharging⚡!!!';
        robotImage.src = './accets/images/red-cry.svg';
    } else if (energy <= 50) {
        chargeLevel.classList.add('orange');
        robotStatus.textContent = 'The robot is trying to stay awake, but it’s getting harder... 😩';
        robotImage.src = './accets/images/orange-worried.svg';
    } else if (energy <= 75) {
        chargeLevel.classList.add('yellow');
        robotStatus.textContent = 'The robot is starting to feel tired.... 🥱';
        robotImage.src = './accets/images/yellow-smile.svg';
    } else {
        chargeLevel.classList.add('green');
        robotStatus.textContent = 'The robot is happy and awake! 😊';
        robotImage.src = './accets/images/green-laugh.svg';
    }
}

function decreaseEnergy() {
    if (energy > 0) {
        energy -= 5;
        updateBattery();
    }
    if (energy <= 0) {
        alert('The robot needs charging⚡⚡⚡!!!');
        robotImage.src = './accets/images/robot-discharged.svg';
    }
}

function chargeEnergy() {
    energy = 100; // Устанавливаем уровень энергии на 100%
    updateBattery(); // Обновляем визуализацию
}

updateBattery();

// const INITIAL_ENERGY = 100
// const MIN_ENERGY = 0
// const LOW_ENERGY_THRESHOLD = 30

// let energy = INITIAL_ENERGY
// while (energy >= MIN_ENERGY) {

//     console.log(`Current energy level: ${energy}`)

//     if (energy === MIN_ENERGY) {
//         console.log('The robot is sad... 😢 It needs recharging!')
//     } else if (energy <= LOW_ENERGY_THRESHOLD) {
//         console.log('The robot is starting to feel tired.... 🥱')
//     } else {
//         console.log('The robot is happy and awake! 😊')
//     }

//     energy = energy - 10
// }

// console.log('The program is complete. The robot is resting.')