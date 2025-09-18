let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

    let progressStartValue = 0,
        progressEndValue = 70,
        speed = 100;

    let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#422882 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }
    }, speed);

function aumentarFonte(){
    document.querySelectorAll("*").forEach(function(el){
        const currentSize = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = currentSize + 2 + "px";
    });
}

function diminuirFonte(){
    document.querySelectorAll("*").forEach(function(el){
        const currentSize = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = currentSize - 2 + "px";
    });
}