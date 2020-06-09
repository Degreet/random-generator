let arrYesOrNo = ['Да', 'Нет']
let arrOrelIReshka = ['Орёл', 'Решка']

function randomInt() {
    let min = minValueInt.value, max = maxValueInt.value, result = Math.round(Math.random() * max)
    if (result >= min) resultNumber.innerText = result
    else randomInt()
}

function yesOrNo() {
    let result = Math.floor(Math.random() * 2)
    resultYesOrNo.innerText = arrYesOrNo[result]
}

function orelIReshka() {
    let result = Math.floor(Math.random() * 2)
    resultOrelIReshka.innerText = arrOrelIReshka[result]
}