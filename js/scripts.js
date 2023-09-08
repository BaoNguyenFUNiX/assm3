function handleSubmit() {
  //input email address
  const emailValue = document
    .getElementById("info-email")
    .value.toLocaleLowerCase();
  console.log(emailValue);
  //thẻ p hiển thị lỗi
  const errorEmail = document.getElementById("error-email");
  const info_to_show = document.querySelector(".info");
  const sumbit_em = document.querySelector(".submit-email");
  console.log(info_to_show);
  console.log(sumbit_em);
  //điều kiện
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //dùng match để kiểm tra
  const checkEmail = emailValue.match(regex);
  console.log(checkEmail);
  if (checkEmail) {
    errorEmail.innerHTML = "";
    sumbit_em.style.display = "none";
    info_to_show.style.display = "block";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng";
  }
}

function handleOnMouseOver(elm) {
  const viewmore = elm.querySelector(".view-more");
  viewmore.style.display = "block";
}

function handleOnMouseOut(elm) {
  const viewmore = elm.querySelector(".view-more");
  viewmore.style.display = "none";
}

function viewMore(elm) {
  const parentElement = elm.closest(".control-view");
  const grPaElement = parentElement.closest(".parent");
  if (parentElement.innerText == "View more") {
    const unHide = grPaElement.querySelectorAll(".list,.mark,.hb-cnt");
    unHide.forEach((elm) => {
      elm.style.display = "block";
    });
    parentElement.innerHTML = `<button onclick="viewMore(this)" type="button" class="btn btn-warning view-more">View less</button>`;
  } else {
    const Hide = grPaElement.querySelectorAll(".list,.mark,.hb-cnt");
    Hide.forEach((elm) => {
      elm.style.display = "none";
    });
    parentElement.innerHTML = `<button onclick="viewMore(this)" type="button" class="btn btn-warning view-more">View more</button>`;
  }
}
