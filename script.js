
    let btnStart = document.getElementById("start")
    let btnStop = document.getElementById("stop")
    let btnReset = document.getElementById("reset")
    let mili = document.getElementById("mili")
    let segundos = document.getElementById("segundos")
    let minutos = document.getElementById("minutos")
    let horas = document.getElementById("horas")


    let startTimer
    let ms = "00"
    let seg = "00"
    let min = "00"
    let hr = "00"

    function start() {
        startTimer = setInterval(function () {
            ms++

            if (ms == 100) {
                seg++

                if (seg < 10) {
                    seg = "0" + seg
                }
                ms = 0
            }

            if (seg == 60) {
                min++

                if (min < 10) {
                    min = "0" + min
                }
                seg = 0
            }

            if (min == 60) {
                hr++

                if(hr<10){
                   hr = "0" + hr
                }
                min = 0
            }

            btnStart.classList.add("ativo")
            btnStop.classList.remove("ativo")

            atulizavalor()
        }, 10);
    }

    function stop(){
        clearInterval(startTimer)

        btnStop.classList.add("ativo")
        btnStart.classList.remove("ativo")
    }

    function reset(){
        clearInterval(startTimer)
        ms = "00"
        seg = "00"
        min = "00"
        hr = "00"
        atulizavalor()

        btnStart.classList.remove("ativo")
        btnStop.classList.remove("ativo")
    }
    function atulizavalor() {
        mili.innerHTML = ms
        segundos.innerHTML = seg
        minutos.innerHTML = min
        horas.innerHTML = hr
    }

    btnStart.addEventListener("click", start)
    btnStop.addEventListener("click", stop)
    btnReset.addEventListener("click", reset)

