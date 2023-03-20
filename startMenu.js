$('#single').click(()=>{
    window.open('https://toosic.github.io/SinglePlayer/', "_self");
})

$('#multy').click(()=>{
    window.open('https://toosic.github.io/MultyPlayer/', "_self");
})

$('#quit').click(()=>{
    window.close();
})

function opneModal1(){
    let modalWidonw = document.querySelector('.popup-modal1');
    let overlay = document.querySelector('.overlay');


    modalWidonw.style.display = "block";
    overlay.style.display = "block";
}
function closeModal1(){
    let modalWidonw = document.querySelector('.popup-modal1');
    let overlay = document.querySelector('.overlay');


    modalWidonw.style.display = "none";
    overlay.style.display = "none";
}
