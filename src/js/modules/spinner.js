function checkSpinner() {
  const video = document.querySelector(".factor-section__video");
  const spinner = document.getElementById("spinner");
  const body = document.getElementById("body");

  video.onclick = function () {
    spinner.classList.add("_active");
    body.classList.add("no-scroll");
    setTimeout(() => {
      document.getElementById("spinner").classList.remove("_active");
      document.getElementById("body").classList.remove("no-scroll");
    }, 3000);
  };
}

export default checkSpinner;
