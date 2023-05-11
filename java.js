document.addEventListener("DOMContentLoaded", function() {
    var inicioBtn = document.getElementById("inicioBtn");
    var programa = document.getElementById("programa");
    var audioInicio = document.getElementById("audioInicio");
    var no = new Audio("audios/pulsoNo.mp3");
    var si = new Audio("audios/pulsoSi.mp3");
    var isAudioPlaying = false; 

    
    audioInicio.addEventListener("play", function() {
        isAudioPlaying = true; 
    });
    function disableRadios() {
        radioNo.disabled = true;
        radioSi.disabled = true;
    }

    function enableRadios() {
        radioNo.disabled = false;
        radioSi.disabled = false;
    }

    inicioBtn.addEventListener("click", function() {
        inicioBtn.style.display = "none";
        programa.style.display = "block";
        audioInicio.play();
    });
    audioInicio.addEventListener("play", function() {
        isAudioPlaying = true;
        disableRadios();
    });


    audioInicio.addEventListener("ended", function() {
        isAudioPlaying = false;
        enableRadios();
    });


    var radioNo = document.getElementById("no");
    var radioSi = document.getElementById("si");
    var rno = document.getElementById("l1")
    var rsi = document.getElementById("l2")
    
    radioNo.addEventListener("change", function() {
        if (radioNo.checked && !isAudioPlaying) {
            no.play();
            radioNo.style.display = "none";
            radioSi.style.display = "none";
            rno.style.display = "none";
            rsi.style.display = "none";
        }
    });

    radioSi.addEventListener("change", function() {
        if (radioSi.checked && !isAudioPlaying) {
            si.play();
            radioNo.style.display = "none";
            radioSi.style.display = "none";
            rno.style.display = "none";
            rsi.style.display = "none";
        }
    });

    audioInicio.addEventListener("ended", function() {
        isAudioPlaying = false; 
    });
});