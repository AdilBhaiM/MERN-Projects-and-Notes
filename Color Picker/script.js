const myParent = document.getElementsByTagName('div')[0]
console.log(myParent)



function SetColor(Color){myParent.style.backgroundColor = Color;}

function randomColor(){
    const red = Math.round(Math.random()  * 255)
    const Green = Math.round(Math.random()  * 255)
    const Blue = Math.round(Math.random()  * 255)
    const color = `rgb(${red}, ${Green}, ${Blue})`
    myParent.style.backgroundColor = color
    // console.log(color)
    // return randombtn
}



// Btn_red.addEventListener('click',function(){})
