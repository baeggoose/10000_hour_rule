const startButton = document.querySelector(".start_btn");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const loading = document.querySelector(".result_loading");

function calculator() {
  const fieldValue = document.querySelector("#field_value");
  const timeValue = document.querySelector("#time_value");
  const timeValue_int = Number(timeValue.value);

  const fieldResult = document.querySelector(".field_result");
  const timeResult = document.querySelector(".time_result");

  if (fieldValue.value == "") {
    alert("분야가 입력되지 않았습니다.");
    fieldValue.focus();
    return false;
  } else if (timeValue.value == "") {
    alert("시간이 입력되지 않았습니다.");
    timeValue.focus();
    return false;
  } else if (timeValue_int > 24) {
    alert("잘못된 값입니다. 24 이하의 값을 입력해 주세요.");
    return false;
  }

  result.style.display = "none";
  loading.style.display = "flex";

  setTimeout(function () {
    // 값을 먼저 할당한다 코드 순서 주의
    fieldResult.innerText = fieldValue.value;
    timeResult.innerText = parseInt(10000 / timeValue_int, 10);
    loading.style.display = "none";
    result.style.display = "flex";
  }, 1800);
}

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

function copyUrl() {
  // url을 카피하는 소스코드를 구글링하여 넣어주면 된다
  // let url = window.location.href;
  // let tmp = document.createElement("input");

  // execCommand는 사용되지 않아 권장하지않는다. 일부 브라우저는 이를 지원하나, 호환성 목적으로만 유지된다.
  // document.body.appendChild(tmp);
  // tmp.value = url;
  // tmp.select();
  // document.execCommand("copy");
  // document.body.removeChild(tmp);

  // clipboard API를 사용한 클립보드 복사
  // promise 방식을 기반으로 작동하며, 비동기로 클립보드 데이터에 접근할 수 있다

  const url = window.location.href;

  navigator.clipboard.writeText(url).then(() => {
    alert("URL이 복사되었습니다");
  });
}

shareButton.addEventListener("click", copyUrl);
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
startButton.addEventListener("click", calculator);
