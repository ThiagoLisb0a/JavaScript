function getTimeFromSeconds(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
         timeZone: 'GMT' 
    });
   


}

const watch = document.querySelector('.watch');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function() {
        segundos++;
        watch.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

start.addEventListener('click', function(event) {
    clearInterval(timer);
    iniciaRelogio();
});

pause.addEventListener('click', function(event) {
    clearInterval(timer);
    
});
reset.addEventListener('click', function(event) {
    clearInterval(timer);
    watch.innerHTML = '00:00:00';
    segundos = 0;
});
