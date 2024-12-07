let prometa_completa = (response) => {
    console.log(response.text().then((data) => {
    document.getElementById('resultado').innerHTML = data;
  
    }))
};

let clickbtn = () => {
    fetch('main.php').then(prometa_completa);
}

let btn_iniciar= document.addEventListener('DOMContentLoaded', (event) => {
    window.document.getElementById('btn-inicial').addEventListener('click', (event) => {
        window.document.getElementById('btn-inicial').style.display = 'none';
        window.document.body.style.backgroundImage.search('https://www.google.com/imgres?q=josh%20hutcherson%20meme&imgurl=https%3A%2F%2Fplatform.polygon.com%2Fwp-content%2Fuploads%2Fsites%2F2%2Fchorus%2Fuploads%2Fchorus_asset%2Ffile%2F25125289%2Fvlcsnap_2023_12_01_10h37m31s394.jpg%3Fquality%3D90%26strip%3Dall%26crop%3D9.1276041666667%2C1.5740740740741%2C81.171875%2C96.203703703704&imgrefurl=https%3A%2F%2Fwww.polygon.com%2F23984032%2Fjosh-hutcherson-whistle-edit-meme-trend-explained&docid=JPzaDEN4N5CLGM&tbnid=cmrHyJ1wQWZotM&vet=12ahUKEwj6n8TI-ZGKAxWBHrkGHaoBEHUQM3oECBIQAA..i&w=1555&h=1037&hcb=2&ved=2ahUKEwj6n8TI-ZGKAxWBHrkGHaoBEHUQM3oECBIQAA')
        fetch('main.php').then(prometa_completa);

    });
});


window.onload = btn_iniciar;