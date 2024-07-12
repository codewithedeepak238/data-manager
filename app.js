let itemArray = ['<i class="fa-solid fa-house w-[80px] h-[80px] bg-blue-100 rounded-[5px] flex items-center justify-center text-[36px]"></i>', 
    '<i class="fa-solid fa-house w-[80px] h-[80px] bg-blue-100 rounded-[5px] flex items-center justify-center text-[36px]"></i>', 
    '<i class="fa-brands fa-github w-[80px] h-[80px] bg-blue-100 rounded-[5px] flex items-center justify-center text-[36px]"></i>', 
    '<i class="fa-brands fa-github w-[80px] h-[80px] bg-blue-100 rounded-[5px] flex items-center justify-center text-[36px]"></i>', 
    '<i class="fa-solid fa-star w-[80px] h-[80px] bg-blue-100 rounded-[5px] flex items-center justify-center text-[36px]"></i>',
    '<i class="fa-solid fa-star w-[80px] h-[80px] bg-blue-100 rounded-[5px] flex items-center justify-center text-[36px]"></i>', 
    '<i class="fa-brands fa-discord w-[80px] h-[80px] bg-blue-100 rounded-[5px] flex items-center justify-center text-[36px]"></i>',
    '<i class="fa-brands fa-discord w-[80px] h-[80px] bg-blue-100 rounded-[5px] flex items-center justify-center text-[36px]"></i>', 
    '<i class="fa-solid fa-gift w-[80px] h-[80px] bg-blue-100 rounded-[5px] flex items-center justify-center text-[36px]"></i>', 
    '<i class="fa-solid fa-gift w-[80px] h-[80px] bg-blue-100 rounded-[5px] flex items-center justify-center text-[36px]"></i>',
    '<i class="fa-solid fa-earth-americas w-[80px] h-[80px] bg-blue-100 rounded-[5px] flex items-center justify-center text-[36px]"></i>',
    '<i class="fa-solid fa-earth-americas w-[80px] h-[80px] bg-blue-100 rounded-[5px] flex items-center justify-center text-[36px]"></i>', 
    '<i class="fa-solid fa-palette w-[80px] h-[80px] bg-blue-100 rounded-[5px] flex items-center justify-center text-[36px]"></i>',
    '<i class="fa-solid fa-palette w-[80px] h-[80px] bg-blue-100 rounded-[5px] flex items-center justify-center text-[36px]"></i>', 
    '<i class="fa-solid fa-face-smile w-[80px] h-[80px] bg-blue-100 rounded-[5px] flex items-center justify-center text-[36px]"></i>',
    '<i class="fa-solid fa-face-smile w-[80px] h-[80px] bg-blue-100 rounded-[5px] flex items-center justify-center text-[36px]"></i>']

let suffle_Cards = itemArray.sort(()=>(Math.random()> 0.5)?2:-1);
for(let i=0; i<itemArray.length;i++){
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = suffle_Cards[i];
    card.onclick = function(){
        this.classList.add("cardOpen");
        setTimeout(function(){
            if(document.querySelectorAll('.cardOpen').length>1){
                if(document.querySelectorAll('.cardOpen')[0].innerHTML == document.querySelectorAll('.cardOpen')[1].innerHTML){
                    document.querySelectorAll('.cardOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.cardOpen')[1].classList.add('boxMatch');
                    
                    document.querySelectorAll('.cardOpen')[1].classList.remove('cardOpen');
                    document.querySelectorAll('.cardOpen')[0].classList.remove('cardOpen');

                    if(document.querySelectorAll('.boxMatch').length == itemArray.length){
                        alert("win");
                    }
                }else{
                    document.querySelectorAll('.cardOpen')[1].classList.remove('cardOpen');
                    document.querySelectorAll('.cardOpen')[0].classList.remove('cardOpen');
                }
            }
        }, 500)
    }
    document.getElementById("itembox").appendChild(card);
}