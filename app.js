let img = document.querySelectorAll('.img');
for(let card of img){
    card.addEventListener('mousemove',(e)=>{
        let xAxis = (window.innerWidth/2 - e.clientX)/10;
        let yAxis = (window.innerHeight/2 - e.clientY)/10;
        console.log(xAxis,yAxis);
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        
    });
    card.addEventListener("mouseout", (e)=>{
        let xAxis = 0;
        let yAxis = 0;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
}

1234
