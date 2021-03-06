const space = '\40', caracter = '#', segundo = 1000;
const ampulheta = document.querySelector('#ampulheta')
const number = document.querySelector('#number');
const btt = document.querySelector('#btn');
timer = 0;

const gerador = (num) => {
    let meio = num/2,
    auxNum = num;
    btt.disabled = true;
    btt.style.cursor = 'no-drop';
    ampulheta.innerHTML = '';
    ampulheta.style.color = '#FFD166';

    for (i=0; i<num; i++) {
        ampulheta.style.lineHeight = '1px';
        if (i < meio){
            if (i==0) {
                ampulheta.innerHTML += `<pre>${caracter.repeat(num)}</pre>`;
            }
            else if ((auxNum-2)/2>=countP1) {
                ampulheta.innerHTML += `<pre>#${space.repeat(auxNum-2)}#</pre>`;
            }
            else {
                ampulheta.innerHTML += `<pre>${caracter.repeat(auxNum)}</pre>`;
            }
            auxNum-=2;
        }
        else {
            --meio;
            if (i==num-1) {
                ampulheta.innerHTML += `<pre>${caracter.repeat(num)}</pre>`;
            }
            else if (i<countP2) {
                ampulheta.innerHTML += `<pre>#${space.repeat(auxNum)}#</pre>`;
            }
            else {
                ampulheta.innerHTML += `<pre>${caracter.repeat(auxNum+2)}</pre>`;           
            }
            auxNum+=2;
        }
    }
    timer += segundo;
    --countP1, --countP2;
}
const click = () => {
    let num = number.value;
    console.log(num)
    if (num < 0) num*=-1;
    if (num > 60) num=60;
    num *=2;
    
    console.log(num)
    countP1 = num/2,
    countP2 = num;

    const intervalo = setInterval( () => {
        gerador(num);
        if (timer >= num*segundo/2){
            clearInterval(intervalo);
            timer = 0;
            number.value = '';
            btt.disabled = false;
            btt.style.cursor = 'pointer';
        }
    }, segundo);
    
};
btt.addEventListener('click', click, false);
document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') btt.click()});