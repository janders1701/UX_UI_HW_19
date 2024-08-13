// PRELOADER
    function fade() {
        $(".preloader").fadeOut("slow");
        }
        setTimeout(fade, 2000);

    
//DOWNLOAD BUTTON LOADING BAR
const btnUploadFile = document.querySelector(".buttonDL");

function setButtonProgress(button, percent) {
    const textElement = button.querySelector(".button-text");
    const progressBar = button.querySelector(".button-progress");

    progressBar.style.width = `${percent}%`;

    if (percent >= 0) {
        textElement.textContent = button.dataset.progressText;
    }

    if (percent >= 100) {
        textElement.textContent = button.dataset.completeText;
    }
}

btnUploadFile.addEventListener('click', function() {
    let progress = 0;
    const interval = setInterval(function() {
        if (progress >= 100) {
            clearInterval(interval);
        } else {
            progress += 1;  
            setButtonProgress(btnUploadFile, progress);
        }
    }, 10);
});