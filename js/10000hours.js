const startButton = document.querySelector(".start_btn");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const loading = document.querySelector(".result_loading");

shareButton.addEventListener("click", copyUrl);
openButton.addEventListener("click", openModal);
closemodal.addEventListener("click", closeModal);
startButton.addEventListener("click", calculator);
