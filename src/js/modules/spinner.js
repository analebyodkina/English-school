
function checkSpinner() {
    const video = document.querySelector('.factor-section__video');
    const spinner = document.getElementById("spinner");

    video.onclick = function () {
        spinner.classList.add("_active");
        setTimeout (() => {
            document.getElementById("spinner").classList.remove("_active"); 
          }, 3000);
    }
    
  }

  export default checkSpinner;