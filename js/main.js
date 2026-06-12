const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        topBtn.classList.add('show');
    } else {
        topBtn.classList.remove('show');
    }
});

topBtn.onclick = () => {
    window.scrollTo({ top:0, behavior:'smooth' });
}

function counter(id, start, end, speed){
    let obj = document.getElementById(id);
    let current = start;
    let timer = setInterval(() => {
        current++;
        obj.textContent = current;
        if(current >= end){
            clearInterval(timer);
        }
    }, speed);
}

counter('clients',0,120,20);
counter('projects',0,85,25);
counter('experience',0,10,120);