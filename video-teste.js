const botaoTeste = document.getElementById("botaoTeste");
const videoStage = document.getElementById("videoStage");
const video = document.getElementById("video");

botaoTeste.addEventListener("click", function () {

    // Esconde o botão
    botaoTeste.classList.add("hidden");

    // Mostra o vídeo
    videoStage.classList.remove("hidden");

    // Começa o vídeo do início
    video.currentTime = 0;

    // Reproduz o vídeo
    video.play();
});

// Quando o vídeo terminar
video.addEventListener("ended", function () {

    // Esconde o vídeo
    videoStage.classList.add("hidden");

    // Mostra novamente o botão
    botaoTeste.classList.remove("hidden");

});