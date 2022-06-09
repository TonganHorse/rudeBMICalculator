// BMI = 703 * weight / height;

function calculateBMI () {

    let person = document.getElementsByName('person')
    let weight = +person[0].value
    let height = +person[1].value * 12 + +person[2].value

    
    let BMI = 703 * weight / height ** 2;
    
    return BMI
}


const anotherDisplay = document.getElementById('other-content')
const display = document.getElementById('display-BMI')

function showBMI () {
     let BMI = Math.round(calculateBMI())
    
     const button = document.createElement('button')
     button.classList.add('btn')
     button.innerText = 'Clear'

    if(BMI > 24.9 && BMI < 40) {
        display.innerHTML = "Your BMI is " + BMI + ", you fat back!" + '<img src="../img/bmi.jpeg">'
    } else if(BMI < 18.5) {
        display.innerHTML = "Your BMI is " + BMI + ", hit the gym scrub!" + '<img src="../img/bmi.jpeg">'
    } else if(BMI >= 40){
        display.innerHTML = "Your BMI is " + BMI + ", holy shit you're fat!" + '<img src="../img/bmi.jpeg">'
    } else if(BMI === NaN) {
        display.innerHTML = "You must enter a valid weight and height" + '<img src="../img/bmi.jpeg">'
    }else {
        display.innerHTML = "Your BMI is " + BMI + ", you're in range but you're still fat on the inside!" + '<img src="../img/bmi.jpeg">'
    }
    anotherDisplay.append(button)
    button.addEventListener("click", deleteContent)
}
function deleteContent(e) {
    display.innerHTML = "";
    e.target.remove()
}

