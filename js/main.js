

window.onload = () => { //executa o código após o carregamento da página

    let promessa = fetch('http:localhost:3000/index.php');

    let btn_iniciar_func = document.addEventListener('DOMContentLoaded', (event) => {
        console.log('DOM completamente carregado e analisado');

        window.document.getElementById('btn-inicial').addEventListener('click', (event) => {

        //    window.document.getElementById('btn-inicial').style.display = 'none';
            const overlay = document.getElementsByTagName('body'); //estilizando com css :D
           
            overlay.style.animation.playstate = 'running';
            setTimeout(function() {
               overlay.style.animation.playstate = 'stopped'; 
              }, 2000);
            overlay.style.opacity = 1;
            
            
            
        });
    });
}