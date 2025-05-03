let number = 0
let cron
let h2 = document.querySelector("h2")

let sec = 0
let min = 0
let hou = 0
let clicou = 0

function start(){
    if(clicou == 0) {
        clicou++
        cron = setInterval(function() {
            sec++
            let second = sec.toString().padStart(2, "0")
            let minute = min.toString().padStart(2, "0")
            let hour = hou.toString().padStart(2, "0")
            h2.innerHTML = hour + ":" + minute + ":" + second
            if(sec == 59) {
                sec = -1
                min++
                if(min == 59) {
                    hou++
                    min = 0
                }
            } 
        }, 1000)
    }
}

function stop(){
    clearInterval(cron)
}

function reset(){
    sec = 0
    min = 0
    hou = 0
    clicou = 0
    let second = sec.toString().padStart(2, "0")
    let minute = min.toString().padStart(2, "0")
    let hour = hou.toString().padStart(2, "0")
    h2.innerHTML = hour + ":" + minute + ":" + second
}