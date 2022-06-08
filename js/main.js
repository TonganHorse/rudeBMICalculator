// BMI = 703 * weight / height;

function calculateBMI () {

    let person = document.getElementsByName('person')
    let weight = +person[0].value
    let height = +person[1].value * 12 + +person[2].value
    
    let BMI = 703 * weight / height ** 2;
    
    return BMI
}



function showBMI () {
const display = document.getElementById('display-BMI')
     let BMI = Math.round(calculateBMI())
    
    if(BMI > 24.9) {
        display.innerText = "your BMI is " + BMI + ", you fat back!"
    } else if(BMI < 18.5) {
        display.innerText = "your BMI is " + BMI + ", hit the gym scrub!"
    } else {
        display.innerText = "your BMI is " + BMI + ", you're in range but you're still fat on the inside!"
    }
}

