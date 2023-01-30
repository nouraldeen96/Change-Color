
const body = document.querySelector('body')
const btn = document.querySelector('.btn')


btn.addEventListener("click",function(){
    const r = parseInt(Math.random()*255)
    const g = parseInt(Math.random()*255)
    const b = parseInt(Math.random()*255)
    body.style.backgroundColor =`rgb(${r},${g},${b})`
    btn.style.color = `rgb(${parseInt(r/2)},${parseInt(g/2)},${parseInt(b/2)})`
    console.log(r,g,b,parseInt(r*0.33),parseInt(g*0.5),parseInt(b*0.2))
});



